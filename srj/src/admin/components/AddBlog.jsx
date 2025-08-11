import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Plus } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Image } from "lucide-react";

// Utility to generate slug
const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove non-word characters
    .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with -
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing dashes

const AddBlog = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [images, setImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }], // header dropdown with H1, H2, H3, Normal text
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code-block"],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "blockquote",
    "code-block",
    "link",
    "image",
  ];

  // Auto-generate slug from title
  useEffect(() => {
    setSlug(slugify(title));
  }, [title]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prev) => [...prev, ...files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("author", author);
    formData.append("title", title);
    formData.append("slug", slug);
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

      toast.success("✅ Blog added successfully!");

      // Reset fields
      setAuthor("");
      setTitle("");
      setSlug("");
      setSubtitle("");
      setDescription("");
      setHashtags("");
      setImages([]);
    } catch (err) {
      console.error(err);
      toast.error("❌ Blog submission failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerImageUpload = () => fileInputRef.current.click();

  return (
    <div className="bg-white p-8 rounded-xl shadow-md max-w-5xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-blue-800 mb-8"> Add Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Upload Images */}
        <Section title=" Upload Images">
          <div className="flex flex-wrap gap-4">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="w-24 h-24 rounded overflow-hidden border relative"
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
              className="w-24 h-24 border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer rounded hover:border-blue-500 transition"
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
        </Section>

        {/* Author Info */}
        <Section title=" Author Info">
          <InputField
            label="Author Name"
            value={author}
            onChange={setAuthor}
            required
          />
        </Section>

        {/* Blog Info */}
        <Section title=" Blog Details">
          <InputField
            label="Blog Title"
            value={title}
            onChange={setTitle}
            required
          />

          <InputField
            label="Slug (Auto-generated)"
            value={slug}
            readOnly
            note="Generated automatically from title"
          />

          <InputField
            label="Subtitle"
            value={subtitle}
            onChange={setSubtitle}
          />

          <InputField
            label="Hashtags"
            value={hashtags}
            onChange={setHashtags}
            placeholder="e.g. #ai, #tech, #coding"
            note="Separate with commas or use #"
          />
        </Section>

        {/* Description */}
        <Section title=" Description">
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            modules={modules}
            formats={formats}
            className="bg-white"
          />
        </Section>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-lg transition ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Publish Blog"}
          </button>
        </div>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

// Custom components
const Section = ({ title, children }) => (
  <div>
    <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
    {children}
  </div>
);

const InputField = ({
  label,
  value,
  onChange,
  required = false,
  placeholder,
  note,
  readOnly = false,
}) => (
  <div className="mb-4">
    <label className="block font-medium mb-1 text-gray-700">{label}</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      required={required}
      readOnly={readOnly}
      placeholder={placeholder}
      className={`border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
        readOnly ? "bg-gray-100 cursor-not-allowed" : ""
      }`}
    />
    {note && <p className="text-xs text-gray-500 mt-1">{note}</p>}
  </div>
);

export default AddBlog;
