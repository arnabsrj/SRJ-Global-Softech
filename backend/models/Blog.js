import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String },
    description: { type: String, required: true },
    imageUrls: [{ type: String, required: true }],
    author: { type: String, required: true },
    hashtags: [{ type: String }], // <-- Added this line
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
