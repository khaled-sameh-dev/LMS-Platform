import { Router } from "express";
import type { Request, Response } from "express";
// import { authenticateToken, optionalAuth } from "../middleware/auth";
import { prisma } from "../config/db";
import { optionalAuth, requireAuth } from "../middleware/clerkAuth";

const router = Router();

// Get course reviews (public)
router.get("/course/:courseId", optionalAuth, async (req, res) => {
  try {
    const { courseId } = req.params;

    if (!courseId) {
      return res.status(400).json({ error: "Missing courseId parameter" });
    }

    const reviews = await prisma.courseReview.findMany({
      where: {
        courseId,
        isApproved: true,
      },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            avatar: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const averageRating =
      reviews.length > 0
        ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
        : 0;

    res.json({
      reviews,
      averageRating,
      totalReviews: reviews.length,
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

// Create review (authenticated)
router.post("/", requireAuth, async (req: Request, res: Response) => {
  try {
    const { courseId, rating, comment } = req.body;

    if (!req.auth?.userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const userId = req.auth.userId;

    // Check if user is enrolled
    const enrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId,
        },
      },
    });

    if (!enrollment) {
      return res.status(403).json({ error: "Must be enrolled to review" });
    }

    // Check if already reviewed
    const existingReview = await prisma.courseReview.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId,
        },
      },
    });

    if (existingReview) {
      return res.status(400).json({ error: "Already reviewed this course" });
    }

    // Create review
    const review = await prisma.courseReview.create({
      data: {
        userId,
        courseId,
        rating,
        comment,
      },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            avatar: true,
          },
        },
      },
    });

    // Update course rating
    const allReviews = await prisma.courseReview.findMany({
      where: { courseId },
      select: { rating: true },
    });

    const avgRating =
      allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length;

    await prisma.course.update({
      where: { id: courseId },
      data: {
        rating: avgRating,
        reviewsCount: allReviews.length,
      },
    });

    res.json({
      review,
      message: "Review created successfully",
    });
  } catch (error) {
    console.error("Error creating review:", error);
    res.status(500).json({ error: "Failed to create review" });
  }
});

export default router;
