import express from "express";
import {
  loginAdmin,
  registerAdmin,
} from "../controllers/adminAuthController.js";

const router = express.Router();

router.post("/login", loginAdmin);
router.post("/register", registerAdmin); // Optional: for initial admin setup

export default router;
