import React, { useEffect, useRef } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Sample images
import sampleImg from "../assets/webdesign.avif";
import sampleImg1 from "../assets/website.avif";
import sampleImg2 from "../assets/ecommerceandretail.avif";
import sampleImg3 from "../assets/digital.avif";
import sampleImg4 from "../assets/appdev.avif";
import sampleImg5 from "../assets/graphicdesign.avif";
import sampleImg6 from "../assets/logodesign.avif";
import sampleImg7 from "../assets/customwebsite.avif";
import sampleImg8 from "../assets/wordpress.avif";
import sampleImg9 from "../assets/seo.avif";
import sampleImg10 from "../assets/ppc.avif";
import sampleImg11 from "../assets/contentwriting.avif";
import sampleImg12 from "../assets/webhosting1.avif";
import sampleImg13 from "../assets/domainregistration.avif";

const services = [
  {
    title: "Web Development",
    desc: "Custom web apps for your business.",
    img: sampleImg,
  },
  {
    title: "Website Designing",
    desc: "Android and iOS solutions.",
    img: sampleImg1,
  },
  {
    title: "E-Commerce Development",
    desc: "User-first designs with flair.",
    img: sampleImg2,
  },
  {
    title: "Digital Marketing",
    desc: "Boost your online store performance.",
    img: sampleImg3,
  },
  {
    title: "App Development",
    desc: "Logo, color, and messaging design.",
    img: sampleImg4,
  },
  {
    title: "Graphic Designing",
    desc: "Compelling copy & media assets.",
    img: sampleImg5,
  },
  {
    title: "Logo Designing",
    desc: "Boost customer engagement & loyalty.",
    img: sampleImg6,
  },
  {
    title: "Custom Website Design",
    desc: "Scalable cloud-based platforms.",
    img: sampleImg7,
  },
  {
    title: "WordPress Development",
    desc: "Business automation tools.",
    img: sampleImg8,
  },
  {
    title: "Search Engine Optimization",
    desc: "Chatbots & intelligent tools.",
    img: sampleImg9,
  },
  {
    title: "PPC Advertising",
    desc: "Ongoing support & maintenance.",
    img: sampleImg10,
  },
  {
    title: "Content Writing",
    desc: "Secure and seamless payments.",
    img: sampleImg11,
  },
  {
    title: "Web Hosting",
    desc: "Actionable business insights.",
    img: sampleImg12,
  },
  {
    title: "Domain Registration",
    desc: "Empower your team with knowledge.",
    img: sampleImg13,
  },
];

const ServicesSection = () => {
  const scrollRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    AOS.init({ once: true });

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollLeft = 0;
      scrollRef.current = setInterval(() => {
        scrollContainer.scrollLeft += 1;
        if (
          scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }, 30);
    }

    return () => clearInterval(scrollRef.current);
  }, []);

  const stopAutoScroll = () => clearInterval(scrollRef.current);

  const startAutoScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      scrollRef.current = setInterval(() => {
        container.scrollLeft += 1;
        if (
          container.scrollLeft + container.offsetWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0;
        }
      }, 30);
    }
  };

  const scrollByAmount = (amount) => {
    stopAutoScroll();
    scrollContainerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section
      className="relative py-20 px-6 md:px-10 bg-white dark:bg-gray-950 text-black dark:text-white transition-colors duration-500 overflow-x-hidden border-t border-gray-200 dark:border-gray-800"
      id="services"
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="relative w-64 h-64 flex items-center justify-center rounded-full bg-gradient-to-br from-[#0A49D9] to-[#38BDF8] text-white text-xl font-semibold text-center p-6 animate-glowPulse shadow-lg">
          <span className="z-10 animate-float">
            OUR
            <br />
            SERVICES
          </span>
          <div className="absolute inset-0 rounded-full bg-white dark:bg-gray-950 opacity-10 blur-2xl animate-glowPulse" />
        </div>

        <div
          className="flex-1 text-center md:text-left md:ml-10"
          data-aos="fade-left"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-snug text-[#0A49D9] dark:text-[#38BDF8]">
            Delivering Innovative Digital Solutions in India
          </h2>
          <p className="text-md md:text-lg text-gray-700 dark:text-gray-300 mb-8">
            <strong>SRJ Global Softech</strong> is your trusted partner in
            <span className="text-[#0A49D9] dark:text-[#38BDF8] font-medium">
              {" "}
              website development
            </span>
            ,
            <span className="text-[#0A49D9] dark:text-[#38BDF8] font-medium">
              {" "}
              UI/UX design
            </span>
            ,
            <span className="text-[#0A49D9] dark:text-[#38BDF8] font-medium">
              {" "}
              software solutions
            </span>{" "}
            and
            <span className="text-[#0A49D9] dark:text-[#38BDF8] font-medium">
              {" "}
              online branding
            </span>
            . We combine technology with creativity to help your business grow.
          </p>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-tr from-[#0A49D9] to-[#38BDF8] text-white rounded-full font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Enquire Now
            <FaArrowRight className="transform group-hover:translate-x-1 transition duration-300" />
          </Link>
        </div>
      </div>

      {/* Scrollable Services */}
      <div
        className="relative mt-20"
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
      >
        {/* Gradient overlays */}
        

        {/* Services */}
        <div
          ref={scrollContainerRef}
          className="scroll-smooth overflow-x-auto scrollbar-hide flex w-full space-x-8 px-4 pb-10 snap-x snap-mandatory"
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex-none snap-start w-[90vw] max-w-sm sm:max-w-md md:max-w-lg bg-white/40 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 group transform-gpu"
              data-aos="zoom-in-up"
              data-aos-delay={idx * 100}
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 p-6">
                  <h4 className="text-xl font-semibold text-[#0A49D9] dark:text-[#38BDF8]">
                    {service.title}
                  </h4>
                  <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                    {service.desc}
                  </p>
                </div>
                <div className="w-full md:w-1/2 h-48 md:h-52 overflow-hidden group">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Controls */}
        <div className="flex justify-center items-center mt-4 gap-4">
          <button
            onClick={() => scrollByAmount(-400)}
            className="bg-white dark:bg-gray-800 text-[#0A49D9] dark:text-[#38BDF8] p-3 rounded-full shadow hover:scale-105 transition"
            aria-label="Scroll Left"
          >
            <FaChevronLeft size={20} />
          </button>

          <button
            onClick={() => scrollByAmount(400)}
            className="bg-white dark:bg-gray-800 text-[#0A49D9] dark:text-[#38BDF8] p-3 rounded-full shadow hover:scale-105 transition"
            aria-label="Scroll Right"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
