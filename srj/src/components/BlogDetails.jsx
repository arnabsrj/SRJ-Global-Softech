import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/blogs/${id}`);
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <p className="text-lg text-gray-500 animate-pulse">Loading...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <p className="text-lg text-red-500">Blog not found.</p>
      </div>
    );
  }

  const images = blog.imageUrls?.length
    ? blog.imageUrls
    : blog.imageUrl
    ? [blog.imageUrl]
    : [];

  const injectImagesIntoHTML = (html, imageList) => {
    if (!imageList.length) return html;

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const paragraphs = doc.querySelectorAll("p");

    imageList.slice(1).forEach((imgUrl, idx) => {
      if (paragraphs[idx]) {
        const img = doc.createElement("img");
        img.src = imgUrl;
        img.alt = `Blog Image ${idx + 2}`;
        img.className =
          "w-full h-[400px] object-cover rounded-xl shadow-md my-6";
        paragraphs[idx].insertAdjacentElement("afterend", img);
      }
    });

    return doc.body.innerHTML;
  };

  const safeHTML = DOMPurify.sanitize(
    injectImagesIntoHTML(blog.description, images)
  );

  const postDate = new Date(blog.createdAt).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const postTime = new Date(blog.createdAt).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  });

  return (
    <div className="max-w-5xl mx-auto px-4 mt-24 mb-16">
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-center text-gray-900 leading-tight mb-4">
        {blog.title}
      </h1>

      {/* Subtitle */}
      {blog.subtitle && (
        <h2 className="text-xl text-blue-700 italic text-center mb-2">
          {blog.subtitle}
        </h2>
      )}

      {/* Author */}
      <div className="text-center mb-6">
        <span className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
          Written by {blog.author}
        </span>
      </div>

      {/* First Image */}
      {images.length > 0 && (
        <img
          src={images[0]}
          alt="Blog cover"
          className="w-full h-[400px] object-cover rounded-xl shadow-md mb-8"
        />
      )}

      {/* Blog Content */}
      <div
        className="prose prose-override max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: safeHTML }}
      />

      {/* Hashtags */}
      {blog.hashtags && blog.hashtags.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {blog.hashtags.map((tag, index) => {
            const encodedQuery = encodeURIComponent(tag);
            return (
              <a
                key={index}
                href={`https://www.google.com/search?q=${encodedQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white text-sm font-semibold px-4 py-1 rounded-full shadow hover:shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200 cursor-pointer"
              >
                {tag}
              </a>
            );
          })}
        </div>
      )}

      {/* Footer */}
      <div className="mt-12 text-center text-sm text-gray-600 italic">
        Published on <span className="font-medium">{postDate}</span> at{" "}
        <span className="font-medium">{postTime} IST</span>
      </div>
    </div>
  );
};

export default BlogDetails;
