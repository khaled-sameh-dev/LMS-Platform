"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseController = void 0;
const db_1 = require("../config/db");
exports.courseController = {
    getCourses: async (req, res) => {
        try {
            const { category } = req.query;
            const courses = await db_1.prisma.course.findMany({
                where: category && category !== "all"
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
        }
        catch (error) {
            res.status(500).json({
                error: {
                    message: "Server error fetching courses",
                    error,
                },
            });
        }
    },
    getCourse: async (req, res) => { },
};
//# sourceMappingURL=course.controller.js.map