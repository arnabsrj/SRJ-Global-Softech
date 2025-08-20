// src/components/Topbar.jsx
import React from "react";
import { FaUserShield } from "react-icons/fa";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const Topbar = ({ view, username, setIsDrawerOpen }) => {
  const getTitle = () => {
    switch (view) {
      case "addBlog":
        return "Add Blog";
      case "yourBlogs":
        return "Your Blogs";
      case "services":
        return "Manage Services";
      default:
        return "Admin Dashboard";
    }
  };

  return (
    <>
      {/* Mobile Topbar */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white shadow-sm">
        <button
          className="text-gray-700 hover:text-blue-700 transition"
          onClick={() => setIsDrawerOpen(true)}
        >
          <Menu size={28} />
        </button>
        <span className="text-lg font-semibold text-gray-800">Admin Panel</span>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FaUserShield />
          <span>{username}</span>
        </div>
      </div>

      {/* Desktop Topbar */}
      <div className="hidden lg:flex items-center justify-between px-6 py-4 bg-white shadow rounded-xl mb-2">
        <motion.h1
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold text-blue-800 tracking-wide"
        >
          {getTitle()}
        </motion.h1>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3"
        >
          <FaUserShield className="text-gray-600 text-xl" />
          <span className="text-gray-700 font-medium">{username}</span>
        </motion.div>
      </div>
    </>
  );
};

export default Topbar;