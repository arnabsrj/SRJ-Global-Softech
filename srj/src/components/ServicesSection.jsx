

import React, { useEffect, useRef, useState } from "react";
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

const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

const services = [
  {
    id: "website-designing",
    title: "Website Designing",
    desc: "We are inventive and imaginative in website composition and our essential center is to add new elements that can set down to guarantee a good outcome for your internet based business. Our imaginative planning group invests the energy to get your business goals and target specialty prior to beginning the planning system.",
    img: sampleImg1,
  },
  {
    id: "graphic-designing",
    title: "Graphic Designing",
    desc: "Being a trailblazer in graphic design, SRJ Global Technologiesmakes superb plans that change the norm of your internet based business across different stages. Our creators truly do savvy and imaginative work to pass your business thoughts on to the crowd through amazing realistic plans.",
    img: sampleImg5,
  },
  {
    id: "logo-designing",
    title: "Logo Designing",
    desc: "Your logo configuration is crucial for your image's personality. An organization logo is the primary thing clients will see when they're acquainted with another brand or business, so you must make a logo as a matter of first importance. An all around made logo tells your crowd what industry you're in, what the future held offer, what makes your business interesting, and gives a knowledge into your image's character.",
    img: sampleImg6,
  },
    {
      id: "custom-website-designing",
    title: "Custom Website Design",
    desc: "We deliver high-quality and precision logo designs. Your site should to mirror your interesting business style and we can make it feasible for you. Let us know your business prerequisites including your altered style and we will convey the site that addresses your site. Our website designers guarantee that your site is completely improved utilizing the best SEO practices so it can undoubtedly be found. ",
    img: sampleImg7,
  },
  {
    id: "web-development",
    title: "Web Development",
    desc: "We are a main web advancement organization. We have been offering serious web answers for SMEs worldwide. Our client driven site arrangements convey anticipated business results. We foster a wide range of web-based interfaces to offer expansive usefulness and dynamic web insight to our clients.",
    img: sampleImg,
  },
  {
    id: "E-Commerce-Development",
    title: "E-Commerce Development",
    desc: "SRJ Global Technologiesoffers total start to finish eCommerce improvement arrangements across different industries. We cover each basic action focused on at the turn of events, upkeep, and development of a web store. We perform on creating web arrangements that are the best component with your satisfaction. ",
    img: sampleImg2,
  },
   {
    id: "App-Development",
    title: "App Development",
    desc: "SRJ Global Technologiesis known among the top portable application advancement organizations. We foster dependable portable applications to empower our clients to get imaginative thoughts and make their undertaking unmistakably interesting. Our application improvement group makes drawing in and adaptable portable applications.",
    img: sampleImg4,
  },
   {
    id: "wordPress-development",
    title: "WordPress Development",
    desc: "We have gained strength in planning and creating drawing in WooCommerce layouts and topics for the eCommerce entryways according to the client. Every one of the layouts engineers are SEO-accommodating and easy to use. Independent of whether our clients need to broaden any usefulness or further develop the far reaching eCommerce store, our WooCommerce engineers have the capability of customization benefits.",
    img: sampleImg8,
  },
  {
    id: "Digital-Marketing",
    title: "Digital Marketing",
    desc: "All digital marketing services conveyed by SRJ Global Technologiesare organized with an inside and out arranging and procedure advancement process. We are Digital Marketing Agency in Noida and Delhi that brings groundbreaking development for our clients. Our computerized showcasing group then, at that point, designs.",
    img: sampleImg3,
  },
 
  
 
  {
    id: "Search-Engine-Optimization",
    title: "Search Engine Optimization",
    desc: "Our SEO specialists are energetic about our SEO benefits so they figure out their own strategies to acquire achievement. It is an alternate sort of fervor when our client comes to on the primary page of Google. Our expert SEO groups contribute a few hours to test new inventive SEO strategies prior to conveying our SEO administrations in India. ",
    img: sampleImg9,
  },
  {
    id: "PPC-Advertising",
    title: "PPC Advertising",
    desc: "Our PPC specialists are generally energetic about dealing with new difficulties and carry productive outcomes to the clients. It gives us enormous delight when we come to the main page of web crawlers. As a top PPC Management Company, we work on a site: Google advertisements, FB promotions, YouTube advertisements, Instagram advertisements.",
    img: sampleImg10,
  },
  {
    id: "Content-Writing",
    title: "Content Writing",
    desc: "SRJ Global Technologiesoffers convincing substance for your sites to arrive at the main interest group according to your business idea. Content composing administrations to compose content for powerful internet showcasing. Our group of expert scholars and editors give great site content composing administrations which are based on SEO puposes. ",
    img: sampleImg11,
  },
  {
    id: "Web-Hosting",
    title: "Web Hosting",
    desc: "Assuming you are searching for the best web hosting service for your site, we have definite outlines and surveys for each web facilitating supplier, featuring their separate assets and highlights that might be significant for your decision, in addition to data on evaluating and why every specific web host might be an optimal fit for you. We likewise have a point by point clarification of how we completely test each web facilitating supplier.",
    img: sampleImg12,
  },
  {
    id: "Domain-Registration",
    title: "Domain Registration",
    desc: "A Domain Name Registration resembles a distinguishing proof name which is there to show the proprietorship to that name on the web. It is an extraordinary location through which your clients and companions track down all the data about your administrations. When an area enrollment is done under your name it can not be utilized by some other client. This turns into your long-lasting location and clients can approach all the data regardless of where you are found. Area names are otherwise called hostnames.",
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
      className="relative mt-[70px] py-20 px-6 md:px-10 bg-white dark:bg-gray-950 text-black dark:text-white transition-colors duration-500 overflow-x-hidden border-t border-gray-200 dark:border-gray-800"
      id="services"
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="relative w-64 h-64 flex items-center justify-center rounded-full bg-gradient-to-br from-[#0A49D9] to-[#38BDF8] text-white text-xl font-semibold text-center p-6 animate-glowPulse shadow-lg">
          <span className="z-10 animate-float text-[40px] font-extrabold">
            OUR SERVICES
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
            <strong>SRJ Global Technologies</strong> is your trusted partner in
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
        <div
          ref={scrollContainerRef}
          className="scroll-smooth overflow-x-auto hide-scrollbar flex w-full space-x-8 px-4 pb-10 snap-x snap-mandatory"
        >
         {services.map((service, idx) => (
          <div
            key={service.id}
            className="flex-none snap-start w-[90vw] max-w-sm sm:max-w-md md:max-w-lg bg-white/40 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl hover:shadow-2xl transition-transform duration-300 group transform-gpu"
            data-aos="zoom-in-up"
            data-aos-delay={idx * 100}
          >
            <div className="flex flex-col md:flex-row items-center overflow-hidden">
              <div className="w-full md:w-1/2 p-6 ">
                <h4 className="text-xl font-semibold text-[#0A49D9] dark:text-[#38BDF8]">
                  {service.title}
                </h4>
                <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                  {truncateText(service.desc, 10)}
                </p>
                <Link
                   to={`/services/${service.id}`}
                  className="mt-3 inline-block text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read More
                </Link>
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
