// src/components/YourBlogs.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Pencil, Trash, Eye } from "lucide-react";

const ITEMS_PER_PAGE = 10;

const YourBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlog, setExpandedBlog] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [editBlog, setEditBlog] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    subtitle: "",
    description: "",
    hashtags: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/blogs`);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/blogs/${deleteId}`);
      setBlogs((prev) => prev.filter((blog) => blog._id !== deleteId));
      setDeleteId(null);
      toast.success("Blog deleted successfully!");
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Failed to delete blog");
    }
  };

  const handleEditSubmit = async () => {
    const hashtagsArray = editForm.hashtags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag);

    try {
      await axios.put(`${import.meta.env.VITE_BASE_URL}/blogs/${editBlog._id}`, {
        ...editForm,
        hashtags: hashtagsArray,
      });

      setBlogs((prev) =>
        prev.map((b) =>
          b._id === editBlog._id ? { ...b, ...editForm, hashtags: hashtagsArray } : b
        )
      );
      setEditBlog(null);
      toast.success("Blog updated successfully!");
    } catch (error) {
      console.error("Error updating blog:", error);
      toast.error("Failed to update blog");
    }
  };

  const filteredBlogs = blogs
    .filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.hashtags?.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentBlogs = filteredBlogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const renderPagination = () => {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
    return (
      <div className="flex flex-wrap justify-center mt-6 gap-2">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded border transition ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-800 hover:bg-blue-100"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    );
  };

  const truncateWords = (text, wordLimit) => {
    if (!text) return "";
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };

  return (
    <div className="relative bg-white p-6 rounded-xl shadow-md overflow-x-auto">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <h2 className="text-2xl font-bold text-blue-900">Your Blogs</h2>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Search by title or hashtag"
            className="border px-3 py-2 rounded w-full sm:w-64"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />

          <select
            className="border px-3 py-2 rounded"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Title</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Subtitle</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Images</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Created At</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {currentBlogs.map((blog) => (
              <tr key={blog._id} className="hover:bg-blue-50 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800">
                  {blog.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600 text-sm">
                  {truncateWords(blog.subtitle, 8)}
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    {blog.imageUrls?.length > 0
                      ? blog.imageUrls.slice(0, 2).map((url, index) => (
                          <img
                            key={index}
                            src={url}
                            alt={`Blog ${index + 1}`}
                            onError={(e) => (e.target.src = "/placeholder.jpg")}
                            className="w-10 h-10 object-cover rounded-md border"
                          />
                        ))
                      : blog.imageUrl && (
                          <img
                            src={blog.imageUrl}
                            alt="Blog"
                            onError={(e) => (e.target.src = "/placeholder.jpg")}
                            className="w-10 h-10 object-cover rounded-md border"
                          />
                        )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex gap-2 justify-start items-center">
                    <button
                      onClick={() => setExpandedBlog(blog)}
                      className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded hover:bg-blue-200 transition"
                      title="View"
                    >
                      <Eye className="text-blue-600 w-5 h-5" />
                    </button>
                    <button
                      onClick={() => {
                        setEditBlog(blog);
                        setEditForm({
                          title: blog.title,
                          subtitle: blog.subtitle,
                          description: blog.description,
                          hashtags: blog.hashtags?.join(", ") || "",
                        });
                      }}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 transition"
                      title="Edit"
                    >
                      <Pencil className="text-gray-800 w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setDeleteId(blog._id)}
                      className="w-8 h-8 flex items-center justify-center bg-red-100 rounded hover:bg-red-200 transition"
                      title="Delete"
                    >
                      <Trash className="text-red-500 w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {renderPagination()}

      {deleteId && (
        <Modal
          title="Confirm Delete"
          onClose={() => setDeleteId(null)}
          onConfirm={confirmDelete}
          confirmText="Delete"
          confirmClass="bg-red-600 hover:bg-red-700"
        >
          Are you sure you want to delete this blog?
        </Modal>
      )}

      {expandedBlog && (
        <Modal title={expandedBlog.title} onClose={() => setExpandedBlog(null)}>
          <p className="italic text-sm text-gray-500 mb-4">{expandedBlog.subtitle}</p>
          <div
            className="prose max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: expandedBlog.description }}
          />
          {expandedBlog.hashtags?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {expandedBlog.hashtags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </Modal>
      )}

      {editBlog && (
        <Modal
          title="Edit Blog"
          onClose={() => setEditBlog(null)}
          onConfirm={handleEditSubmit}
          confirmText="Save Changes"
        >
          <label className="block mb-2">
            <span className="text-sm font-medium text-gray-700">Title</span>
            <input
              type="text"
              value={editForm.title}
              onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
              className="mt-1 block w-full rounded border px-3 py-2 text-sm"
            />
          </label>

          <label className="block mb-2">
            <span className="text-sm font-medium text-gray-700">Subtitle</span>
            <input
              type="text"
              value={editForm.subtitle}
              onChange={(e) => setEditForm({ ...editForm, subtitle: e.target.value })}
              className="mt-1 block w-full rounded border px-3 py-2 text-sm"
            />
          </label>

          <label className="block mb-4">
            <span className="text-sm font-medium text-gray-700">
              Description (HTML allowed)
            </span>
            <textarea
              value={editForm.description}
              onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
              className="mt-1 block w-full rounded border px-3 py-2 text-sm h-32 resize-y"
            />
          </label>

          <label className="block mb-4">
            <span className="text-sm font-medium text-gray-700">Hashtags (comma-separated)</span>
            <input
              type="text"
              value={editForm.hashtags}
              onChange={(e) => setEditForm({ ...editForm, hashtags: e.target.value })}
              className="mt-1 block w-full rounded border px-3 py-2 text-sm"
              placeholder="e.g. Tech, Coding, AI"
            />
          </label>
        </Modal>
      )}
    </div>
  );
};

const Modal = ({ title, children, onClose, onConfirm, confirmText = "Close", confirmClass = "bg-blue-600 hover:bg-blue-700" }) => (
  <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
    <div className="bg-white rounded-xl p-6 shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4 text-blue-800">{title}</h2>
      <div className="mb-6">{children}</div>
      <div className="flex justify-end gap-3">
        <button
          onClick={onClose}
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
        {onConfirm && (
          <button
            onClick={onConfirm}
            className={`${confirmClass} text-white px-4 py-2 rounded`}
          >
            {confirmText}
          </button>
        )}
      </div>
    </div>
  </div>
);

export default YourBlogs;