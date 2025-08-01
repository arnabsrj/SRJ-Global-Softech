import React, { useEffect, useState } from "react";
import { FaBlog, FaUsers, FaServicestack, FaUserShield } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { motion } from "framer-motion";
import AddBlog from "../components/AddBlog";
import YourBlogs from "../components/YourBlogs";
import Contacts from "../components/Contacts";
import axios from "axios";
import { LogOut, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
  const username = localStorage.getItem("adminUser");
  const [view, setView] = useState("dashboard");
  const [blogs, setBlogs] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [servicesCount] = useState(5);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogRes = await axios.get(`${import.meta.env.VITE_BASE_URL}/blogs`);
        const contactRes = await axios.get(`${import.meta.env.VITE_BASE_URL}/contacts`);
        setBlogs(blogRes.data);
        setContacts(contactRes.data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, []);

  const handleAdminLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin";
  };

  const SidebarContent = () => (
    <nav className="space-y-2 text-sm sm:text-base font-medium">
      {[
        { label: "Dashboard", icon: <FaUserShield />, key: "dashboard" },
        { label: "Add Blogs", icon: <FaBlog />, key: "addBlog" },
        { label: "Your Blogs", icon: <FaUsers />, key: "yourBlogs" },
        { label: "Service Contacts", icon: <FaServicestack />, key: "contacts" },
        { label: "Logout", icon: <LogOut />, key: "logout" },
      ].map((item) => (
        <div
          key={item.key}
          onClick={() => {
            if (item.key === "logout") {
              handleAdminLogout();
            } else {
              setView(item.key);
              setIsDrawerOpen(false); // Close drawer on click
            }
          }}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200
          ${
            view === item.key
              ? "bg-white/10 text-cyan-300 font-semibold"
              : "hover:bg-white/10 text-white hover:text-cyan-200"
          }`}
        >
          <span className="text-lg">{item.icon}</span>
          <span>{item.label}</span>
        </div>
      ))}
    </nav>
  );

  return (
    <div className="flex flex-col lg:flex-row min-h-screen font-sans bg-gradient-to-tr from-white via-[#eef2ff] to-[#f0f4ff]">
      {/* Mobile Drawer */}
      <div className="lg:hidden p-4 flex items-center justify-between">
        <button
          className="text-blue-900"
          onClick={() => setIsDrawerOpen(true)}
        >
          <Menu size={28} />
        </button>
        <span className="text-xl font-semibold text-gray-700">Admin Dashboard</span>
      </div>

      {/* Drawer Backdrop */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}

      {/* Drawer Content */}
      <aside
        className={`fixed top-0 left-0 z-50 w-64 h-screen bg-gradient-to-b from-[#1e3a8a] to-[#312e81] text-white p-6 shadow-lg transition-transform transform lg:relative lg:translate-x-0 lg:flex-shrink-0 ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <NavLink to="" className="flex items-center gap-2">
            <img
              src="/src/assets/srjglobal.png"
              alt="SRJ Logo"
              loading="lazy"
              className="w-14 h-14 drop-shadow-md"
            />
            <h1 className="text-xl font-bold tracking-wide">
              <span className="text-white">SRJ</span>
              <span className="text-[#0A49D9]"> Global</span>
              <span className="text-white"> Softech</span>
            </h1>
          </NavLink>
          {/* Close button for mobile */}
          <button className="lg:hidden" onClick={() => setIsDrawerOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        {/* Top Bar */}
        <div className="hidden lg:flex justify-between items-center mb-8">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-blue-900"
          >
            {view === "addBlog"
              ? "Add Blog"
              : view === "yourBlogs"
              ? "Your Blogs"
              : "Admin Dashboard"}
          </motion.h2>
          <div className="flex items-center gap-2">
            <FaUserShield className="text-gray-600" />
            <span className="text-gray-800 font-medium">{username}</span>
          </div>
        </div>

        {/* Views */}
        {view === "dashboard" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-md border-t-4 border-blue-600"
              >
                <FaBlog className="text-blue-600 text-3xl mb-3" />
                <h3 className="text-lg font-semibold text-gray-800">Blogs</h3>
                <p className="text-gray-500">{blogs.length} blogs added</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-md border-t-4 border-green-500"
              >
                <MdOutlineContactPhone className="text-green-500 text-3xl mb-3" />
                <h3 className="text-lg font-semibold text-gray-800">Service Contacts</h3>
                <p className="text-gray-500">{contacts.length} contact requests</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-md border-t-4 border-purple-600"
              >
                <FaServicestack className="text-purple-600 text-3xl mb-3" />
                <h3 className="text-lg font-semibold text-gray-800">Services</h3>
                <p className="text-gray-500">{servicesCount} services listed</p>
              </motion.div>
            </div>

            {/* Recent Contacts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-md"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-blue-900">Recent Contacts</h3>
              <ul className="space-y-4 text-sm">
                {contacts.slice(0, 5).map((contact) => (
                  <li key={contact._id} className="border-b pb-3">
                    <h4 className="font-semibold text-gray-800">
                      {contact.firstName} {contact.lastName}
                    </h4>
                    <p className="text-gray-600">{contact.email}</p>
                    <p className="text-gray-700 italic">
                      "{contact.message || "No message"}"
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}

        {view === "addBlog" && <AddBlog />}
        {view === "yourBlogs" && <YourBlogs />}
        {view === "contacts" && <Contacts />}

        <footer className="mt-10 text-center text-gray-400 text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} SRJ Global Softtech. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default AdminDashboard;
