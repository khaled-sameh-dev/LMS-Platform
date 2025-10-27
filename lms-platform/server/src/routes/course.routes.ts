import express from "express"
import { courseController } from "../controllers/course.controller"
const router  = express.Router()



router.get("/" , courseController.getCourses)



export default router