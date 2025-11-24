// server/src/controllers/enrollment.controller.ts
import { Request, Response } from "express";
import { prisma } from "../config/db";

/**
 * Enroll in a course
 * POST /api/v1/enrollments
 */
export const enrollInCourse = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.body;
    const userId = req.auth?.userId;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!courseId) {
      return res.status(400).json({ message: "Course ID is required" });
    }

    // Check if course exists and is published
    const course = await prisma.course.findUnique({
      where: { id: courseId },
      include: {
        instructor: true,
        category: true,
      },
    });

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    if (course.status !== "PUBLISHED") {
      return res
        .status(400)
        .json({ message: "Course is not available for enrollment" });
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
      return res
        .status(400)
        .json({ message: "Already enrolled in this course" });
    }

    // For paid courses, check if payment exists
    if (course.price > 0) {
      const payment = await prisma.paymentHistory.findFirst({
        where: {
          userId,
          courseId,
          status: "COMPLETED",
        },
      });

      if (!payment) {
        return res
          .status(400)
          .json({ message: "Payment required for this course" });
      }
    }

    // Create enrollment
    const enrollment = await prisma.enrollment.create({
      data: {
        userId,
        courseId,
      },
      include: {
        course: {
          include: {
            instructor: true,
            category: true,
            sections: {
              include: {
                chapters: true,
              },
            },
          },
        },
      },
    });

    // Update student count
    await prisma.course.update({
      where: { id: courseId },
      data: {
        studentsCount: {
          increment: 1,
        },
      },
    });

    // Create notification for student
    await prisma.notification.create({
      data: {
        userId,
        type: "COURSE_ENROLLMENT",
        title: "Enrollment Successful",
        message: `You've successfully enrolled in ${course.title}`,
        data: {
          courseId,
          courseName: course.title,
        },
      },
    });

    // Create notification for instructor
    await prisma.notification.create({
      data: {
        userId: course.instructorId,
        type: "NEW_STUDENT",
        title: "New Student Enrolled",
        message: `A new student enrolled in ${course.title}`,
        data: {
          courseId,
          courseName: course.title,
        },
      },
    });

    res.status(201).json({
      enrollment,
      message: "Successfully enrolled in course",
    });
  } catch (error) {
    console.error("Enroll in course error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Get enrollment status for a course
 * GET /api/v1/enrollments/status/:courseId
 */
export const getEnrollmentStatus = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;
    const userId = req.auth?.userId;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!courseId) {
      return res.status(400).json({ message: "Course ID is required" });
    }

    const enrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId,
        },
      },
      include: {
        chapterProgress: true,
        course: {
          include: {
            instructor: true,
            category: true,
          },
        },
      },
    });

    res.json({
      isEnrolled: !!enrollment,
      enrollment: enrollment || null,
    });
  } catch (error) {
    console.error("Get enrollment status error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Get user's enrollments
 * GET /api/v1/enrollments/my-enrollments
 */
export const getUserEnrollments = async (req: Request, res: Response) => {
  try {
    const userId = req.auth?.userId;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const enrollments = await prisma.enrollment.findMany({
      where: { userId },
      include: {
        course: {
          include: {
            instructor: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
                avatar: true,
                bio: true,
              },
            },
            category: true,
            sections: {
              include: {
                chapters: true,
              },
            },
          },
        },
        chapterProgress: {
          where: {
            userId,
          },
        },
      },
      orderBy: {
        lastAccessedAt: "desc",
      },
    });

    if (!enrollments) {
      return res.status(404).json({ message: "enrollment not found" });
    }

    // Calculate progress for each enrollment
    const enrichedEnrollments = enrollments.map((enrollment) => {
      const totalChapters = enrollment.course.sections.reduce(
        (acc, section) => acc + section.chapters.length,
        0
      );

      const completedChapters = enrollment.chapterProgress.filter(
        (cp) => cp.isCompleted
      ).length;

      return {
        ...enrollment,
        totalChapters,
        completedChapters,
        progressPercentage:
          totalChapters > 0 ? (completedChapters / totalChapters) * 100 : 0,
      };
    });

    res.json(enrichedEnrollments);
  } catch (error) {
    console.error("Get user enrollments error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Get enrollment details by ID
 * GET /api/v1/enrollments/:enrollmentId
 */
export const getEnrollmentById = async (req: Request, res: Response) => {
  try {
    const { enrollmentId } = req.params;
    const userId = req.auth?.userId;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!enrollmentId) {
      return res.status(403).json({ message: "enrollment id is required" });
    }

    const enrollment = await prisma.enrollment.findFirst({
      where: {
        id: enrollmentId,
        userId,
      },
      include: {
        course: {
          include: {
            instructor: true,
            category: true,
            sections: {
              include: {
                chapters: true,
              },
            },
          },
        },
        chapterProgress: true,
      },
    });

    if (!enrollment) {
      return res.status(404).json({ message: "Enrollment not found" });
    }

    res.json(enrollment);
  } catch (error) {
    console.error("Get enrollment by ID error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Unenroll from a course (optional feature)
 * DELETE /api/v1/enrollments/:courseId
 */
export const unenrollFromCourse = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;
    const userId = req.auth?.userId;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!courseId) {
      return res.status(404).json({ message: "course is required" });
    }

    // Find enrollment
    const enrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId,
        },
      },
    });

    if (!enrollment) {
      return res.status(404).json({ message: "Enrollment not found" });
    }

    // Delete all chapter progress first
    await prisma.chapterProgress.deleteMany({
      where: {
        enrollmentId: enrollment.id,
      },
    });

    // Delete enrollment
    await prisma.enrollment.delete({
      where: {
        id: enrollment.id,
      },
    });

    // Update student count
    await prisma.course.update({
      where: { id: courseId },
      data: {
        studentsCount: {
          decrement: 1,
        },
      },
    });

    res.json({ message: "Successfully unenrolled from course" });
  } catch (error) {
    console.error("Unenroll from course error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Get enrollment statistics (for admin/instructor)
 * GET /api/v1/enrollments/stats/:courseId
 */
export const getEnrollmentStats = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;
    const userId = req.auth?.userId;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!courseId) {
      return res.status(404).json({ message: "course is required" });
    }

    // Verify user is instructor or admin
    const course = await prisma.course.findUnique({
      where: {
        id: courseId,
      },
      select: { instructorId: true },
    });

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });

    if (course.instructorId !== userId && user?.role !== "ADMIN") {
      return res.status(403).json({ message: "Access denied" });
    }

    // Get enrollment statistics
    const totalEnrollments = await prisma.enrollment.count({
      where: { courseId },
    });

    const completedEnrollments = await prisma.enrollment.count({
      where: {
        courseId,
        isCompleted: true,
      },
    });

    const avgProgress = await prisma.enrollment.aggregate({
      where: { courseId },
      _avg: {
        progressPercentage: true,
      },
    });

    const recentEnrollments = await prisma.enrollment.findMany({
      where: { courseId },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            avatar: true,
          },
        },
      },
      orderBy: {
        enrolledAt: "desc",
      },
      take: 10,
    });

    res.json({
      totalEnrollments,
      completedEnrollments,
      averageProgress: avgProgress._avg.progressPercentage || 0,
      completionRate:
        totalEnrollments > 0
          ? (completedEnrollments / totalEnrollments) * 100
          : 0,
      recentEnrollments,
    });
  } catch (error) {
    console.error("Get enrollment stats error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const checkEnroll = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;
    const userId = req.auth?.clerkId;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!courseId) {
      return res.status(400).json({ message: "Course ID is required" });
    }

    // Find user in your database
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Check if enrollment exists
    const enrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId: user.id,
          courseId,
        },
      },
    });

    return res.json({
      success: true,
      isEnrolled: !!enrollment,
    });
  } catch (error) {
    console.error("Check enrollment error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to check enrollment",
    });
  }
};
