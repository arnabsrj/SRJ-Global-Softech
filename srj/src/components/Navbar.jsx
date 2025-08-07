import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // You can use any icon library
import logo from "../assets/logo-header.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/services" },
    { name: "ABOUT", path: "/about" },
    { name: "INDUSTRIES", path: "/industries" },
    { name: "BLOG", path: "/blog" },
    { name: "PRICING", path: "/pricing" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md shadow-md border-b border-white/20 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 flex items-center justify-between">
        {/* Logo and Brand */}
        <NavLink
          to="/"
          className="flex items-center sm:gap-3 group"
          onClick={closeMenu}
        >
          <img
            src= {logo}
            alt="SRJ Logo"
            loading="lazy"
            className="w-[80px] h-[90px] py-2 sm:w-[90px] sm:h-[104px] drop-shadow-md transition-transform duration-300 group-hover:scale-105"
          />
          <h1 className="sm:text-2xl font-bold tracking-wide drop-shadow-sm">
            <span className="text-[#000]">SRJ</span>
            <span className="text-[#ed8105]"> GLOBAL</span><br></br>
            <span className="text-[#000]">  TECHNOLOGIES</span>
          </h1>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `relative text-md font-semibold ${
                  isActive ? "text-[#0A49D9]" : "text-[#555]"
                } hover:text-[#38BDF8] transition-all duration-300 group`
              }
            >
              {name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[#38BDF8] transition-all duration-300 ${
                  window.location.pathname === path
                    ? "w-full"
                    : "group-hover:w-full w-0"
                }`}
              ></span>
            </NavLink>
          ))}
        </nav>

        {/* Contact Us (Desktop Only) */}
        <div className="hidden md:flex">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-4 py-1.5 rounded-md text-sm font-semibold transition duration-300 shadow ${
                isActive
                  ? "bg-[#0934A2] text-white"
                  : "bg-[#0A49D9] text-white hover:bg-[#0934A2] "
              }`
            }
          >
            CONTACT US
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#0A49D9] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Animated) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white/95 backdrop-blur-md shadow-md border-t border-white/20 px-6 ${
          menuOpen ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="space-y-4 transition-opacity duration-300 delay-100">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block text-md font-semibold ${
                  isActive ? "text-[#0A49D9]" : "text-[#333]"
                } hover:text-[#38BDF8] transition-all duration-300`
              }
            >
              {name}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="block w-full text-center px-4 py-2 rounded-md bg-[#0A49D9] text-white font-semibold hover:bg-[#0934A2] transition duration-300"
          >
            CONTACT US
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
