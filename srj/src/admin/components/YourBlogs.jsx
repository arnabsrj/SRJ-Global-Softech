import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Pencil, Trash, Eye } from "lucide-react";

const ITEMS_PER_PAGE = 10;

/**
 * Helper to produce page list with ellipses
 * Example: getPages(10, 1) => [1,2,3,'...',10]
 */
const getPages = (totalPages, currentPage, siblingCount = 1) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages = [];
  const left = Math.max(2, currentPage - siblingCount);
  const right = Math.min(totalPages - 1, currentPage + siblingCount);

  pages.push(1);
  if (left > 2) pages.push("left-ellipsis");
  for (let i = left; i <= right; i++) pages.push(i);
  if (right < totalPages - 1) pages.push("right-ellipsis");
  pages.push(totalPages);

  return pages;
};

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

  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    setFetchError(null);
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/blogs`);
      // ensure array
      setBlogs(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Fetch blogs error:", err);
      setFetchError("Failed to load blogs. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const confirmDelete = async () => {
    if (!deleteId) return;
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/blogs/${deleteId}`);
      setBlogs((prev) => prev.filter((b) => b._id !== deleteId));
      toast.success("Blog deleted successfully!");
    } catch (err) {
      console.error("Delete error:", err);
      toast.error("Failed to delete blog");
    } finally {
      setDeleteId(null);
    }
  };

  const handleEditSubmit = async () => {
    if (!editBlog) return;
    if (!editForm.title.trim()) {
      toast.error("Title is required");
      return;
    }

    const hashtagsArray = editForm.hashtags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    try {
      const payload = { ...editForm, hashtags: hashtagsArray };
      await axios.put(`${import.meta.env.VITE_BASE_URL}/blogs/${editBlog._id}`, payload);

      // optimistic update
      setBlogs((prev) =>
        prev.map((b) =>
          b._id === editBlog._id ? { ...b, ...payload, hashtags: hashtagsArray } : b
        )
      );

      toast.success("Blog updated successfully!");
      setEditBlog(null);
    } catch (err) {
      console.error("Update error:", err);
      toast.error("Failed to update blog");
    }
  };

  // Filter + sort (memoized)
  const filteredSorted = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    const filtered = blogs.filter((blog) => {
      const inTitle = blog.title?.toLowerCase().includes(term);
      const inTags = blog.hashtags?.some((tag) => tag.toLowerCase().includes(term));
      return !term || inTitle || inTags;
    });

    filtered.sort((a, b) => {
      const da = new Date(a.createdAt);
      const db = new Date(b.createdAt);
      return sortOrder === "newest" ? db - da : da - db;
    });

    return filtered;
  }, [blogs, searchTerm, sortOrder]);

  // reset page when filters change
  useEffect(() => setCurrentPage(1), [searchTerm, sortOrder]);

  const totalPages = Math.max(1, Math.ceil(filteredSorted.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentBlogs = filteredSorted.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const truncateWords = (text, wordLimit) => {
    if (!text) return "";
    const words = text.replace(/<[^>]+>/g, "").split(/\s+/); // strip tags
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : words.join(" ");
  };

  const safeHTML = (html) => DOMPurify.sanitize(html || "");

  return (
    <div className="relative bg-white p-6 rounded-xl shadow-md">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <h2 className="text-2xl font-bold text-blue-900">Your Blogs</h2>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Search by title or hashtag"
            className="border px-3 py-2 rounded w-full sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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

      {/* Loading / Error */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="animate-pulse text-gray-500">Loading blogs...</div>
        </div>
      ) : fetchError ? (
        <div className="text-center py-10 text-red-500">{fetchError}</div>
      ) : filteredSorted.length === 0 ? (
        <div className="text-center py-10 text-gray-600">No blogs found.</div>
      ) : (
        <>
          {/* Table */}
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
                  <tr key={blog._id} className="hover:bg-blue-50 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800">{blog.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600 text-sm">
                      {truncateWords(blog.subtitle || "", 8)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        {blog.imageUrls?.length > 0 ? (
                          blog.imageUrls.slice(0, 2).map((url, idx) => (
                            <img
                              key={idx}
                              src={url}
                              alt={`Blog ${idx + 1}`}
                              onError={(e) => (e.target.src = "/placeholder.jpg")}
                              className="w-10 h-10 object-cover rounded-md border"
                            />
                          ))
                        ) : blog.imageUrl ? (
                          <img
                            src={blog.imageUrl}
                            alt="Blog"
                            onError={(e) => (e.target.src = "/placeholder.jpg")}
                            className="w-10 h-10 object-cover rounded-md border"
                          />
                        ) : (
                          <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center text-xs text-gray-500">
                            N/A
                          </div>
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
                              title: blog.title || "",
                              subtitle: blog.subtitle || "",
                              description: blog.description || "",
                              hashtags: (blog.hashtags || []).join(", "),
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

          {/* Pagination block */}
          <div className="mt-6 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => goToPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-full border shadow-sm transition ${
                  currentPage === 1 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-white hover:bg-blue-100"
                }`}
              >
                ← Prev
              </button>

              {getPages(totalPages, currentPage, 1).map((p, idx) =>
                p === "left-ellipsis" || p === "right-ellipsis" ? (
                  <span key={p + idx} className="px-2 text-gray-500">...</span>
                ) : (
                  <button
                    key={p}
                    onClick={() => goToPage(p)}
                    className={`px-3 py-1 rounded-full border shadow-sm transition font-medium ${
                      currentPage === p ? "bg-blue-600 text-white border-blue-600 scale-105" : "bg-white text-gray-700 hover:bg-blue-100"
                    }`}
                  >
                    {p}
                  </button>
                )
              )}

              <button
                onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-full border shadow-sm transition ${
                  currentPage === totalPages ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-white hover:bg-blue-100"
                }`}
              >
                Next →
              </button>
            </div>

            <div className="text-sm text-gray-600">
              Page {currentPage} of {totalPages} — {filteredSorted.length} result(s)
            </div>
          </div>
        </>
      )}

      {/* Delete confirm modal */}
      {deleteId && (
        <Modal
          title="Confirm Delete"
          onClose={() => setDeleteId(null)}
          onConfirm={confirmDelete}
          confirmText="Delete"
          confirmClass="bg-red-600 hover:bg-red-700"
        >
          <p>Are you sure you want to delete this blog? This action cannot be undone.</p>
        </Modal>
      )}

      {/* View modal */}
      {expandedBlog && (
        <Modal title={expandedBlog.title} onClose={() => setExpandedBlog(null)}>
          <p className="italic text-sm text-gray-500 mb-4">{expandedBlog.subtitle}</p>

          <div
            className="prose max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: safeHTML(expandedBlog.description) }}
          />

          {expandedBlog.hashtags?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {expandedBlog.hashtags.map((tag, i) => (
                <span key={i} className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </Modal>
      )}

      {/* Edit modal */}
      {editBlog && (
        <Modal
          title="Edit Blog"
          onClose={() => setEditBlog(null)}
          onConfirm={handleEditSubmit}
          confirmText="Save Changes"
        >
          <label className="block mb-2">
            <span className="text-sm font-medium text-gray-700">Title *</span>
            <input
              type="text"
              value={editForm.title}
              onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
              className="mt-1 block w-full rounded border px-3 py-2 text-sm"
              placeholder="Enter title"
            />
          </label>

          <label className="block mb-2">
            <span className="text-sm font-medium text-gray-700">Subtitle</span>
            <input
              type="text"
              value={editForm.subtitle}
              onChange={(e) => setEditForm({ ...editForm, subtitle: e.target.value })}
              className="mt-1 block w-full rounded border px-3 py-2 text-sm"
              placeholder="Optional subtitle"
            />
          </label>

          <label className="block mb-4">
            <span className="text-sm font-medium text-gray-700">Description (HTML allowed)</span>
            <textarea
              value={editForm.description}
              onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
              className="mt-1 block w-full rounded border px-3 py-2 text-sm h-40 resize-y"
              placeholder="<p>Your HTML content</p>"
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

/* Reusable Modal */
const Modal = ({ title, children, onClose, onConfirm, confirmText = "Close", confirmClass = "bg-blue-600 hover:bg-blue-700" }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-6 shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h2 className="text-xl font-semibold text-blue-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 rounded p-1"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="mb-6">{children}</div>

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
            Cancel
          </button>
          {onConfirm && (
            <button onClick={onConfirm} className={`${confirmClass} text-white px-4 py-2 rounded`}>
              {confirmText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default YourBlogs;