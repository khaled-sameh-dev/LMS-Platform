import type { Request, Response } from "express";
import { Router } from "express";
import { prisma } from "../config/db";
import { authenticateToken } from "../missleware/auth";

const router = Router();

// All enrollment routes require authentication
router.use(authenticateToken);

// Enroll in a course
router.post("/", async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { courseId } = req.body;
    if (!req.user?.email) {
      return res.status(400).json({ error: "Missing user email in token" });
    }
    const dbUser = await prisma.user.findUnique({ where: { email: req.user.email } });
    if (!dbUser) {
      return res.status(404).json({ error: "User not found" });
    }
    const userId = dbUser.id;

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

    // Check if course exists and is published
    const course = await prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    if (course.status !== "PUBLISHED") {
      return res
        .status(400)
        .json({ error: "Course is not available for enrollment" });
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

    res.json({
      enrollment,
      message: "Successfully enrolled in course",
    });
  } catch (error) {
    console.error("Error enrolling in course:", error);
    res.status(500).json({ error: "Failed to enroll in course" });
  }
});

// Get enrollment status for a course
router.get("/status/:courseId", async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { courseId } = req.params;
    if (!req.user?.email) {
      return res.status(400).json({ error: "Missing user email in token" });
    }
    const dbUser = await prisma.user.findUnique({ where: { email: req.user.email } });
    if (!dbUser) {
      return res.status(404).json({ error: "User not found" });
    }
    const userId = dbUser.id;

    if (!courseId) {
      return res.status(400).json({ error: "Missing courseId parameter" });
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
      },
    });

    res.json({
      isEnrolled: !!enrollment,
      enrollment,
    });
  } catch (error) {
    console.error("Error checking enrollment status:", error);
    res.status(500).json({ error: "Failed to check enrollment status" });
  }
});

// Get user's enrollments
router.get("/my-enrollments", async (req: Request, res: Response) => {
  try {
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

    const enrollments = await prisma.enrollment.findMany({
      where: { userId },
      include: {
        course: {
          include: {
            instructor: true,
            category: true,
          },
        },
        chapterProgress: true,
      },
      orderBy: {
        enrolledAt: "desc",
      },
    });

    res.json(enrollments);
  } catch (error) {
    console.error("Error fetching enrollments:", error);
    res.status(500).json({ error: "Failed to fetch enrollments" });
  }
});

export default router;
