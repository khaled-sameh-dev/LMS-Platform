// server/src/controllers/progress.controller.ts
import { Request, Response } from "express";
import { prisma } from "../config/db";

/**
 * Get course progress for a user
 * GET /api/v1/progress/course/:courseId
 */
export const getCourseProgress = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;
    const userId = req.auth?.userId; 

    console.log("user id" , userId)

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!courseId) {
      return res.status(404).json({ message: "Course Not Found" });
    }

    // Get enrollment
    const enrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId,
        },
      },
      include: {
        chapterProgress: {
          include: {
            chapter: true,
          },
        },
        course: {
          include: {
            sections: {
              include: {
                chapters: true,
              },
            },
          },
        },
      },
    });

    console.log("enrollment" , enrollment)

    if (!enrollment) {
      return res.status(404).json({ message: "Enrollment not found" });
    }

    // Calculate total chapters
    const totalChapters = enrollment.course.sections.reduce(
      (acc, section) => acc + section.chapters.length,
      0
    );

    // Calculate completed chapters
    const completedChapters = enrollment.chapterProgress.filter(
      (cp) => cp.isCompleted
    ).length;

    // Calculate progress percentage
    const progressPercentage =
      totalChapters > 0 ? (completedChapters / totalChapters) * 100 : 0;


    // Update enrollment progress
    await prisma.enrollment.update({
      where: { id: enrollment.id },
      data: {
        progressPercentage,
        lastAccessedAt: new Date(),
        isCompleted: progressPercentage === 100,
        completedAt: progressPercentage === 100 ? new Date() : null,
      },
    });

    res.json({
      progressPercentage,
      completedChapters,
      totalChapters,
      chapterProgress: enrollment.chapterProgress,
    });
  } catch (error) {
    console.error("Get course progress error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Update chapter progress
 * PUT /api/v1/progress/chapter
 */
export const updateChapterProgress = async (req: Request, res: Response) => {
  try {
    const { chapterId, enrollmentId, watchedDuration, isCompleted } = req.body;
    const userId = req.auth?.userId;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Verify enrollment belongs to user
    const enrollment = await prisma.enrollment.findFirst({
      where: {
        id: enrollmentId,
        userId,
      },
      include: {
        course: {
          include: {
            sections: {
              include: {
                chapters: true,
              },
            },
          },
        },
      },
    });

    if (!enrollment) {
      return res.status(404).json({ message: "Enrollment not found" });
    }

    // Verify chapter exists in course
    const chapterExists = enrollment.course.sections.some((section) =>
      section.chapters.some((ch) => ch.id === chapterId)
    );

    if (!chapterExists) {
      return res.status(404).json({ message: "Chapter not found in course" });
    }

    // Upsert chapter progress
    const progress = await prisma.chapterProgress.upsert({
      where: {
        userId_chapterId: {
          userId,
          chapterId,
        },
      },
      update: {
        watchedDuration: watchedDuration || 0,
        isCompleted: isCompleted || false,
        lastWatchedAt: new Date(),
        completedAt: new Date(),
      },
      create: {
        userId,
        chapterId,
        enrollmentId,
        watchedDuration: watchedDuration || 0,
        isCompleted: isCompleted || false,
        lastWatchedAt: new Date(),
        completedAt: isCompleted ? new Date() : null,
      },
    });

    // Recalculate course progress
    const allProgress = await prisma.chapterProgress.findMany({
      where: { enrollmentId },
    });

    const totalChapters = enrollment.course.sections.reduce(
      (acc, section) => acc + section.chapters.length,
      0
    );

    const completedCount = allProgress.filter((cp) => cp.isCompleted).length;
    const progressPercentage =
      totalChapters > 0 ? (completedCount / totalChapters) * 100 : 0;

    // Calculate total time spent
    const totalTimeSpent = allProgress.reduce(
      (acc, cp) => acc + cp.watchedDuration,
      0
    );

    // Update enrollment
    await prisma.enrollment.update({
      where: { id: enrollmentId },
      data: {
        progressPercentage,
        totalTimeSpent: Math.round(totalTimeSpent),
        lastAccessedAt: new Date(),
        isCompleted: progressPercentage === 100,
        completedAt: progressPercentage === 100 ? new Date() : null,
      },
    });

    // Check if course is completed and create certificate
    if (progressPercentage === 100) {
      const existingCertificate = await prisma.certificate.findUnique({
        where: {
          userId_courseId: {
            userId,
            courseId: enrollment.courseId,
          },
        },
      });

      if (!existingCertificate) {
        const certificateNumber = `CERT-${Date.now()}-${Math.random()
          .toString(36)
          .substr(2, 9)
          .toUpperCase()}`;

        await prisma.certificate.create({
          data: {
            userId,
            courseId: enrollment.courseId,
            certificateNumber,
            issuedAt: new Date(),
          },
        });

        // Create notification
        await prisma.notification.create({
          data: {
            userId,
            type: "CERTIFICATE_EARNED",
            title: "Certificate Earned!",
            message: `Congratulations! You've earned a certificate for completing ${enrollment.course.title}`,
            data: {
              courseId: enrollment.courseId,
              certificateNumber,
            },
          },
        });
      }
    }

    res.json(progress);
  } catch (error) {
    console.error("Update chapter progress error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Get chapter progress
 * GET /api/v1/progress/chapter/:chapterId
 */
export const getChapterProgress = async (req: Request, res: Response) => {
  try {
    const { chapterId } = req.params;
    const userId = req.auth?.userId;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!chapterId) {
      return res.status(404).json({ message: "Chapter Not Found" });
    }

    const progress = await prisma.chapterProgress.findUnique({
      where: {
        userId_chapterId: {
          userId,
          chapterId,
        },
      },
      include: {
        chapter: true,
      },
    });

    if (!progress) {
      return res.json({
        isCompleted: false,
        watchedDuration: 0,
      });
    }

    res.json(progress);
  } catch (error) {
    console.error("Get chapter progress error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Reset chapter progress
 * DELETE /api/v1/progress/chapter/:chapterId
 */
export const resetChapterProgress = async (req: Request, res: Response) => {
  try {
    const { chapterId } = req.params;
    const userId = req.auth?.userId;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!chapterId) {
      return res.status(404).json({ message: "Chapter Not Found" });
    }

    await prisma.chapterProgress.delete({
      where: {
        userId_chapterId: {
          userId,
          chapterId,
        },
      },
    });

    res.json({ message: "Progress reset successfully" });
  } catch (error) {
    console.error("Reset chapter progress error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
