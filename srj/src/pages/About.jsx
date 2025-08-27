import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ChooseUs from "../components/ChooseUs";
import aboutImg from "../assets/about.jpeg";

const stats = [
  { number: "850+", label: "Clients Worldwide" },
  { number: "1252+", label: "Successful Projects" },
  { number: "10+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" },
];

const About = () => {
  return (
    <div className="relative mt-[100px] min-h-screen bg-white dark:bg-[#0e0e0e] text-black dark:text-white pt-28 px-4 overflow-hidden transition-colors duration-500">
      {/* Glowing Background Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="w-[500px] h-[500px] bg-green-400 dark:bg-green-700 blur-[160px] opacity-25 absolute top-[-150px] left-[-150px] animate-pulse rounded-full"></div>
        <div className="w-[600px] h-[600px] bg-purple-400 dark:bg-purple-700 blur-[160px] opacity-25 absolute bottom-[-150px] right-[-150px] animate-pulse rounded-full"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-3xl md:text-4xl font-semibold leading-snug mb-4 tracking-tight text-[#0A49D9] dark:text-[#38BDF8]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowering Your Growth Through{" "}
          <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Innovation & Strategy
          </span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          At SRJ Global Technologies, we deliver digital solutions — from
          websites and apps to branding and SEO — helping you grow in the modern
          world.
        </motion.p>

        <motion.div
          className="flex justify-center gap-4 mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link
            to="/contact"
            className="bg-gradient-to-r from-[#0A49D9] to-[#38BDF8] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300 inline-block"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      {/* Stats Section */}
      <section className="relative z-10 -mt-14 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-xl hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0A49D9] dark:text-[#38BDF8] mb-1">
                {stat.number}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Company Section */}
      <motion.section
        className="relative z-10 mt-24 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Text Section */}
        <div className="text-left space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A49D9] dark:text-[#38BDF8]">
            Leading Website Development Agency in Noida, India
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
            Our site developers give master web application advancement and
            website architecture administrations to our clients. SRJ Global
            Technologies offers an assortment of web composition and improvement
            administrations, from making portable web advancement arrangements
            and responsive web architectures, to building custom web based
            business and intranet encounters utilizing the most recent and
            demonstrated web technologies.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
            With up to 85% of customers visiting a company’s or service
            provider’s site before making a purchase, more buyers now make
            decisions based on their online experience: the appearance,
            usability, and accessibility of your website matter more than
            ever—especially in an increasingly competitive market.
          </p>
        </div>

        {/* Image Section */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={aboutImg}
            alt="About SRJ Global Technologies"
            className="w-full max-w-md md:max-w-full mx-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </motion.section>

      <ChooseUs />
    </div>
  );
};

export default About;
