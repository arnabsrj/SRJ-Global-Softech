import React, { useEffect, useState } from "react";
import { MdOutlineContactPhone } from "react-icons/md";
import { motion } from "framer-motion";
import AddBlog from "../components/AddBlog";
import YourBlogs from "../components/YourBlogs";
import Contacts from "../components/Contacts";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { FaBlog, FaServicestack } from "react-icons/fa";

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
        const blogRes = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/blogs`
        );
        const contactRes = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/contacts`
        );
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

  return (
   <div className="flex h-screen font-sans bg-gradient-to-tr from-white via-[#eef2ff] to-[#f0f4ff]">

  {/* Sidebar - Desktop & Mobile */}
  <div
    className={`fixed z-30 inset-y-0 left-0 w-64 transform bg-white border-r shadow-md transition-transform duration-300 ease-in-out
      ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}
      lg:translate-x-0 lg:static lg:inset-0`}
  >
    <Sidebar
      view={view}
      setView={setView}
      handleAdminLogout={handleAdminLogout}
      isDrawerOpen={isDrawerOpen}
      setIsDrawerOpen={setIsDrawerOpen}
    />
  </div>

  {/* Overlay on Mobile */}
  {isDrawerOpen && (
    <div
      className="fixed inset-0 z-20 bg-[#00000045] bg-opacity-40 lg:hidden"
      onClick={() => setIsDrawerOpen(false)}
    ></div>
  )}

  {/* Main Content */}
  <div className="flex flex-col flex-1 h-full overflow-hidden lg:ml-0 transition-all duration-300 ease-in-out">

    {/* Topbar */}
    <Topbar
      view={view}
      username={username}
      setIsDrawerOpen={setIsDrawerOpen}
    />

    {/* Main Area */}
    <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-10">
      {view === "dashboard" && (
        <>
          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <DashboardCard
              icon={<FaBlog className="text-blue-600 text-3xl mb-2" />}
              title="Blogs"
              count={`${blogs.length} blogs added`}
              color="border-blue-600"
            />
            <DashboardCard
              icon={<MdOutlineContactPhone className="text-green-500 text-3xl mb-2" />}
              title="Service Contacts"
              count={`${contacts.length} contact requests`}
              color="border-green-500"
            />
            {/* <DashboardCard
              icon={<FaServicestack className="text-purple-600 text-3xl mb-2" />}
              title="Services"
              count={`${servicesCount} services listed`}
              color="border-purple-600"
            /> */}
          </div>

          {/* Recent Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-4 sm:p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-4">
              Recent Contacts
            </h3>
            <ul className="divide-y divide-gray-200 text-sm">
              {contacts.slice(0, 5).map((contact) => (
                <li key={contact._id} className="py-3">
                  <p className="font-semibold text-gray-800">
                    {contact.firstName} {contact.lastName}
                  </p>
                  <p className="text-gray-600">{contact.email}</p>
                  <p className="italic text-gray-700">
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
    </main>

    {/* Footer */}
    <footer className="text-center text-xs text-gray-400 py-4">
      &copy; {new Date().getFullYear()} SRJ Global Softtech. All rights reserved.
    </footer>
  </div>
</div>

  );
};

const DashboardCard = ({ icon, title, count, color }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`bg-white p-6 rounded-xl shadow-md border-t-4 ${color}`}
  >
    {icon}
    <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
    <p className="text-gray-500">{count}</p>
  </motion.div>
);

export default AdminDashboard;
