import React, { useState } from "react";
import {
  FaRocket,
  FaBuilding,
  FaGraduationCap,
  FaShoppingCart,
  FaBullhorn,
  FaUsers,
  FaHeartbeat,
  FaCalendarAlt,
  FaUtensils,
  FaTicketAlt,
  FaFilm,
  FaTools,
} from "react-icons/fa";

import startupImg from "../assets/startupbusiness.avif";
import enterpriseImg from "../assets/enterprise.avif";
import educationImg from "../assets/education.avif";
import ecommerceImg from "../assets/ecommerc.avif";
import marketingImg from "../assets/digitalmarket.jpeg";
import socialImg from "../assets/socialnetworking.avif";
import healthImg from "../assets/healthcare.avif";
import eventImg from "../assets/ticke.avif";
import foodImg from "../assets/food.avif";
import bookingImg from "../assets/theticket.png";
import mediaImg from "../assets/media.avif";
import otherImg from "../assets/other.avif";

const services = [
  {
    title: "Business Startup",
    desc: "Launch your startup with confidence.",
    brief:
      "We help turn your ideas into real products with a startup-ready approach. From concept to launch, we support you at every stage — including MVPs, branding, pitch decks, and funding preparation — to build a strong foundation for your business.",
    provided: [
      "24x7 Technical Support",
      "Startup Consulting",
      "Pitch Decks & Fund Raising",
      "Branding & Identity",
      "Business Model Validation",
      "Product Roadmapping",
      "Launch Strategy",
    ],
    icon: <FaRocket />,
    image: startupImg,
  },
  {
    title: "Enterprise Service",
    desc: "Robust, scalable enterprise solutions.",
    brief:
      "We deliver enterprise-grade solutions tailored to large organizations. From ERP systems and integrations to data security and scalable cloud infrastructure, we ensure your operations are seamless, efficient, and ready for long-term growth and digital transformation.",
    provided: [
      "ERP Development",
      "Cloud Infrastructure",
      "System Integration",
      "Data Warehousing",
      "Workflow Automation",
      "Custom Dashboards",
      "Security Compliance",
    ],
    icon: <FaBuilding />,
    image: enterpriseImg,
  },
  {
    title: "Education & Learning",
    desc: "Smart solutions for smart learners.",
    brief:
      "Our digital learning solutions modernize the education experience. We build LMS platforms, virtual classrooms, and engagement tools that enhance learning outcomes for schools, institutions, and edtech companies through powerful user-centered designs.",
    provided: [
      "Learning Management Systems",
      "Online Courses & Exams",
      "Video Conferencing Tools",
      "Gamified Learning Modules",
      "Student Analytics",
      "Mobile Learning Apps",
      "Teacher-Student Portals",
    ],
    icon: <FaGraduationCap />,
    image: educationImg,
  },
  {
    title: "Ecommerce & Retail",
    desc: "Scalable retail solutions.",
    brief:
      "We craft tailored eCommerce platforms that drive conversions and growth. From stunning storefronts to backend management, we empower retail businesses with seamless shopping experiences, payment systems, and inventory tools that scale.",
    provided: [
      "Custom Storefront Development",
      "Cart & Checkout Integration",
      "Product & Inventory Management",
      "Payment Gateways",
      "Order Tracking",
      "Promotions & Coupons",
      "User Reviews & Ratings",
    ],
    icon: <FaShoppingCart />,
    image: ecommerceImg,
  },
  {
    title: "Digital Marketing",
    desc: "Drive visibility and leads.",
    brief:
      "We help you reach your audience, generate leads, and grow online. Our digital marketing services combine strategy, content, analytics, and automation to deliver impactful results across multiple platforms including Google, Meta, and email campaigns.",
    provided: [
      "SEO & SEM",
      "Email Marketing",
      "Social Media Campaigns",
      "Content Strategy",
      "Google Ads & Analytics",
      "Performance Reporting",
      "A/B Testing & Conversion Optimization",
    ],
    icon: <FaBullhorn />,
    image: marketingImg,
  },
  {
    title: "Social Networking",
    desc: "Connect your audience.",
    brief:
      "Create thriving communities with scalable social networking platforms. We design secure, engaging features that support user interaction, content sharing, and growth — perfect for startups, niche networks, or internal enterprise communities.",
    provided: [
      "User Profiles & Authentication",
      "Real-time Chat & Messaging",
      "Groups & Communities",
      "Content Feeds",
      "Privacy & Moderation Tools",
      "Friend & Follower Systems",
      "Push Notifications",
    ],
    icon: <FaUsers />,
    image: socialImg,
  },
  {
    title: "Healthcare & Fitness",
    desc: "Build wellness with tech.",
    brief:
      "Transform the health and wellness experience with digital solutions. We build secure, user-friendly apps and platforms for doctors, patients, and fitness users to access services like telehealth, tracking, and dashboards anytime, anywhere.",
    provided: [
      "Telemedicine Platforms",
      "Health Record Management",
      "Workout & Fitness Trackers",
      "Appointment Scheduling",
      "Nutrition Planning",
      "Health Dashboards",
      "Doctor-Patient Chat",
    ],
    icon: <FaHeartbeat />,
    image: healthImg,
  },
  {
    title: "Event & Ticket",
    desc: "Manage your events seamlessly.",
     brief:
      "Plan, promote, and sell tickets for your events effortlessly. Our end-to-end event tech includes landing pages, digital tickets, QR scanning, analytics, and seamless integrations — ideal for concerts, conferences, and community events.",
    provided: [
      "Event Landing Pages",
      "Ticket Booking System",
      "QR Code Tickets",
      "Event Calendar Integration",
      "Payment Gateways",
      "Attendee Management",
      "Live Event Analytics",
    ],
    icon: <FaCalendarAlt />,
    image: eventImg,
  },
  {
    title: "Food & Beverage",
    desc: "Digitizing dining experiences.",
    brief:
      "Serve your customers better with digital restaurant solutions. From menus and online ordering to POS and reservations, we enable restaurants and cloud kitchens to optimize operations and enhance customer experiences.",
    provided: [
      "Interactive Menu Builder",
      "Online Ordering System",
      "Table Reservations",
      "POS System Integration",
      "Delivery Tracking",
      "Loyalty Programs",
      "Kitchen Display Systems",
    ],
    icon: <FaUtensils />,
    image: foodImg,
  },
  {
    title: "Ticketing & Booking",
    desc: "Power travel and leisure.",
    brief:
      "Build seamless ticketing and booking systems for travel, leisure, or services. We offer responsive UI, dynamic calendars, e-tickets, notifications, and secure payments to simplify the customer experience.",
    provided: [
      "Seat & Slot Selection",
      "Calendar Integration",
      "Digital E-Tickets",
      "SMS/Email Confirmations",
      "Booking Management Dashboard",
      "Multiple Payment Options",
      "User Booking History",
    ],
    icon: <FaTicketAlt />,
    image: bookingImg,
  },
  {
    title: "Media & Entertainment",
    desc: "Streamline media workflows.",
    brief:
      "Deliver high-quality media experiences with platforms built for performance and scale. Whether streaming or subscription, we help content creators and enterprises launch OTT platforms, live broadcasts, and monetized media hubs.",
    provided: [
      "OTT Platform Development",
      "Live Streaming Tools",
      "Video CMS & Uploads",
      "Subscription & Paywall Integration",
      "User Analytics",
      "Content Scheduling",
      "Multi-device Support",
    ],
    icon: <FaFilm />,
    image: mediaImg,
  },
  {
    title: "Other",
    desc: "Custom-built solutions.",
    brief:
      "Have a unique idea? We build custom solutions for businesses across all industries. Our agile teams can handle niche, innovative, or non-standard digital product requirements with full-stack capabilities and expert consulting.",
    provided: [
      "Custom Web & Mobile Apps",
      "Cross-industry Solutions",
      "Business Consulting",
      "Tech Strategy & Architecture",
      "Dedicated Development Teams",
      "Ongoing Maintenance",
      "Scale Planning & Optimization",
    ],
    icon: <FaTools />,
    image: otherImg,
  },
];

const IndustriesPage = () => {
  const [selected, setSelected] = useState(null);
  const [viewMode, setViewMode] = useState("brief");

  return (
    <section className="relative mt-[100px] min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-[#0d0d0d] dark:via-[#111] dark:to-[#1a1a1a] text-black dark:text-white pt-32 px-4 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-sky-400/30 rounded-full blur-[150px] animate-pulse-slow z-0" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[130px] animate-pulse-slow z-0" />

      {/* Heading */}
      <div className="text-center relative z-10 mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-sky-600 dark:text-white tracking-wide mb-2">
          Our Industrial Services
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto">
          Explore our wide range of offerings tailored to modern businesses.
        </p>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        {/* Left – Service List */}
        <div className="w-full md:w-1/3 max-h-[75vh] overflow-y-auto px-4 custom-scrollbar">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(index);
                setViewMode("brief");
              }}
              className={`cursor-pointer mt-5 mb-4 group bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-2xl px-6 py-5 shadow-md hover:shadow-xl hover:shadow-sky-200/60 dark:hover:shadow-sky-500/30 transition-transform duration-300 hover:scale-[1.025] ${
                selected === index ? "ring-2 ring-sky-400" : ""
              }`}
            >
              <div className="text-3xl text-sky-500 group-hover:animate-bounce mb-2">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Right – Selected Service Details */}
        <div className="relative w-full mb-5 md:w-2/3 sm:h-[520px] p-1 rounded-3xl bg-white/70 dark:bg-[#0f172a]/50 shadow-xl backdrop-blur-xl border border-gray-200 dark:border-gray-700 transition-all duration-700">
          <div className="relative w-full h-full rounded-[22px] bg-white/90 dark:bg-[#0f172a]/70 py-6 px-2 sm:px-0 sm:p-10 overflow-hidden shadow-lg">
            {selected === null ? (
              <div className="relative z-10 text-center mt-20">
                <h2 className="text-2xl font-bold text-gray-700 dark:text-white mb-5">
                  Select a Service to Learn More
                </h2>
                <div className="w-32 h-32 bg-sky-100 dark:bg-sky-900 rounded-full blur-xl mx-auto" />
              </div>
            ) : (
              <div className="relative z-10 w-full max-w-2xl mx-auto animate-fade-in">
                <h2 className="text-3xl sm:text-4xl font-bold text-sky-600 dark:text-sky-400 mb-6 text-center tracking-wide drop-shadow-sm">
                  {services[selected].title}
                </h2>

                {/* Toggle */}
                <div className="flex justify-center items-center mb-6 bg-sky-100 dark:bg-[#1e293b] rounded-full overflow-hidden border border-sky-500 sm:w-fit mx-auto shadow">
                  <button
                    onClick={() => setViewMode("brief")}
                    className={`px-6 sm:py-2 text-sm sm:text-base transition font-medium focus:outline-none ${
                      viewMode === "brief"
                        ? "bg-sky-600 py-2  text-white shadow"
                        : "text-sky-600 hover:bg-sky-200 dark:hover:bg-[#334155]"
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setViewMode("services")}
                    className={`px-6 sm:py-2 text-sm sm:text-base transition font-medium focus:outline-none ${
                      viewMode === "services"
                        ? "bg-sky-600 py-2 text-white shadow"
                        : "text-sky-600 hover:bg-sky-200 dark:hover:bg-[#334155]"
                    }`}
                  >
                    Industrial Services Provided
                  </button>
                </div>

                {/* Details */}
                <div className="text-gray-700 dark:text-gray-300 text-lg min-h-[120px] transition-all duration-500 ease-in-out">
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start justify-center">
                    <div className="w-full md:w-2/3 max-h-60 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-sky-400 scrollbar-track-transparent">
                      {viewMode === "brief" ? (
                        <div className="animate-fade-in leading-relaxed text-center md:text-left whitespace-pre-line">
                          {services[selected].brief}
                        </div>
                      ) : (
                        <ul className="list-disc text-left list-inside space-y-2 animate-fade-in px-5 sm:px-2 max-h-48 overflow-y-auto  scrollbar-thin scrollbar-thumb-sky-400 scrollbar-track-transparent">
                          {services[selected].provided.map((item, idx) => (
                            <li key={idx} className="tracking-wide">
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Image */}
                    {services[selected].image && (
                      <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                        <img
                          src={services[selected].image}
                          alt={services[selected].title}
                          className="rounded-2xl w-48 h-48 object-cover shadow-lg"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Back Button */}
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={() => setSelected(null)}
                    className="mt-4 px-6 py-2 bg-white dark:bg-[#0f172a] border border-sky-500 text-sky-600 font-medium rounded-full hover:bg-sky-100 dark:hover:bg-[#1e293b] transition shadow hover:shadow-sky-300/30"
                  >
                    ← Back to All Industrial Services
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesPage;
