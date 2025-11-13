import { Router } from "express";

import searchController from "../controllers/search.controller";

const router = Router();

router.get("/get-suggestions", searchController.searchSuggestions);

export default router;
