import type { Request, Response } from "express";
import { prisma } from "../config/db";

const searchController = {
  searchSuggestions: async (req: Request, res: Response) => {
    try {
      const { q } = req.query;

      const [courses, categories, instructors] = await Promise.all([
        prisma.course.findMany({
          where: {
            OR: [
              { title: { contains: String(q), mode: "insensitive" } },
              { description: { contains: String(q), mode: "insensitive" } },
            ],
          },
        }),

        prisma.category.findMany({
          where: {
            name: { contains: String(q), mode: "insensitive" },
          },
        }),

        prisma.user.findMany({
          where: {
            AND: {
              role: "INSTRUCTOR",
              OR: [
                { firstName: { contains: String(q), mode: "insensitive" } },
                { lastName: { contains: String(q), mode: "insensitive" } },
              ],
            },
          },
        }),
      ]);

      const suggestions = [
        ...courses.map((c) => ({
          type: "Course",
          id: c.categoryId,
          value: {
            ...c,
          },
        })),
        ...categories.map((c) => ({
          type: "Category",
          id: c.id,
          value: {
            ...c,
          },
        })),
        ...instructors.map((i) => ({
          type: "Instructor",
          id: i.id,
          value: {
            ...i,
          },
        })),
      ];

      res.status(200).json({
        suggestions,
        message: "suggestion retrived successfuly!",
      });
    } catch (error) {
      res
        .status(500)
        .json({ error, message: "Error in retriving suggestions" });
    }
  },
};

export default searchController;
