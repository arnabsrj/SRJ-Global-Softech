// src/components/Sidebar.jsx
import React from "react";
import { FaBlog, FaUsers, FaServicestack, FaUserShield } from "react-icons/fa";
import { LogOut } from "lucide-react";
import logo from "../../assets/footer-logo.png";

const Sidebar = ({ view, setView, handleAdminLogout, isDrawerOpen, setIsDrawerOpen }) => {
  const menuItems = [
    { label: "Dashboard", icon: <FaUserShield />, key: "dashboard" },
    { label: "Add Blogs", icon: <FaBlog />, key: "addBlog" },
    { label: "Your Blogs", icon: <FaUsers />, key: "yourBlogs" },
    { label: "Service Contacts", icon: <FaServicestack />, key: "contacts" },
  ];

  return (
    <>
      {/* Backdrop */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-white/10 backdrop-blur-sm z-40"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 w-64 h-screen bg-gradient-to-b from-[#1e3a8a] to-[#312e81] text-white shadow-lg transition-transform transform flex flex-col
        lg:relative lg:translate-x-0 lg:flex-shrink-0 ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6 p-2 bg-[#28307a]">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="SRJ Logo"
              loading="lazy"
              className="w-20 h-20 drop-shadow-md"
            />
            <h1 className="text-xl font-bold tracking-wide text-[16px]">
              <span className="text-white">SRJ </span>
              <span className="text-[#ed8105]">GLOBAL</span><br></br>
              <span className="text-white">TECHNOLOGIES</span>
            </h1>
          </div>
          <button className="lg:hidden text-white" onClick={() => setIsDrawerOpen(false)}>
            ✖
          </button>
        </div>

        {/* Nav Items */}
        <nav className="space-y-2 text-sm sm:text-base font-medium px-2 flex-1">
          {menuItems.map((item) => (
            <div
              key={item.key}
              onClick={() => {
                setView(item.key);
                setIsDrawerOpen(false);
              }}
              className={`flex items-center gap-3 px-2 py-3 rounded-lg cursor-pointer transition-all duration-200
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

        {/* Logout at Bottom */}
        <div className="px-2 border-t border-white/10 ">
          <div
            onClick={handleAdminLogout}
            className="flex items-center gap-3 px-2 py-3 rounded-lg cursor-pointer transition-all duration-200 text-white"
          >
            <LogOut size={20} className="text-red-400" />
            <span className="text-red-400">Logout</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;