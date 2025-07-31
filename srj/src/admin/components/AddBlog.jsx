import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Plus } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBlog = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prev) => [...prev, ...files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("author", author);
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("description", description);
    formData.append("hashtags", hashtags);

    images.forEach((img) => formData.append("images", img));

    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/blogs`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to submit blog");

      toast.success("Blog added successfully!");

      setAuthor("");
      setTitle("");
      setSubtitle("");
      setDescription("");
      setHashtags("");
      setImages([]);
    } catch (err) {
      console.error(err);
      toast.error("Blog submission failed.");
    }
  };

  const triggerImageUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6">Add New Blog</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image Upload Section */}
        <div>
          <label className="block mb-1 font-medium">Upload Images</label>
          <div className="flex flex-wrap gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="w-24 h-24 border rounded overflow-hidden relative"
              >
                <img
                  src={URL.createObjectURL(img)}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <div
              onClick={triggerImageUpload}
              className="w-24 h-24 border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer rounded hover:border-blue-400 transition"
            >
              <Plus className="text-gray-500" />
            </div>
            <input
              type="file"
              accept="image/*"
              multiple
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
        </div>

        {/* Author */}
        <div>
          <label className="block mb-1 font-medium">Author Name</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="border p-2 w-full rounded"
          />
        </div>

        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="border p-2 w-full rounded"
          />
        </div>

        {/* Subtitle */}
        <div>
          <label className="block mb-1 font-medium">Subtitle</label>
          <input
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>

        {/* Hashtags */}
        <div>
          <label className="block mb-1 font-medium">Hashtags</label>
          <input
            type="text"
            value={hashtags}
            onChange={(e) => setHashtags(e.target.value)}
            placeholder="e.g. #ai, #tech, #coding"
            className="border p-2 w-full rounded"
          />
          <p className="text-xs text-gray-500 mt-1">
            Separate with commas or use #
          </p>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            className="bg-white"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Blog
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AddBlog;
