import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import adminAuthRoutes from "./routes/adminAuth.js";         // Login/Register
import adminRoutes from "./routes/adminRoutes.js";           // ✅ Protected admin endpoints
import blogRoutes from "./routes/blogRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // For serving images

// API Routes
app.use("/api/admin", adminAuthRoutes);  // 🔓 Public admin auth (login/register)
app.use("/api/admin", adminRoutes);      // 🔐 Protected admin-only routes
app.use("/api/blogs", blogRoutes);
app.use("/api", contactRoutes);
app.use("/api/payment", paymentRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection failed:", error);
  });

  // NEW Add
