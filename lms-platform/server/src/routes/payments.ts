// server/routes/payment.ts
import { Router } from "express";
import Stripe from "stripe";
import { prisma } from "../config/db";
import { authenticateToken } from "../missleware/auth";

const router = Router();

// Initialize Stripe with safe defaults
const stripeSecret = process.env.STRIPE_SECRET_KEY;
const stripe = stripeSecret ? new Stripe(stripeSecret) : (null as unknown as Stripe);

function ensureStripeConfigured() {
  const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
  if (!stripeSecret) {
    return { ok: false, error: "Missing STRIPE_SECRET_KEY" };
  }
  if (!frontendUrl) {
    return { ok: false, error: "Missing FRONTEND_URL" };
  }
  return { ok: true, frontendUrl } as const;
}

// All payment routes require authentication
router.use(authenticateToken);

// Create Checkout Session
router.post("/create-checkout-session", async (req, res) => {
  try {
    const conf = ensureStripeConfigured();
    if (!conf.ok) {
      console.error("Stripe configuration error:", conf.error);
      return res.status(500).json({ error: "Stripe not configured", details: conf.error });
    }
    const { courseId } = req.body;

    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (!req.user?.email) {
      return res.status(400).json({ error: "Missing user email in token" });
    }
    const dbUser = await prisma.user.findUnique({ where: { email: req.user.email } });
    if (!dbUser) {
      return res.status(404).json({ error: "User not found" });
    }
    const userId = dbUser.id;

    // Get course details
    const course = await prisma.course.findUnique({
      where: { id: courseId },
      include: {
        instructor: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    if (course.status !== "PUBLISHED") {
      return res
        .status(400)
        .json({ error: "Course is not available for purchase" });
    }

    // Check if already enrolled
    const existingEnrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId,
        },
      },
    });

    if (existingEnrollment) {
      return res.status(400).json({ error: "Already enrolled in this course" });
    }

    // Handle free courses
    if (course.price === 0) {
      const enrollment = await prisma.enrollment.create({
        data: {
          userId,
          courseId,
        },
      });

      await prisma.course.update({
        where: { id: courseId },
        data: {
          studentsCount: {
            increment: 1,
          },
        },
      });

      return res.json({
        sessionId: null,
        url: null,
        enrollment,
        message: "Enrolled in free course",
      });
    }

    // Create Stripe Checkout Session
    const customerEmail = req.user?.email;
    const supportedCurrencies = new Set([
      "usd",
      "eur",
      "gbp",
      "aud",
      "cad",
      "inr",
      "jpy",
      "aed",
      "sar",
    ]);
    const requestedCurrency = (course.currency || "USD").toLowerCase();
    const currency = supportedCurrencies.has(requestedCurrency)
      ? requestedCurrency
      : "usd";
    const amountCents = Math.max(Math.round(Number(course.price) * 100), 50);

    const params: Stripe.Checkout.SessionCreateParams = {
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: course.title,
              description: `${course.level} level course by ${course.instructor.firstName} ${course.instructor.lastName}`,
              images: course.thumbnail ? [course.thumbnail] : [],
            },
            unit_amount: amountCents,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${conf.frontendUrl}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${conf.frontendUrl}/payment/cancel`,
      metadata: {
        userId,
        courseId,
        courseTitle: course.title,
      },
    };
    if (customerEmail) params.customer_email = customerEmail;
    const session = await stripe.checkout.sessions.create(params);

    res.json({
      sessionId: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error("Error creating checkout session:", (error as any)?.message || error);
    res.status(500).json({ error: "Failed to create checkout session", details: (error as any)?.message });
  }
});

// Verify Payment and Create Enrollment
router.post("/verify", async (req, res) => {
  try {
    const conf = ensureStripeConfigured();
    if (!conf.ok) {
      console.error("Stripe configuration error:", conf.error);
      return res.status(500).json({ error: "Stripe not configured", details: conf.error });
    }
    const { sessionId } = req.body;

    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (!req.user?.email) {
      return res.status(400).json({ error: "Missing user email in token" });
    }
    const dbUser = await prisma.user.findUnique({ where: { email: req.user.email } });
    if (!dbUser) {
      return res.status(404).json({ error: "User not found" });
    }
    const userId = dbUser.id;

    if (!sessionId) {
      return res.status(400).json({ error: "Session ID required" });
    }

    // Retrieve session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    if (session.payment_status !== "paid") {
      return res.status(400).json({ error: "Payment not completed" });
    }

    const { courseId, userId: sessionUserId } = session.metadata as {
      courseId: string;
      userId: string;
    };

    // Verify user matches
    if (sessionUserId !== userId) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    // Check if enrollment already exists (prevent duplicate processing)
    let enrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId,
        },
      },
    });

    if (enrollment) {
      return res.json({
        success: true,
        enrollment,
        message: "Already enrolled",
      });
    }

    // Create enrollment
    enrollment = await prisma.enrollment.create({
      data: {
        userId,
        courseId,
      },
      include: {
        course: {
          include: {
            instructor: true,
            category: true,
          },
        },
      },
    });

    // Update course student count
    await prisma.course.update({
      where: { id: courseId },
      data: {
        studentsCount: {
          increment: 1,
        },
      },
    });

    // Create payment history record
    await prisma.paymentHistory.create({
      data: {
        userId,
        courseId,
        amount: session.amount_total! / 100, // Convert from cents
        currency: session.currency!.toUpperCase(),
        status: "COMPLETED",
        transactionId: session.payment_intent as string,
        paymentMethod: "CARD",
        paidAt: new Date(),
      },
    });

    // Send enrollment notification
    // await prisma.notification.create({
    //   data: {
    //     userId,
    //     type: "COURSE_ENROLLMENT",
    //     title: "Course Enrollment Successful",
    //     message: `You've successfully enrolled in ${enrollment.course.title}`,
    //     data: {
    //       courseId,
    //       courseName: enrollment.course.title,
    //     },
    //   },
    // });

    // // Notify instructor
    // await prisma.notification.create({
    //   data: {
    //     userId: enrollment.course.instructorId,
    //     type: "NEW_STUDENT",
    //     title: "New Student Enrolled",
    //     message: `A new student enrolled in ${enrollment.course.title}`,
    //     data: {
    //       courseId,
    //       courseName: enrollment.course.title,
    //     },
    //   },
    // });

    res.json({
      success: true,
      enrollment,
      message: "Payment verified and enrollment created",
    });
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({ error: "Failed to verify payment" });
  }
});

// Webhook endpoint for Stripe events
router.post(
  "/webhook",
  // Use raw body for signature verification
  require("express").raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];

    if (!sig) {
      return res.status(400).send("Missing signature");
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    } catch (err: any) {
      console.error("Webhook signature verification failed:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;

        if (session.payment_status === "paid") {
          const { courseId, userId } = session.metadata as {
            courseId: string;
            userId: string;
          };

          // Check if enrollment already exists
          const existingEnrollment = await prisma.enrollment.findUnique({
            where: {
              userId_courseId: {
                userId,
                courseId,
              },
            },
          });

          if (!existingEnrollment) {
            // Create enrollment
            await prisma.enrollment.create({
              data: {
                userId,
                courseId,
              },
            });

            // Update course student count
            await prisma.course.update({
              where: { id: courseId },
              data: {
                studentsCount: {
                  increment: 1,
                },
              },
            });

            // Create payment history
            await prisma.paymentHistory.create({
              data: {
                userId,
                courseId,
                amount: session.amount_total! / 100,
                currency: session.currency!.toUpperCase(),
                status: "COMPLETED",
                transactionId: session.payment_intent as string,
                paymentMethod: "CARD",
                paidAt: new Date(),
              },
            });

            console.log(
              `✅ Enrollment created via webhook for user ${userId}, course ${courseId}`
            );
          }
        }
        break;
      }

      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.error(`❌ Payment failed: ${paymentIntent.id}`);
        // Handle failed payment (send notification, etc.)
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.json({ received: true });
  }
);

// Get payment history for user
router.get("/history", async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const userId = req.user.id;

    const payments = await prisma.paymentHistory.findMany({
      where: { userId },
      include: {
        course: {
          select: {
            id: true,
            title: true,
            thumbnail: true,
          },
        },
      },
      orderBy: {
        paidAt: "desc",
      },
    });

    res.json(payments);
  } catch (error) {
    console.error("Error fetching payment history:", error);
    res.status(500).json({ error: "Failed to fetch payment history" });
  }
});

export default router;
