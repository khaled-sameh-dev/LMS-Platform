import { Router } from "express";
import {
  getCourseProgress,
  updateChapterProgress,
  getChapterProgress,
  resetChapterProgress,
} from "../controllers/progress.controller";
import { requireAuth } from "../middleware/clerkAuth";

const router = Router();

// All routes require authentication
router.use(requireAuth());

/**
 * @route   GET /api/v1/progress/course/:courseId
 * @desc    Get course progress for current user
 * @access  Private
 */
router.get("/course/:courseId", getCourseProgress);

/**
 * @route   PUT /api/v1/progress/chapter
 * @desc    Update or create chapter progress
 * @access  Private
 */
router.put("/chapter", updateChapterProgress);

/**
 * @route   GET /api/v1/progress/chapter/:chapterId
 * @desc    Get chapter progress
 * @access  Private
 */
router.get("/chapter/:chapterId", getChapterProgress);

/**
 * @route   DELETE /api/v1/progress/chapter/:chapterId
 * @desc    Reset chapter progress
 * @access  Private
 */
router.delete("/chapter/:chapterId", resetChapterProgress);

export default router;
