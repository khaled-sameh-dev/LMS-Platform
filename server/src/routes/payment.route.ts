import { Router } from "express";
import paymentController from "../controllers/payment.controller";
import { requireAuth } from "../middleware/clerkAuth";
import { UserRole } from "@prisma/client";

const router = Router();

/**
 * Create Stripe checkout session
 */
router.post(
  "/create-checkout-session",
  requireAuth(),
  paymentController.createCheckoutSession
);

/**
 * Verify payment
 */
router.post("/verify", requireAuth(), paymentController.verifyPayment);

/**
 * Payment history
 */
router.get("/history", requireAuth(), paymentController.getPaymentHistory);

/**
 * Instructor earnings
 */
router.get(
  "/instructor/earnings",
  requireAuth([UserRole.INSTRUCTOR]), // ✔ Must be Instructor or Admin
  paymentController.getInstructorEarnings
);

/**
 * Enroll free course
 */
router.post("/enroll-free", requireAuth(), paymentController.enrollFreeCourse);


export default router;
