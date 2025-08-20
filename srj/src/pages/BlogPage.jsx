import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogImg from "../assets/blimg.jpg";

// Strip HTML tags from a string
const stripHtml = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/blogs`);
        const data = await res.json();    
        setBlogs(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const truncateText = (text, maxLength = 120) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const formatDate = (dateStr) =>
    new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
    }).format(new Date(dateStr));

  return (
    <div className="bg-[#dbe9f5] dark:bg-gray-900 min-h-screen mt-[100px]">
      {/* Hero Section */}
      <div className="relative mt-15 h-80 sm:h-96 w-full overflow-hidden mb-16">
        <img
          src={blogImg}
          alt="Explore Our Blog"
          className="w-full h-full object-cover"
        />

        {/* Stylish Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/10 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold text-center px-4 drop-shadow-lg">
            Explore Our Blogs
          </h1>
        </div> */}
      </div>

      {/* Blog List Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        {loading ? (
          <p className="text-center text-gray-500 dark:text-gray-300 text-lg">
            Loading blogs...
          </p>
        ) : blogs.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-300 text-lg">
            No blogs available yet.
          </p>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => {
              const thumbnail =
                (Array.isArray(blog.imageUrls) && blog.imageUrls[0]) ||
                blog.imageUrl ||
                "/default-blog.jpg";

              return (
                <Link
                  key={blog._id}
                  to={`/blog/${blog._id}`}
                  className="group bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden transform transition duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="overflow-hidden h-52">
                    <img
                      src={thumbnail}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-300 "
                    />
                  </div>
                  <div className="p-5 flex flex-col justify-between h-full">
                    <div>
                      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                        {stripHtml(blog.title)}
                      </h2>
                      {blog.subtitle && (
                        <p className="text-sm text-blue-600 dark:text-blue-400 italic mb-2">
                          {blog.subtitle}
                        </p>
                      )}
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                        {truncateText(stripHtml(blog.description), 130)}
                      </p>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                      {blog.createdAt && (
                        <span>{formatDate(blog.createdAt)}</span>
                      )}
                      <span className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
