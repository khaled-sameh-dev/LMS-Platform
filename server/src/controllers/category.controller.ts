import type { Request, Response } from "express";
import { prisma } from "../config/db";

const categoryController = {
  getCategories: async (req: Request, res: Response) => {

    try {
      const categories = await prisma.category.findMany({
        orderBy: {
          name: "asc",
        },
      });

      return res.status(200).json({ data: categories });
    } catch (error) {
      res.status(500).json({
        message: "Server error fetching categories",
        error,
      });
    }
  },
};

export default categoryController;
