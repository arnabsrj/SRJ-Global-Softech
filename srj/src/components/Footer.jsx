import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaCommentDots,
  FaPinterest,
  FaYoutube,
  FaGoogle,
} from "react-icons/fa";
import { MdOutlineSmartToy } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import AdPopup from "../components/AdPopup";
import Chatbot from "./Chatbot";
import logo from "../assets/footer-logo.png";

const Footer = () => {
  const [chatbotOpen, setChatbotOpen] = useState(false);
  return (
    <footer className="relative bg-[#0A0A23] text-white px-6 py-12 border-t border-gray-700 z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1.4fr] lg:grid-cols-[2fr_1fr_1.7fr_1fr_1fr] gap-8">
        {/* Logo & Tagline */}
        <div>
          {/* Logo and Brand */}
          <NavLink to="/" className="flex items-center sm:gap-3 group">
            <img
              src={logo}
              alt="SRJ Logo"
              className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] drop-shadow-md transition-transform duration-300 group-hover:scale-105"
            />
            <h1 className="text-2xl font-bold tracking-wide drop-shadow-sm">
              <span className="text-white">SRJ</span>
              <span className="text-[#0A49D9]"> GLOBAL</span>
              <span className="text-white"> TECHNOLOGIES</span>
            </h1>
          </NavLink>
          <p className="text-sm text-gray-400 mt-2">
           Innovative digital solutions: we build high-quality websites, mobile
            apps, and e-commerce platforms for growing brands.
          </p>
          <div className="flex gap-5 mt-8">
            <a
              href="https://www.instagram.com/srjglobalsoftech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 text-[#0A49D9] hover:text-white hover:bg-[#0A49D9] transition"
              aria-label="Instagram"
            >
              <FaInstagram className="sm:text-2xl text-lg" />
            </a>
            <a
              href="https://in.pinterest.com/srjsoftechsolutions/_pins/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 text-[#0A49D9] hover:text-white hover:bg-[#0A49D9] transition"
              aria-label="Pinterest"
            >
              <FaPinterest className="sm:text-2xl text-lg" />
            </a>
            <a
              href="https://www.youtube.com/@srjglobalsoftech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 text-[#0A49D9] hover:text-white hover:bg-[#0A49D9] transition"
              aria-label="YouTube"
            >
              <FaYoutube className="sm:text-2xl text-lg" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61577599466653"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 text-[#0A49D9] hover:text-white hover:bg-[#0A49D9] transition"
              aria-label="Facebook"
            >
              <FaFacebookF className="sm:text-2xl text-lg" />
            </a>
            <a
              href="https://x.com/srjsoftechsols"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 text-[#0A49D9] hover:text-white hover:bg-[#0A49D9] transition"
              aria-label="Twitter"
            >
              <FaXTwitter className="sm:text-2xl text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/company/srj-global-softech/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 text-[#0A49D9] hover:text-white hover:bg-[#0A49D9] transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="sm:text-2xl text-lg" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/services" className="hover:text-[#38BDF8]">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#38BDF8]">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#38BDF8]">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/review" className="hover:text-[#38BDF8]">
                Review Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get In Touch</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              Email:{" "}
              <a
                href="mailto:srjglobaltechnology@gmail.com"
                className="text-[#38BDF8]"
              >
                srjglobaltechnology@gmail.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <span className="text-[#38BDF8]">
                <br />
                +91 92667 06599 <br />
                +91 96251 90448 <br />
                +91 92665 94199
              </span>
            </li>
            <li>
              Address:
              <span className="block text-[#38BDF8] mt-1">
                Urbtech Trade Center Tower, <br></br>
                C -1101 Noida Sector-132,<br></br>
                 Uttar Pradesh 201304
              </span>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/privacy" className="hover:text-[#38BDF8]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-[#38BDF8]">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="hover:text-[#38BDF8]">
                Cookies Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Review Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Review Us</h3>
          <p className="text-sm text-gray-400 mb-4">
            Your feedback helps us improve and grow.
          </p>
          <a
            href="https://www.google.com/search?q=SRJ+Global+Softech&ludocid=YOUR_PLACE_ID_HERE#lrd=0x0:0x0,1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#0A49D9] text-white hover:bg-[#0934A2] text-sm font-semibold shadow transition-all"
          >
            <FaGoogle className="text-lg" />
            Review us on Google
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} SRJ Global Technologies. All rights reserved.
      </div>

      {/* Floating Chatbot & Chat Icons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <button
          onClick={() => setChatbotOpen((v) => !v)}
          className="p-3 rounded-full bg-purple-600 text-white shadow-lg hover:scale-110 transition-all"
          aria-label="Chatbot"
        >
          <MdOutlineSmartToy className="text-xl" />
        </button>
        <a
          href="https://wa.me/9266594199"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-green-600 text-white shadow-lg hover:scale-110 transition-all"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="text-xl" />
        </a>
        <Link
          to="/contact"
          className="p-3 rounded-full bg-blue-600 text-white shadow-lg hover:scale-110 transition-all"
          aria-label="Message"
        >
          <FaCommentDots className="text-xl" />
        </Link>
      </div>

      {/* Chatbot Modal */}
      <Chatbot open={chatbotOpen} onClose={() => setChatbotOpen(false)} />

      {/* <AdPopup /> */}
    </footer>
  );
};

export default Footer;
