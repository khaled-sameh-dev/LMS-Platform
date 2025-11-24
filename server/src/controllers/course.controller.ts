import { Request, Response } from "express";
import { prisma } from "../config/db";

export const courseController = {
  getCourses: async (req: Request, res: Response) => {
    try {
      const { category, q, level, status = "PUBLISHED" } = req.query;
      const pageParam = req.query.page as string | undefined;
      const limitParam = req.query.limit as string | undefined;
      const page = Math.max(parseInt(pageParam || "1", 10), 1);
      const limit = Math.max(parseInt(limitParam || "12", 10), 1);

      const where: any = {
        status: status,
      };

      if (category) {
        where.category = {
          id: category,
        };
      }

      if (level) {
        where.level = level;
      }

      if (q) {
        where.OR = [
          { title: { contains: String(q), mode: "insensitive" } },
          { description: { contains: String(q), mode: "insensitive" } },
          { tags: { has: String(q) } },
        ];
      }

      const total = await prisma.course.count({ where });

      const courses = await prisma.course.findMany({
        where,
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
          _count: {
            select: {
              sections: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
        skip: (page - 1) * limit,
        take: limit,
      });

      // Add total chapters count
      const coursesWithChapters = await Promise.all(
        courses.map(async (course) => {
          const sections = await prisma.section.findMany({
            where: { courseId: course.id },
            include: {
              _count: {
                select: { chapters: true },
              },
            },
          });

          const totalChapters = sections.reduce(
            (sum, section) => sum + section._count.chapters,
            0
          );

          return {
            ...course,
            totalChapters,
          };
        })
      );

      const totalPages = Math.ceil(total / limit) || 1;
      res.json({
        items: coursesWithChapters,
        total,
        page,
        limit,
        totalPages,
        hasMore: page < totalPages,
      });
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(500).json({ error: "Failed to fetch courses" });
    }
  },

  getCourse: async (req: Request, res: Response) => {
    try {
      const { id: courseId } = req.params;

      if (!courseId) {
        return res.status(400).json({ error: "Missing courseId parameter" });
      }

      const course = await prisma.course.findUnique({
        where: { id: courseId },
        include: {
          instructor: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              avatar: true,
              bio: true,
              title: true,
            },
          },
          category: true,
          sections: {
            include: {
              chapters: {
                include: {
                  resources: true,
                },
                orderBy: {
                  order: "asc",
                },
              },
            },
            orderBy: {
              order: "asc",
            },
          },
          _count: {
            select: {
              enrollments: true,
              reviews: true,
            },
          },
        },
      });

      if (!course) {
        return res.status(404).json({ error: "Course not found" });
      }

      // Calculate total chapters
      const totalChapters = course.sections.reduce(
        (sum, section) => sum + section.chapters.length,
        0
      );

      // Calculate average rating
      const reviews = await prisma.courseReview.findMany({
        where: { courseId: course.id },
        select: { rating: true },
      });

      const averageRating =
        reviews.length > 0
          ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
          : 0;

      res.json({
        ...course,
        totalChapters,
        studentsCount: course._count.enrollments,
        reviewsCount: course._count.reviews,
        rating: averageRating,
      });
    } catch (error) {
      console.error("Error fetching course:", error);
      res.status(500).json({ error: "Failed to fetch course" });
    }
  },
};
