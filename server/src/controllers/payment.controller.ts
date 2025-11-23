import type { Request, Response } from "express";
import { prisma } from "../config/db";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const paymentController = {
  /**
   * Create a Stripe checkout session for course enrollment
   */
  createCheckoutSession: async (req: Request, res: Response) => {
    try {
      const { courseId } = req.body;

      const clerkUserId = req.auth?.userId;
      const userEmail = req.auth?.userEmail;

      if (!clerkUserId) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized - Please log in",
        });
      }

      // Find user by Clerk ID
      const user = await prisma.user.findUnique({
        where: { clerkId: clerkUserId },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
        },
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      if (!courseId) {
        return res.status(400).json({
          success: false,
          message: "Course ID is required",
        });
      }

      // Fetch course with instructor details
      const course = await prisma.course.findUnique({
        where: { id: courseId },
        include: {
          instructor: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true,
            },
          },
        },
      });

      if (!course) {
        return res.status(404).json({
          success: false,
          message: "Course not found",
        });
      }

      if (course.status !== "PUBLISHED") {
        return res.status(400).json({
          success: false,
          message: "This course is not available for purchase",
        });
      }

      // Check if already enrolled
      const existingEnrollment = await prisma.enrollment.findUnique({
        where: {
          userId_courseId: {
            userId: user.id,
            courseId,
          },
        },
      });

      if (existingEnrollment) {
        return res.status(400).json({
          success: false,
          message: "You are already enrolled in this course",
        });
      }

      // Handle free courses
      if (course.price === 0) {
        return res.status(400).json({
          success: false,
          message:
            "This course is free. You can enroll directly without payment.",
        });
      }

      // Calculate platform fee and instructor amount
      const platformFeePercentage = 10;
      const platformFee = Math.round(
        (course.price * platformFeePercentage) / 100
      );
      const instructorAmount = course.price - platformFee;

      // Create Stripe checkout session
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        success_url: `${process.env.FRONTEND_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.FRONTEND_URL}/courses/${course.slug}`,
        customer_email: userEmail || user.email,
        client_reference_id: user.id,
        metadata: {
          courseId,
          userId: user.id,
          clerkUserId,
          instructorId: course.instructorId,
          instructorAmount: instructorAmount.toString(),
          platformFee: platformFee.toString(),
        },
        line_items: [
          {
            price_data: {
              currency: course.currency.toLowerCase(),
              unit_amount: Math.round(course.price * 100), // Convert to cents
              product_data: {
                name: course.title,
                description:
                  course.description?.slice(0, 200) || "Course enrollment",
                images: course.thumbnail ? [course.thumbnail] : [],
                metadata: {
                  courseId,
                },
              },
            },
            quantity: 1,
          },
        ],
      });

      return res.status(200).json({
        success: true,
        sessionId: session.id,
        url: session.url,
      });
    } catch (error: any) {
      console.error("Create checkout session error:", error);

      return res.status(500).json({
        success: false,
        message: "Failed to create checkout session",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      });
    }
  },

  /**
   * Verify payment and create enrollment
   */
  verifyPayment: async (req: Request, res: Response) => {
    try {
      const { sessionId } = req.body;
      const clerkUserId = req.auth?.userId;

      if (!clerkUserId) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized User",
        });
      }

      if (!sessionId) {
        return res.status(400).json({
          success: false,
          message: "Session ID is required",
        });
      }

      // Retrieve session from Stripe
      const session = await stripe.checkout.sessions.retrieve(sessionId);

      if (session.payment_status !== "paid") {
        return res.status(400).json({
          success: false,
          message: "Payment not completed",
        });
      }

      const { courseId, userId, instructorId, instructorAmount, platformFee } =
        session.metadata!;

      // Find user
      const user = await prisma.user.findUnique({
        where: { clerkId: clerkUserId },
      });

      if (!user || user.id !== userId) {
        return res.status(403).json({
          success: false,
          message: "Unauthorized access",
        });
      }

      if (!courseId) {
        return res.status(404).json({
          success: false,
          message: "Course Not Found",
        });
      }

      // Check if enrollment already exists
      const existingEnrollment = await prisma.enrollment.findUnique({
        where: {
          userId_courseId: {
            userId,
            courseId,
          },
        },
      });

      if (existingEnrollment) {
        return res.status(200).json({
          success: true,
          message: "Already enrolled",
          enrollment: existingEnrollment,
        });
      }

      // Create enrollment and payment history in a transaction
      const result = await prisma.$transaction(async (tx) => {
        // Create enrollment
        const enrollment = await tx.enrollment.create({
          data: {
            userId,
            courseId,
            enrolledAt: new Date(),
          },
          include: {
            course: {
              select: {
                title: true,
                thumbnail: true,
                slug: true,
              },
            },
          },
        });

        // Create payment history
        const paymentHistory = await tx.paymentHistory.create({
          data: {
            userId,
            courseId,
            amount: session.amount_total! / 100, // Convert from cents
            currency: session.currency?.toUpperCase() || "USD",
            status: "COMPLETED",
            transactionId: session.payment_intent as string,
            paymentMethod: "CARD",
            paidAt: new Date(),
          },
        });

        // Update course students count
        await tx.course.update({
          where: { id: courseId },
          data: {
            studentsCount: {
              increment: 1,
            },
          },
        });

        // Create notification for student
        await tx.notification.create({
          data: {
            userId,
            type: "COURSE_ENROLLMENT",
            title: "Successfully Enrolled",
            message: `You have successfully enrolled in ${enrollment.course.title}`,
            data: {
              courseId,
              courseName: enrollment.course.title,
              courseSlug: enrollment.course.slug,
            },
          },
        });

        // Create notification for instructor
        // await tx.notification.create({
        //   data: {
        //     userId: instructorId,
        //     type: "NEW_STUDENT",
        //     title: "New Student Enrollment",
        //     message: `A new student has enrolled in your course`,
        //     data: {
        //       courseId,
        //       studentId: userId,
        //     },
        //   },
        // });

        return { enrollment, paymentHistory };
      });

      return res.status(200).json({
        success: true,
        message: "Payment verified and enrollment created",
        enrollment: result.enrollment,
      });
    } catch (error: any) {
      console.error("Verify payment error:", error);

      return res.status(500).json({
        success: false,
        message: "Failed to verify payment",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      });
    }
  },

  /**
   * Get payment history for a user
   */
  getPaymentHistory: async (req: Request, res: Response) => {
    try {
      const clerkUserId = req.auth?.userId;

      if (!clerkUserId) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      const user = await prisma.user.findUnique({
        where: { clerkId: clerkUserId },
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      const payments = await prisma.paymentHistory.findMany({
        where: { userId: user.id },
        include: {
          course: {
            select: {
              id: true,
              title: true,
              thumbnail: true,
              slug: true,
            },
          },
        },
        orderBy: { paidAt: "desc" },
      });

      return res.status(200).json({
        success: true,
        payments,
      });
    } catch (error: any) {
      console.error("Get payment history error:", error);

      return res.status(500).json({
        success: false,
        message: "Failed to fetch payment history",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      });
    }
  },

  /**
   * Get instructor earnings
   */
  getInstructorEarnings: async (req: Request, res: Response) => {
    try {
      const clerkUserId = req.auth?.userId;

      if (!clerkUserId) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      const user = await prisma.user.findUnique({
        where: { clerkId: clerkUserId },
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      if (user.role !== "INSTRUCTOR" && user.role !== "ADMIN") {
        return res.status(403).json({
          success: false,
          message: "Only instructors can view earnings",
        });
      }

      // Get all courses by this instructor
      const courses = await prisma.course.findMany({
        where: { instructorId: user.id },
        select: { id: true },
      });

      const courseIds = courses.map((c) => c.id);

      // Get payment history for instructor's courses
      const payments = await prisma.paymentHistory.findMany({
        where: {
          courseId: { in: courseIds },
          status: "COMPLETED",
        },
        include: {
          course: {
            select: {
              id: true,
              title: true,
              thumbnail: true,
            },
          },
          user: {
            select: {
              firstName: true,
              lastName: true,
              email: true,
            },
          },
        },
        orderBy: { paidAt: "desc" },
      });

      // Calculate total earnings (90% of total sales)
      const totalRevenue = payments.reduce((sum, p) => sum + p.amount, 0);
      const platformFee = totalRevenue * 0.1;
      const instructorEarnings = totalRevenue * 0.9;

      // Group by course
      const earningsByCourse = payments.reduce((acc: any, payment) => {
        const courseId = payment.course.id;
        if (!acc[courseId]) {
          acc[courseId] = {
            course: payment.course,
            totalSales: 0,
            revenue: 0,
            studentCount: 0,
          };
        }
        acc[courseId].totalSales += payment.amount;
        acc[courseId].revenue += payment.amount * 0.9; // 90% to instructor
        acc[courseId].studentCount += 1;
        return acc;
      }, {});

      return res.status(200).json({
        success: true,
        summary: {
          totalRevenue,
          platformFee,
          instructorEarnings,
          totalTransactions: payments.length,
        },
        earningsByCourse: Object.values(earningsByCourse),
        recentTransactions: payments.slice(0, 10),
      });
    } catch (error: any) {
      console.error("Get instructor earnings error:", error);

      return res.status(500).json({
        success: false,
        message: "Failed to fetch earnings",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      });
    }
  },

  /**
   * Free course enrollment (no payment required)
   */
  enrollFreeCourse: async (req: Request, res: Response) => {
    try {
      const { courseId } = req.body;
      const clerkUserId = req.auth?.userId;

      if (!clerkUserId) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      const user = await prisma.user.findUnique({
        where: { clerkId: clerkUserId },
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      if (!courseId) {
        return res.status(400).json({
          success: false,
          message: "Course ID is required",
        });
      }

      // Fetch course
      const course = await prisma.course.findUnique({
        where: { id: courseId },
        select: {
          id: true,
          title: true,
          price: true,
          status: true,
          slug: true,
          instructorId: true,
        },
      });

      if (!course) {
        return res.status(404).json({
          success: false,
          message: "Course not found",
        });
      }

      if (course.status !== "PUBLISHED") {
        return res.status(400).json({
          success: false,
          message: "This course is not available",
        });
      }

      if (course.price !== 0) {
        return res.status(400).json({
          success: false,
          message: "This course requires payment",
        });
      }

      // Check existing enrollment
      const existingEnrollment = await prisma.enrollment.findUnique({
        where: {
          userId_courseId: {
            userId: user.id,
            courseId,
          },
        },
      });

      if (existingEnrollment) {
        return res.status(400).json({
          success: false,
          message: "You are already enrolled in this course",
        });
      }

      // Create enrollment
      const result = await prisma.$transaction(async (tx) => {
        const enrollment = await tx.enrollment.create({
          data: {
            userId: user.id,
            courseId,
          },
          include: {
            course: {
              select: {
                title: true,
                slug: true,
                thumbnail: true,
              },
            },
          },
        });

        await tx.course.update({
          where: { id: courseId },
          data: { studentsCount: { increment: 1 } },
        });

        await tx.notification.create({
          data: {
            userId: user.id,
            type: "COURSE_ENROLLMENT",
            title: "Successfully Enrolled",
            message: `You have successfully enrolled in ${course.title}`,
            data: {
              courseId,
              courseName: course.title,
              courseSlug: course.slug,
            },
          },
        });

        await tx.notification.create({
          data: {
            userId: course.instructorId,
            type: "NEW_STUDENT",
            title: "New Student Enrollment",
            message: `A new student has enrolled in your free course`,
            data: {
              courseId,
              studentId: user.id,
            },
          },
        });

        return enrollment;
      });

      return res.status(201).json({
        success: true,
        message: "Successfully enrolled in the course",
        enrollment: result,
      });
    } catch (error: any) {
      console.error("Free course enrollment error:", error);

      return res.status(500).json({
        success: false,
        message: "Failed to enroll in course",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      });
    }
  },
};

export default paymentController;
