import express from "express";

import courseRoutes from "./course.routes";
import categoryRoutes from "./category.routes";
import searchRoutes from "./search.routes";
import enrollmentRoutes from "./enrollemnt.routes";
import progressRoutes from "./progrss.routes";
import paymentRoutes from "./payment.routes";
import reviewRoutes from "./reviews.routes";

const router = express.Router();


// Public routes
router.use("/courses", courseRoutes);
router.use("/categories", categoryRoutes);
router.use("/search", searchRoutes);

// Protected routes (authentication handled in individual route files)
router.use("/payment", paymentRoutes);
router.use("/enrollments", enrollmentRoutes);
router.use("/progress", progressRoutes);
router.use("/reviews", reviewRoutes);

export default router;
