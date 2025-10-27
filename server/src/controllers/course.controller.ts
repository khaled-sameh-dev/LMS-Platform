import type { Request, Response } from "express";
import { prisma } from "../config/db";

export const courseController = {
  getCourses: async (req: Request, res: Response) => {
    try {
      const { category } = req.query;

      const courses = await prisma.course.findMany({
        where:
          category && category !== "all"
            ? {
                category: {
                  is: {
                    name: { equals: String(category), mode: "insensitive" },
                  },
                },
              }
            : {},
        include: {
          teacher: true,
          category: true,
        },
      });

      res.status(200).json({
        data: {
          message: "Retrive Courses Success",
          courses,
          count: courses.length,
        },
      });
    } catch (error) {
      res.status(500).json({
        error: {
          message: "Server error fetching courses",
          error,
        },
      });
    }
  },

  getCourse: async (req: Request, res: Response) => {},
};
