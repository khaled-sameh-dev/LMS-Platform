import { Router } from "express";
import { authenticateToken } from "../missleware/auth";
import { prisma } from "../config/db";


const router = Router();

router.use(authenticateToken);

// Get course progress
router.get("/course/:courseId", async (req, res) => {
  try {

    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    
    const { courseId } = req.params;
    const userId = req.user.id;

    // Get enrollment
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

    if (!enrollment) {
      return res.status(404).json({ error: "Not enrolled in this course" });
    }

    // Get all chapters in course
    const sections = await prisma.section.findMany({
      where: { courseId },
      include: {
        chapters: true,
      },
    });

    const totalChapters = sections.reduce(
      (sum: any, section: { chapters: string | any[]; }) => sum + section.chapters.length,
      0
    );

    const completedChapters = enrollment.chapterProgress.filter(
      (cp: { isCompleted: any; }) => cp.isCompleted
    ).length;

    const progressPercentage =
      totalChapters > 0 ? (completedChapters / totalChapters) * 100 : 0;

    // Update enrollment progress
    await prisma.enrollment.update({
      where: { id: enrollment.id },
      data: {
        progressPercentage,
      },
    });

    res.json({
      progressPercentage,
      completedChapters,
      totalChapters,
      chapterProgress: enrollment.chapterProgress,
    });
  } catch (error) {
    console.error("Error fetching progress:", error);
    res.status(500).json({ error: "Failed to fetch progress" });
  }
});

// Update chapter progress
router.put("/chapter", async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { chapterId, enrollmentId, watchedDuration, isCompleted } = req.body;
    const userId = req.user.id;

    // Verify enrollment belongs to user
    const enrollment = await prisma.enrollment.findFirst({
      where: {
        id: enrollmentId,
        userId,
      },
    });

    if (!enrollment) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    // Update or create chapter progress
    const progress = await prisma.chapterProgress.upsert({
      where: {
        userId_chapterId: {
          userId,
          chapterId,
        },
      },
      update: {
        watchedDuration: watchedDuration || undefined,
        isCompleted: isCompleted || false,
        lastWatchedAt: new Date(),
        completedAt: isCompleted ? new Date() : null,
      } ,
      create: {
        userId,
        chapterId,
        enrollmentId,
        watchedDuration,
        isCompleted: isCompleted || false,
        lastWatchedAt: new Date(),
        completedAt: isCompleted ? new Date() : null,
      },
    });

    // Update enrollment's last accessed time
    await prisma.enrollment.update({
      where: { id: enrollmentId },
      data: {
        lastAccessedAt: new Date(),
      },
    });

    res.json(progress);
  } catch (error) {
    console.error("Error updating progress:", error);
    res.status(500).json({ error: "Failed to update progress" });
  }
});

export default router;