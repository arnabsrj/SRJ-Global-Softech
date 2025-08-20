import React from "react";
import { Link } from "react-router-dom";
import ServicesSection from "../components/ServicesSection";
import Industry from "../components/Industry";
import StatsSection from "../components/StatsSection"; // <-- Import

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-screen sm:min-h-[90vh] bg-cover bg-center bg-no-repeat text-white pt-32 mt-[100px] px-4 text-center overflow-hidden transition-colors duration-500"
        style={{
          backgroundImage: "url('/hoimg.jpg')",
        }}
      >
        {/* Radial Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0, 0, 0, 0.8) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.2) 100%)",
            }}
          ></div>
        </div>

        {/* Glowing Blobs */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="w-[600px] h-[600px] bg-green-400 dark:bg-green-700 blur-[160px] opacity-20 absolute top-[-200px] left-[-150px] animate-pulse rounded-full"></div>
          <div className="w-[500px] h-[500px] bg-purple-400 dark:bg-purple-700 blur-[160px] opacity-20 absolute bottom-[-180px] right-[-150px] animate-pulse rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight text-white">
            Building Future-Ready <br />
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Websites, SEO, Branding, App Development & Marketing — all tailored
            to drive your business growth and online presence.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link to="/services">
              <button className="bg-gradient-to-r from-[#0A49D9] to-[#38BDF8] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
                Explore Our Services
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-white text-[#0A49D9] px-6 py-2 rounded-full font-semibold border border-[#0A49D9] hover:bg-[#0A49D9] hover:text-white transition-all duration-300 shadow">
                Get Free Quote
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Add Stats Section (Overlapping) */}
      <StatsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Industry Logos */}
      <Industry />
    </>
  );
};

export default Home;
