import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          b._id === editBlog._id
            ? { ...b, ...editForm, hashtags: hashtagsArray }
            : b
        )
      );
      setEditBlog(null);
      toast.success("Blog updated successfully!");
    } catch (error) {
      console.error("Error updating blog:", error);
      toast.error("Failed to update blog");
    }
  };

  return (
    <div className="relative bg-white p-6 rounded-xl shadow-md">
      <ToastContainer position="top-right" autoClose={3000} />

      <h2 className="text-2xl font-bold text-blue-900 mb-4">Your Blogs</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Subtitle</th>
              <th className="px-4 py-2 border">Images</th>
              <th className="px-4 py-2 border">Created At</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{blog.title}</td>
                <td className="border px-4 py-2">{blog.subtitle}</td>
                <td className="border px-4 py-2">
                  <div className="flex space-x-2">
                    {blog.imageUrls?.length > 0 ? (
                      blog.imageUrls
                        .slice(0, 2)
                        .map((url, index) => (
                          <img
                            key={index}
                            src={url}
                            alt={`Blog ${index + 1}`}
                            onError={(e) => (e.target.src = "/placeholder.jpg")}
                            className="w-12 h-12 object-cover rounded shadow"
                          />
                        ))
                    ) : blog.imageUrl ? (
                      <img
                        src={blog.imageUrl}
                        alt="Blog"
                        onError={(e) => (e.target.src = "/placeholder.jpg")}
                        className="w-12 h-12 object-cover rounded shadow"
                      />
                    ) : (
                      <span className="text-gray-400 text-sm">No Image</span>
                    )}
                  </div>
                </td>
                <td className="border px-4 py-2">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2 space-y-2 sm:space-y-0 space-x-2">
                  <button
                    onClick={() => setExpandedBlog(blog)}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    More
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
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setDeleteId(blog._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 shadow-lg w-full max-w-sm">
            <h2 className="text-lg font-semibold mb-4 text-red-600">
              Confirm Delete
            </h2>
            <p className="text-sm text-gray-700 mb-6">
              Are you sure you want to delete this blog?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Expanded Blog Info Modal */}
      {expandedBlog && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-2 text-blue-800">
              {expandedBlog.title}
            </h2>
            <p className="italic text-sm text-gray-500 mb-4">
              {expandedBlog.subtitle}
            </p>

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

            <div className="text-right mt-6">
              <button
                onClick={() => setExpandedBlog(null)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editBlog && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Edit Blog</h2>

            <label className="block mb-2">
              <span className="text-sm font-medium text-gray-700">Title</span>
              <input
                type="text"
                value={editForm.title}
                onChange={(e) =>
                  setEditForm({ ...editForm, title: e.target.value })
                }
                className="mt-1 block w-full rounded border px-3 py-2 text-sm"
              />
            </label>

            <label className="block mb-2">
              <span className="text-sm font-medium text-gray-700">
                Subtitle
              </span>
              <input
                type="text"
                value={editForm.subtitle}
                onChange={(e) =>
                  setEditForm({ ...editForm, subtitle: e.target.value })
                }
                className="mt-1 block w-full rounded border px-3 py-2 text-sm"
              />
            </label>

            <label className="block mb-4">
              <span className="text-sm font-medium text-gray-700">
                Description (HTML allowed)
              </span>
              <textarea
                value={editForm.description}
                onChange={(e) =>
                  setEditForm({ ...editForm, description: e.target.value })
                }
                className="mt-1 block w-full rounded border px-3 py-2 text-sm h-32 resize-y"
              />
            </label>

            <label className="block mb-4">
              <span className="text-sm font-medium text-gray-700">
                Hashtags (comma-separated)
              </span>
              <input
                type="text"
                value={editForm.hashtags}
                onChange={(e) =>
                  setEditForm({ ...editForm, hashtags: e.target.value })
                }
                className="mt-1 block w-full rounded border px-3 py-2 text-sm"
                placeholder="e.g. Tech, Coding, AI"
              />
            </label>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditBlog(null)}
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleEditSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YourBlogs;
