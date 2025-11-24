import { Router } from "express";

import { requireAuth } from "../middleware/clerkAuth";
import {
  checkEnroll,
  enrollInCourse,
  getEnrollmentById,
  getEnrollmentStatus,
  getUserEnrollments,
  unenrollFromCourse,
} from "../controllers/enrollments.controller";
import { UserRole } from "@prisma/client";

const router = Router();

// All routes require authentication
router.use(requireAuth());

/**
 * @route   POST /api/v1/enrollments
 * @desc    Enroll in a course
 * @access  Private (Student)
 */
router.post("/", enrollInCourse);

/**
 * @route   GET /api/v1/enrollments/status/:courseId
 * @desc    Get enrollment status for a specific course
 * @access  Private
 */
router.get("/status/:courseId", getEnrollmentStatus);

/**
 * @route   GET /api/v1/enrollments/my-enrollments
 * @desc    Get all enrollments for current user
 * @access  Private (Student)
 */
router.get("/my-enrollments", getUserEnrollments);

/**
 * @route   GET /api/v1/enrollments/:enrollmentId
 * @desc    Get enrollment details by ID
 * @access  Private
 */
router.get("/:enrollmentId", getEnrollmentById);

/**
 * @route   DELETE /api/v1/enrollments/:courseId
 * @desc    Unenroll from a course
 * @access  Private (Student)
 */
router.delete("/:courseId", unenrollFromCourse);

/**
 * @route   GET /api/v1/enrollments/stats/:courseId
 * @desc    Get enrollment statistics for a course
 * @access  Private (Instructor/Admin)
 */
router.get(
  "/stats/:courseId",
  requireAuth([UserRole.INSTRUCTOR]),
  getEnrollmentStatus
);


router.get(
  "/check/:courseId",
  checkEnroll
);


export default router;
