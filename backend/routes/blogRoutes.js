import express from "express";
import multer from "multer";
import Blog from "../models/Blog.js";
import path from "path";
import fs from "fs";
import storage from "../config/cloudinaryStorage.js"; // ✅ ESM import

const router = express.Router();
const upload = multer({ storage });

/* ---------------------- POST: Add blog ---------------------- */
router.post("/", upload.array("images", 10), async (req, res) => {
  try {
    const { title, subtitle, description, author, hashtags } = req.body;

    const hashtagArray = hashtags
      ? hashtags.split(",").map((tag) => tag.trim()).filter(Boolean)
      : [];

    const imageUrls = req.files.map((file) => file.path); // ✅ Cloudinary URLs

    const blog = new Blog({
      title,
      subtitle,
      description,
      imageUrls,
      author,
      hashtags: hashtagArray,
    });

    await blog.save();
    res.status(201).json({ message: "Blog created", blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

/* ---------------------- GET: All blogs ---------------------- */
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
});

/* ---------------------- GET: Single blog ---------------------- */
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving blog" });
  }
});

/* ---------------------- PUT: Update blog ---------------------- */
router.put("/:id", async (req, res) => {
  try {
    const { title, subtitle, description, hashtags } = req.body;

    const hashtagArray = Array.isArray(hashtags)
      ? hashtags
      : typeof hashtags === "string"
      ? hashtags.split(",").map((tag) => tag.trim()).filter(Boolean)
      : [];

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        title,
        subtitle,
        description,
        hashtags: hashtagArray,
      },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json({ message: "Blog updated successfully", blog: updatedBlog });
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ message: "Failed to update blog" });
  }
});

/* ---------------------- DELETE: Blog ---------------------- */
router.delete("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // NOTE: Cloudinary deletion requires public_id, which should be stored in DB if needed
    // Right now, skipping Cloudinary image deletion

    await blog.deleteOne();
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ message: "Failed to delete blog" });
  }
});

export default router;