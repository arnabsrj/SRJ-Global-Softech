import express from "express";
import { getAdminDashboard } from "../controllers/adminController.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Protected admin route
router.get("/dashboard", protectAdmin, getAdminDashboard);

export default router;
