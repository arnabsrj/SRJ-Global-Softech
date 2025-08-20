import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaGamepad,
  FaPaintBrush,
  FaPenNib,
  FaCode,
  FaCogs,
  FaShoppingCart,
  FaWordpress,
  FaBullhorn,
  FaSearch,
  FaGoogle,
  FaPenFancy,
  FaServer,
  FaWhatsapp,
  FaGlobe,
} from "react-icons/fa";
import { MdSupportAgent, MdOutlineAnalytics } from "react-icons/md";
import { PiPresentationChartLight } from "react-icons/pi";
import { GiArtificialIntelligence, GiTeamIdea } from "react-icons/gi";
import { BsGearFill, BsPhoneVibrate } from "react-icons/bs";
import { SiGoogletagmanager } from "react-icons/si";
import webDesignImg from "../assets/web.avif";
import graphic from "../assets/gr.png";
import logo from "../assets/logo.avif";
import cdesign from "../assets/cdesign.avif";
import develop from "../assets/develop.avif";
import ecom from "../assets/ecom.avif";
import app from "../assets/app.avif";
import word from "../assets/word.avif";
import digi from "../assets/digi.avif";
import search from "../assets/search.avif";
import ppca from "../assets/ppca.avif";
import content from "../assets/content.avif";
import webhosting from "../assets/webhosting.avif";
import bulk from "../assets/bulk.avif";
import whatsapp from "../assets/whatsapp.avif";
import domain from "../assets/domain.avif";
import gaming from "../assets/gaming.jpg";



const Services = () => {
  const [selected, setSelected] = useState(null);
  const [viewMode, setViewMode] = useState("brief");
  const navigate = useNavigate();

  const { id } = useParams();
  const services = [
  {
    id: "website-designing",
    icon: <FaLaptopCode />,
    title: "Website Designing",
    desc: "We create stunning, responsive websites that reflect your brand’s personality and engage your visitors effectively.",
    image: webDesignImg,
    brief: (
      <>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          SRJ Global Technologies — Your Complete Website Design & Development
          Partner
        </h2>

        {/* Intro */}
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          In today’s highly competitive digital marketplace, having a quality
          product or service is just the first step toward success. True growth
          requires a strong online presence, a user-focused design strategy, and
          a digital experience that engages and converts. At SRJ Global
          Technologies, we deliver all three — with precision, creativity, and
          technology that works for your business.
        </p>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          We are more than just a website design agency — we are your end-to-end
          digital solutions partner. From responsive and SEO-optimized websites
          to fully functional e-commerce platforms, our team blends innovative
          design with robust development to help you stand out in a crowded
          online world.
        </p>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Whether you are a startup seeking your first digital footprint or an
          established business aiming to scale, we craft tailored solutions that
          combine sleek UI/UX, cutting-edge technology stacks, and
          business-driven strategies.
        </p>

        {/* Mission */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Our Mission
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          Our mission is simple yet ambitious — to be the most trusted and
          results-driven website design company for businesses across
          industries. We aim to transform your vision into a powerful digital
          experience that not only looks stunning but also performs flawlessly.
          With every project, we strive for:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Timely Delivery</strong> — Because your business can’t wait.
          </li>
          <li>
            <strong>High Performance</strong> — Optimized for speed, security,
            and scalability.
          </li>
          <li>
            <strong>Customer-Centric Approach</strong> — We design for your
            audience, not just for aesthetics.
          </li>
          <li>
            <strong>Value-Added Solutions</strong> — Every design choice has a
            purpose and a measurable impact.
          </li>
        </ul>

        {/* Process */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Our Design & Development Process
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Discover:</strong> We begin by understanding your goals,
            audience, and unique challenges.
          </li>
          <li>
            <strong>Design:</strong> Our creative team develops a user-friendly,
            responsive, and engaging interface that reflects your brand
            identity.
          </li>
          <li>
            <strong>Build:</strong> Using the latest frameworks and coding
            standards, we develop a secure, scalable, and SEO-friendly site.
          </li>
          <li>
            <strong>Deliver & Optimize:</strong> We test, refine, and launch a
            website that performs smoothly across all devices and browsers.
          </li>
        </ul>

        {/* Why Choose Us */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Why Choose SRJ Global Technologies?
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Custom-Tailored Designs:</strong> Every project is unique.
            We build websites specifically for your business needs, ensuring
            they stand apart from competitors.
          </li>
          <li>
            <strong>Mobile-First Approach:</strong> Over 90% of users browse
            from mobile devices. We ensure your site looks and functions
            perfectly on all screen sizes.
          </li>
          <li>
            <strong>SEO & Marketing-Ready:</strong> We build websites that are
            search engine-friendly from the ground up, increasing your chances
            of ranking high and attracting the right audience.
          </li>
          <li>
            <strong>User Experience First:</strong> Our designs are created with
            your customer in mind, making navigation intuitive and engagement
            effortless.
          </li>
          <li>
            <strong>Secure & Scalable Solutions:</strong> From code to hosting,
            we implement best practices for safety and long-term growth.
          </li>
        </ul>

        {/* Closing */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Turning Your Ideas into a Digital Reality
        </h3>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          At SRJ Global Technologies, every website we create is a blend of
          creativity, technology, and strategy. Our goal is not just to give you
          a website but to give you a digital platform that works as your 24/7
          marketing engine. We believe in building experiences that leave a
          lasting impression and drive measurable results.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          Your business deserves a modern, responsive, and high-performing
          website. We’re here to make that happen — with innovation, dedication,
          and precision.
        </p>
      </>
    ),
    provided: [
      "Responsive Web Design",
      "Business Portfolio Websites",
      "E-Commerce Platforms",
      "Landing Pages",
      "Modern UI/UX design",
      "Front-end development",
      "SEO-friendly website architecture",
      "Mobile-first design",
      "Cross-device compatibility",
      "Secure and scalable builds",
      "Performance optimization",
      "Custom animations and interactions",
    ],
  },
  {
    id: "graphic-designing",
    icon: <FaPaintBrush />,
    title: "Graphic Designing",
    desc: "Our creative designs turn ideas into impactful visuals that speak directly to your target audience.",
    image: graphic,
    brief: (
      <>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          SRJ Global Technologies — Creative Graphic Design Services that
          Inspire & Engage
        </h2>

        {/* Intro */}
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          In the fast-paced digital era, your brand’s visual identity plays a
          crucial role in capturing attention, creating trust, and driving
          action. At SRJ Global Technologies, we understand that design is more
          than just aesthetics — it’s about telling your brand’s story in a way
          that resonates with your audience.
        </p>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          We provide end-to-end graphic design solutions tailored to your
          business goals and brand personality. From concept to execution, our
          creative team blends artistic vision with strategic thinking to
          deliver designs that are visually stunning, message-driven, and
          consistent across all platforms.
        </p>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Whether you need bold and modern visuals for digital marketing or
          elegant, print-ready designs for offline branding, we ensure every
          piece of creative work communicates your message effectively and
          leaves a lasting impression.
        </p>

        {/* Services */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Our Graphic Design Services Include:
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Logo Design & Brand Identity:</strong> Crafting unique,
            memorable logos that reflect your business values.
          </li>
          <li>
            <strong>Social Media Creatives:</strong> Engaging posts, banners,
            and stories tailored for your brand’s social presence.
          </li>
          <li>
            <strong>Marketing Collateral:</strong> Flyers, brochures, business
            cards, and other promotional materials.
          </li>
          <li>
            <strong>Infographics & Presentations:</strong> Simplifying complex
            ideas into visually appealing graphics.
          </li>
          <li>
            <strong>Print & Digital Advertisements:</strong> High-impact designs
            for both online campaigns and offline promotions.
          </li>
          <li>
            <strong>Custom Illustrations & Icons:</strong> Adding unique graphic
            elements that set your brand apart.
          </li>
        </ul>

        {/* Process */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Our Design Process
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Understand Your Brand:</strong> We dive deep into your
            vision, audience, and unique selling points.
          </li>
          <li>
            <strong>Creative Concepting:</strong> Brainstorming ideas, layouts,
            and themes that align with your objectives.
          </li>
          <li>
            <strong>Design & Refine:</strong> Bringing concepts to life while
            collaborating closely for feedback and improvements.
          </li>
          <li>
            <strong>Deliver with Precision:</strong> Providing ready-to-use
            designs optimized for digital or print media.
          </li>
        </ul>

        {/* Why Choose Us */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Why Choose SRJ Global Technologies for Graphic Design?
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Creative & Strategic Approach:</strong> Our designs don’t
            just look good — they have a purpose.
          </li>
          <li>
            <strong>Brand Consistency:</strong> Ensuring every design aligns
            with your brand’s voice and style guide.
          </li>
          <li>
            <strong>Multi-Platform Adaptability:</strong> Designs tailored for
            web, mobile, social media, and print.
          </li>
          <li>
            <strong>Attention to Detail:</strong> From typography to color
            palettes, every element is carefully crafted.
          </li>
          <li>
            <strong>Fast Turnaround:</strong> Meeting your deadlines without
            compromising on quality.
          </li>
        </ul>

        {/* Closing */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Turning Concepts into Visual Masterpieces
        </h3>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          At SRJ Global Technologies, we believe great design is the bridge
          between your business and your customers. Our goal is to transform
          your ideas into powerful visuals that inspire, engage, and convert.
          Whether you’re building a new brand or refreshing your existing
          identity, our team is here to deliver creativity that works.
        </p>
      </>
    ),
    provided: [
      "Social media creatives",
      "Banners and posters",
      "Flyers and brochures",
      "Business cards",
      "Infographics",
      "Magazine and catalog design",
      "YouTube thumbnails and covers",
      "Web and mobile app graphics",
      "Custom illustrations",
      "Print-ready file preparation",
    ],
  },
  {
     id: "logo-designing",
    icon: <FaPenNib />,
    title: "Logo Designing",
    desc: "Make a lasting impression with a unique and professional logo that defines your identity.",
    image: logo,
    brief: (
      <>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          SRJ Global Technologies — Crafting Logos that Define Your Brand
          Identity
        </h2>

        {/* Intro */}
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Your logo is the face of your brand — the first visual element
          customers recognize and remember. At SRJ Global Technologies, we
          believe a well-designed logo is not just a graphic; it’s a strategic
          tool that communicates your brand’s essence, values, and personality
          in a single glance.
        </p>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          We specialize in creating custom logos for startups, growing
          businesses, and established enterprises across various industries.
          Whether you’re looking for a sleek, minimalistic icon, an intricate
          illustrative mark, or a complete corporate identity package, our
          creative team blends artistry with strategy to deliver designs that
          stand the test of time.
        </p>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          From concept development to final delivery, we work closely with you
          to ensure your logo not only looks exceptional but also connects
          emotionally with your audience and strengthens your brand’s position
          in the market.
        </p>

        {/* Expertise */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Our Logo Design Expertise Includes:
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Minimal & Modern Logos:</strong> Clean, timeless designs
            with maximum visual impact.
          </li>
          <li>
            <strong>Illustrative & Creative Marks:</strong> Unique and detailed
            designs that tell your story.
          </li>
          <li>
            <strong>Typography-Based Logos:</strong> Stylish text-based logos
            for a professional yet distinctive look.
          </li>
          <li>
            <strong>Corporate Identity Design:</strong> Complete logo packages
            with brand guidelines for consistent use.
          </li>
          <li>
            <strong>Logo Revamps & Redesigns:</strong> Refreshing outdated logos
            while keeping your brand essence intact.
          </li>
        </ul>

        {/* Process */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Our Logo Design Process
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Brand Discovery:</strong> Understanding your business,
            audience, and vision.
          </li>
          <li>
            <strong>Concept Creation:</strong> Brainstorming and sketching
            unique logo ideas aligned with your goals.
          </li>
          <li>
            <strong>Design & Refinement:</strong> Crafting initial concepts,
            then refining based on your feedback.
          </li>
          <li>
            <strong>Final Delivery:</strong> Providing high-resolution, scalable
            files ready for print, digital, and merchandise use.
          </li>
        </ul>

        {/* Why Choose Us */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Why Choose SRJ Global Technologies for Logo Designing?
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Custom, Non-Generic Designs:</strong> Each logo is built
            from scratch, tailored to your brand.
          </li>
          <li>
            <strong>Strategic Brand Thinking:</strong> Designs that go beyond
            looks to convey meaning and purpose.
          </li>
          <li>
            <strong>Versatile Formats:</strong> Logos optimized for all
            platforms, from websites to business cards.
          </li>
          <li>
            <strong>Creative Collaboration:</strong> Your input is valued at
            every stage of the design process.
          </li>
          <li>
            <strong>Future-Proof Design:</strong> Timeless logos that stay
            relevant as your brand grows.
          </li>
        </ul>

        {/* Closing */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Make a Lasting First Impression
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Your logo is often your brand’s very first handshake with a potential
          customer — make it count. At SRJ Global Technologies, we design logos
          that are memorable, adaptable, and impactful, helping your brand shine
          in a competitive market. Let’s create a visual identity that works for
          you, today and for years to come.
        </p>
      </>
    ),
    provided: [
      "Unique logo concepts",
      "Multiple design revisions",
      "Iconic, abstract, or typographic logos",
      "Vector and source files (AI, SVG, PNG, EPS)",
      "Transparent background versions",
      "Branding guidelines (colors, typography, usage)",
      "Business card mockups",
      "Logo animations (on request)",
      "Minimalist or modern styles",
      "Logo redesign for rebranding",
    ],
  },
  {
    id: "custom-website-designing",
    icon: <FaCode />,
    title: "Custom Website Design",
    desc: "We craft custom-built websites tailored to your brand goals and target market.",
    image: cdesign,
    brief: (
      <>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          SRJ Global Technologies — Tailored Website Designs That Impress &
          Convert
        </h2>

        {/* Intro */}
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          In the digital-first world, your website is more than just an online
          address — it’s the heart of your brand presence and a powerful tool to
          engage customers. At SRJ Global Technologies, we specialize in
          building custom websites that are modern, responsive, and perfectly
          aligned with your business objectives. Every design we create is
          tailored to reflect your unique identity, ensuring you stand out in a
          competitive market.
        </p>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Whether you need a sleek portfolio site, a dynamic service-based
          platform, or a fully functional e-commerce store, our experienced team
          combines cutting-edge technology with creative vision to deliver
          results that inspire action.
        </p>

        {/* Services */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          What Our Custom Website Design Service Covers:
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Business Portfolio Websites</strong> – Professionally
            showcasing your brand, services, and achievements.
          </li>
          <li>
            <strong>E-commerce Platforms</strong> – Secure, scalable, and
            conversion-focused online stores.
          </li>
          <li>
            <strong>Landing Pages</strong> – High-impact pages designed to
            capture leads and drive sales.
          </li>
          <li>
            <strong>Corporate & Service Websites</strong> – Structured designs
            that communicate credibility and expertise.
          </li>
          <li>
            <strong>Custom Web Applications</strong> – Feature-rich solutions
            built around your unique requirements.
          </li>
        </ul>

        {/* Philosophy */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Our Design Philosophy
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Brand-Centric Approach</strong> – Every element is crafted
            to reflect your identity and values.
          </li>
          <li>
            <strong>Mobile-First Design</strong> – Optimized for a flawless
            experience on all devices.
          </li>
          <li>
            <strong>SEO-Friendly Structure</strong> – Built to rank higher and
            attract the right audience.
          </li>
          <li>
            <strong>Fast & Secure</strong> – Lightweight code, optimized
            performance, and robust security measures.
          </li>
          <li>
            <strong>User Experience First</strong> – Clean, intuitive interfaces
            for effortless navigation.
          </li>
        </ul>

        {/* Why Choose Us */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Why Choose SRJ Global Technologies for Custom Web Design?
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Fully Tailored Solutions</strong> – No templates, no
            one-size-fits-all — your site is uniquely yours.
          </li>
          <li>
            <strong>Scalable for Growth</strong> – Built to evolve with your
            business.
          </li>
          <li>
            <strong>Seamless Integration</strong> – From payment gateways to
            CRMs, we ensure smooth functionality.
          </li>
          <li>
            <strong>Creative & Technical Excellence</strong> – A perfect balance
            of design appeal and technical performance.
          </li>
          <li>
            <strong>Ongoing Support</strong> – We’re with you beyond launch for
            updates, maintenance, and optimization.
          </li>
        </ul>

        {/* Closing */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Your Vision, Our Expertise
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          At SRJ Global Technologies, we don’t just design websites — we design
          experiences that impress visitors and convert them into customers.
          Whether you’re launching a new brand, reimagining your online
          presence, or building a platform to scale, we bring the creativity,
          technology, and strategy needed to make it happen.
        </p>
      </>
    ),
    provided: [
      "Tailored designs from scratch",
      "Wireframes and mockups",
      "UI/UX research and prototyping",
      "Conversion-optimized layout",
      "Mobile-first responsive design",
      "Animation and interactive sections",
      "Custom fonts and branding",
      "Dark/light mode support",
      "Accessibility enhancements",
      "Integration with backend/API",
    ],
  },
  {
    id: "web-development",
    icon: <FaCogs />,
    title: "Web Development",
    desc: "Robust, scalable websites built with the latest technologies to ensure speed, security, and functionality.",
    image: develop,
    brief: (
      <>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          SRJ Global Technologies — Web Development That Delivers Results
        </h2>

        {/* Intro */}
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          In today’s competitive digital world, your website needs to do more
          than just look good — it must perform flawlessly, load quickly, adapt
          to all devices, and guide visitors toward taking action. At SRJ Global
          Technologies, we combine modern design principles with cutting-edge
          web development technologies to build websites that not only impress
          but also convert.
        </p>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Whether you’re launching a personal blog, developing a corporate
          portal, or building a complex enterprise platform, our team ensures
          every site we deliver is responsive, scalable, and built for long-term
          growth. From the first line of code to the final deployment, we focus
          on delivering a seamless blend of performance, security, and user
          experience.
        </p>

        {/* Expertise */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Our Web Development Expertise Includes:
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Business & Corporate Websites</strong> – Professional sites
            that establish authority and trust.
          </li>
          <li>
            <strong>E-commerce Development</strong> – Secure, user-friendly, and
            conversion-focused online stores.
          </li>
          <li>
            <strong>Custom Web Applications</strong> – Feature-rich solutions
            tailored to your unique business needs.
          </li>
          <li>
            <strong>Content Management Systems (CMS)</strong> – Flexible
            platforms like WordPress, Strapi, or custom-built solutions.
          </li>
          <li>
            <strong>Landing Pages & Microsites</strong> – High-impact pages
            designed to capture leads and drive campaigns.
          </li>
        </ul>

        {/* Technologies */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Technologies We Use
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Frontend:</strong> React.js, Next.js, Tailwind CSS, HTML5,
            CSS3, JavaScript (ES6+).
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express.js, Spring Boot, REST
            APIs, GraphQL.
          </li>
          <li>
            <strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, Firebase.
          </li>
          <li>
            <strong>Hosting & Deployment:</strong> AWS, Vercel, Netlify,
            DigitalOcean.
          </li>
        </ul>

        {/* Process */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Our Web Development Process
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Discovery & Planning</strong> – Understanding your business
            goals and project requirements.
          </li>
          <li>
            <strong>Design & Architecture</strong> – Structuring a scalable,
            high-performance solution.
          </li>
          <li>
            <strong>Development & Integration</strong> – Writing clean,
            efficient code with best practices.
          </li>
          <li>
            <strong>Testing & Optimization</strong> – Ensuring speed, security,
            and seamless user experience.
          </li>
          <li>
            <strong>Deployment & Support</strong> – Launching your site and
            providing ongoing maintenance.
          </li>
        </ul>

        {/* Why Choose Us */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Why Choose SRJ Global Technologies for Web Development?
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Custom-Built Solutions</strong> – No cookie-cutter
            templates; every site is developed to match your exact needs.
          </li>
          <li>
            <strong>Scalable & Secure</strong> – Built to grow with your
            business while keeping your data safe.
          </li>
          <li>
            <strong>SEO-Optimized from Day One</strong> – Structured to rank
            higher in search engines.
          </li>
          <li>
            <strong>Cross-Device Compatibility</strong> – Perfect performance on
            desktop, mobile, and tablets.
          </li>
          <li>
            <strong>Ongoing Partnership</strong> – We provide continuous
            support, updates, and improvements.
          </li>
        </ul>

        {/* Closing */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Your Vision, Coded to Perfection
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          At SRJ Global Technologies, we believe a website is more than an
          online presence — it’s the foundation of your digital success. With a
          perfect balance of creativity and technical expertise, we develop
          websites that inspire confidence, drive engagement, and deliver
          measurable results.
        </p>
      </>
    ),
    provided: [
      "Full-stack development",
      "Frontend with React/Vue/Next.js",
      "Backend with Node.js/Express",
      "RESTful API integration",
      "Admin panels & dashboards",
      "Database (MongoDB, MySQL) setup",
      "Authentication & authorization",
      "Secure form handling",
      "Deployment & CI/CD pipelines",
      "Bug fixes and maintenance",
    ],
  },
  {
    id: "E-Commerce-Development",
    icon: <FaShoppingCart />,
    title: "E-Commerce Development",
    desc: "Launch high-converting online stores with custom features, payment gateways, and a smooth checkout experience.",
    image: ecom,
    brief: (
      <>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          SRJ Global Technologies — Build & Grow Your Online Store with
          Confidence
        </h2>

        {/* Intro */}
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          In the fast-evolving world of online retail, a seamless and secure
          shopping experience is essential to win customers and drive sales. At
          SRJ Global Technologies, we specialize in designing and developing
          high-performance e-commerce websites that are tailored to your
          business size, industry, and growth ambitions.
        </p>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Whether you’re launching a boutique store with a handful of products
          or scaling a large marketplace with thousands of SKUs, we build
          scalable, intuitive platforms that deliver smooth navigation, fast
          loading, and secure transactions.
        </p>

        {/* Solutions */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Our E-commerce Development Solutions Include:
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Custom Online Stores</strong> – Tailored platforms built
            from the ground up to fit your unique business model.
          </li>
          <li>
            <strong>WooCommerce Development</strong> – Flexible and feature-rich
            WordPress-based stores for easy management.
          </li>
          <li>
            <strong>Shopify Stores</strong> – User-friendly and scalable
            solutions for quick deployment and ongoing growth.
          </li>
          <li>
            <strong>Secure Payment Gateways</strong> – Integration with trusted
            payment providers ensuring safe and smooth checkouts.
          </li>
          <li>
            <strong>Inventory & Order Management</strong> – Real-time tracking
            to streamline operations and improve customer satisfaction.
          </li>
          <li>
            <strong>Shipping & Logistics Integration</strong> – Automated
            shipping calculations and tracking for hassle-free delivery.
          </li>
        </ul>

        {/* Approach */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Our Approach to E-commerce Development:
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Understanding Your Business & Customers</strong> – Tailoring
            features and UX to your market needs.
          </li>
          <li>
            <strong>Designing Responsive & Engaging Stores</strong> – Ensuring
            customers can shop effortlessly on any device.
          </li>
          <li>
            <strong>Developing Robust & Scalable Platforms</strong> – Using
            best-in-class technology stacks to support growth.
          </li>
          <li>
            <strong>Testing & Launching with Precision</strong> – Guaranteeing a
            bug-free, secure, and optimized shopping experience.
          </li>
          <li>
            <strong>Post-Launch Support & Enhancements</strong> – Providing
            ongoing maintenance, upgrades, and marketing integrations.
          </li>
        </ul>

        {/* Why Choose Us */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Why Partner with SRJ Global Technologies for Your E-commerce Website?
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Scalable Solutions</strong> — Grow your product catalog and
            traffic without compromise.
          </li>
          <li>
            <strong>User-Centric Design</strong> — Prioritizing ease of use to
            maximize conversions and repeat sales.
          </li>
          <li>
            <strong>Flexible Technology Options</strong> — From open-source
            WooCommerce to hosted Shopify or custom builds.
          </li>
          <li>
            <strong>Security First</strong> — PCI compliance, SSL encryption,
            and secure payment processing built-in.
          </li>
          <li>
            <strong>End-to-End Support</strong> — From development to marketing
            integrations and analytics tracking.
          </li>
        </ul>

        {/* Closing */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Launch Your Online Store with SRJ Global Technologies
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          A well-designed, high-functioning e-commerce website is your gateway
          to capturing new customers and expanding your market reach. At SRJ
          Global Technologies, we combine technical expertise with creative
          design to build online stores that not only look great but also
          perform flawlessly — delivering a superior shopping experience that
          drives business growth.
        </p>
      </>
    ),
    provided: [
      "Custom e-commerce storefront",
      "Product & category management",
      "Secure payment gateway integration",
      "Order tracking & inventory system",
      "Admin dashboard",
      "Coupon & discount system",
      "User authentication",
      "Wishlist and cart features",
      "Mobile-responsive shopping UI",
      "SEO and performance optimization",
    ],
  },
  {
     id: "App-Development",
    icon: <FaMobileAlt />,
    title: "App Development",
    desc: "We develop seamless, user-friendly mobile apps that elevate customer engagement and usability.",
    image: app,
    brief: (
      <>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          SRJ Global Technologies — Expert Mobile App Development That Powers
          Your Business
        </h2>

        {/* Intro */}
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Welcome to SRJ Global Technologies, a premier web design and mobile
          app development company based in Delhi, dedicated to transforming your
          digital vision into reality. We specialize in delivering customized
          mobile solutions tailored to businesses of every size — from nimble
          startups to industry-leading enterprises.
        </p>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Our experienced team of designers and developers collaborates closely
          with you to understand your unique challenges, goals, and user needs.
          We then craft scalable, high-performance Android and iOS applications
          that drive engagement, streamline operations, and enhance customer
          satisfaction.
        </p>

        {/* Services */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Comprehensive Mobile App Development Services:
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Custom Android App Development</strong> — Building robust,
            feature-rich apps optimized for the Android ecosystem.
          </li>
          <li>
            <strong>iOS App Development</strong> — Designing elegant, intuitive
            applications tailored for Apple devices.
          </li>
          <li>
            <strong>Cross-Platform App Development</strong> — Leveraging
            frameworks like React Native and Flutter for cost-effective,
            versatile solutions.
          </li>
          <li>
            <strong>UI/UX Design for Mobile Apps</strong> — Creating
            user-centric interfaces that maximize usability and retention.
          </li>
          <li>
            <strong>App Strategy & Consultation</strong> — Guiding you from
            concept through launch with market research and technical planning.
          </li>
          <li>
            <strong>App Testing & Deployment</strong> — Ensuring flawless
            performance, security, and compliance across devices and stores.
          </li>
        </ul>

        {/* Why Choose Us */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Why Choose SRJ Global Technologies as Your App Development Partner?
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>End-to-End Solutions</strong> — From initial idea and design
            to development, deployment, and post-launch support.
          </li>
          <li>
            <strong>Agile & Transparent Process</strong> — Regular updates and
            collaboration to keep your project on track and aligned with your
            vision.
          </li>
          <li>
            <strong>Cutting-Edge Technologies</strong> — Utilizing the latest
            tools and frameworks to future-proof your app.
          </li>
          <li>
            <strong>Performance & Scalability</strong> — Apps designed to grow
            seamlessly with your user base and feature set.
          </li>
          <li>
            <strong>Dedicated Support & Maintenance</strong> — Ongoing
            assistance to keep your app updated and competitive.
          </li>
        </ul>

        {/* Closing */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Your Trusted Mobile App Partner Near You
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Whether you are launching your very first mobile app or scaling an
          existing platform, SRJ Global Technologies offers the expertise,
          creativity, and dedication needed to deliver digital solutions that
          exceed expectations. Located in Delhi and serving clients across India
          and beyond, we pride ourselves on building lasting partnerships
          through quality, innovation, and reliability.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          Let’s build your next mobile app together — one that delights users,
          strengthens your brand, and drives business growth.
        </p>
      </>
    ),
    provided: [
      "Android & iOS development",
      "Hybrid app (Flutter/React Native)",
      "UI/UX for mobile screens",
      "REST API integration",
      "Firebase or backend integration",
      "Push notifications",
      "Payment integration",
      "App Store & Play Store deployment",
      "App maintenance and updates",
      "Authentication & OTP login",
    ],
  },

  {
    icon: <FaGamepad />,
    title: "Game Development",
    desc: "We create immersive, high-performance games that captivate players and deliver engaging experiences across platforms.",
    image: gaming,
    brief: (
      <>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome to SRJ Global Technologies — Your Trusted Partner for
          Innovative Game Development Solutions
        </h2>

        {/* Intro */}
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Based in Delhi, we specialize in creating custom games tailored to
          businesses and creators of all sizes, from indie developers to large
          studios. Our skilled team of game designers, developers, and artists
          collaborates closely with you to understand your vision, target
          audience, and platform requirements, delivering immersive gaming
          experiences that captivate and engage.
        </p>

        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          We offer end-to-end game development services across multiple
          platforms, including mobile (Android & iOS), PC, and consoles. From
          concept ideation and detailed game design to development, testing, and
          deployment, we ensure every aspect of your game is crafted for high
          performance, seamless user experience, and scalability.
        </p>

        {/* Expertise */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Our Expertise Includes:
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            2D and 3D Game Development — Creating visually stunning games that
            bring your ideas to life.
          </li>
          <li>
            Cross-Platform Compatibility — Developing games for mobile, PC,
            consoles, and emerging platforms like AR/VR.
          </li>
          <li>
            Multiplayer & Social Features — Integrating online gameplay and
            community engagement tools.
          </li>
          <li>
            Game Mechanics & Storytelling — Designing intuitive controls and
            compelling narratives to engage players.
          </li>
          <li>
            Monetization Strategies — Implementing in-app purchases, ads, and
            subscriptions to maximize revenue.
          </li>
          <li>
            Quality Assurance & Testing — Rigorous testing to deliver bug-free
            and smooth gameplay experiences.
          </li>
          <li>
            Post-Launch Support & Updates — Continuous improvements and feature
            additions to keep your game fresh and popular.
          </li>
        </ul>

        {/* Closing */}
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Whether you’re launching your first game or enhancing an existing
          title, our dedicated engineers and creative professionals are
          committed to delivering quality products that exceed expectations and
          keep players coming back.
        </p>

        <p className="text-gray-600 text-sm leading-relaxed">
          At SRJ Global Technologies, we combine cutting-edge technology with
          creative storytelling to build games that stand out in today’s
          competitive market — providing you with innovative solutions and
          ongoing support to ensure your game’s lasting success.
        </p>
      </>
    ),
    provided: [
      "Android & iOS development",
      "Hybrid app (Flutter/React Native)",
      "UI/UX for mobile screens",
      "REST API integration",
      "Firebase or backend integration",
      "Push notifications",
      "Payment integration",
      "App Store & Play Store deployment",
      "App maintenance and updates",
      "Authentication & OTP login",
    ],
  },

  {
     id: "wordPress-development",
    icon: <FaWordpress />,
    title: "WordPress Development",
    desc: "From themes to plugins, we deliver flexible and dynamic WordPress solutions for every need.",
    image: word,
    brief: (
      <>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          SRJ Global Technologies — Reliable WordPress Development for Every
          Business
        </h2>

        {/* Intro */}
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Whether you’re launching a personal blog, creating a professional
          business website, or building a full-featured e-commerce store, SRJ
          Global Technologies has the expertise to deliver WordPress solutions
          tailored to your needs. Our skilled WordPress developers build
          visually appealing, fast-loading, and SEO-friendly websites that give
          you complete control and flexibility.
        </p>

        {/* Services */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Our WordPress Development Services Include:
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Custom Theme Development</strong> — Unique, brand-aligned
            themes crafted from scratch or customized from existing frameworks.
          </li>
          <li>
            <strong>Plugin Integration & Development</strong> — Enhancing your
            site’s functionality with the right plugins or building custom
            solutions.
          </li>
          <li>
            <strong>WooCommerce Setup & Customization</strong> — Building
            scalable, user-friendly online stores optimized for sales and
            growth.
          </li>
          <li>
            <strong>SEO-Optimized Architecture</strong> — Structuring your
            website for better visibility and higher search rankings.
          </li>
          <li>
            <strong>Site Migration & Maintenance</strong> — Smooth migration to
            WordPress and ongoing updates, backups, and performance tuning.
          </li>
          <li>
            <strong>Security & Hosting Support</strong> — Ensuring your site is
            secure, reliable, and hosted on robust platforms.
          </li>
        </ul>

        {/* Why Choose Us */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Why Choose SRJ Global Technologies for WordPress Development?
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Tailored Solutions</strong> — We build websites that match
            your business goals, not just generic templates.
          </li>
          <li>
            <strong>End-to-End Service</strong> — From development and
            deployment to maintenance and optimization.
          </li>
          <li>
            <strong>Scalable & Flexible</strong> — Websites designed to grow
            with your audience and evolving needs.
          </li>
          <li>
            <strong>Fast & Responsive</strong> — Mobile-first design for
            flawless user experience on all devices.
          </li>
          <li>
            <strong>Dedicated Support</strong> — Reliable assistance to keep
            your WordPress site running smoothly.
          </li>
        </ul>

        {/* Closing */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Take Full Control with WordPress
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          At SRJ Global Technologies, we empower you with WordPress websites
          that are easy to manage and built to perform. Whether you want a
          simple blog or a complex e-commerce platform, our team ensures your
          site is secure, scalable, and perfectly aligned with your brand’s
          vision.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          Partner with us to harness the power of WordPress and accelerate your
          online success.
        </p>
      </>
    ),
    provided: [
      "Theme customization",
      "Plugin installation & setup",
      "WooCommerce integration",
      "Blog & portfolio setup",
      "Page builder support (Elementor, WPBakery)",
      "Contact forms",
      "Security optimization",
      "Performance tuning",
      "Backup & migration",
      "SEO plugin setup",
    ],
  },
  {
     id: "Digital-Marketing",
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    desc: "Data-driven digital marketing strategies to grow your brand and generate quality leads.",
    image: digi,
    brief: (
      <>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          SRJ Global Technologies — Strategic Digital Marketing Tailored to Your
          Business Goals
        </h2>

        {/* Intro */}
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          In today’s digital landscape, having a strong online presence is
          essential to stand out and grow. At SRJ Global Technologies, we design
          goal-oriented digital marketing strategies that amplify your brand’s
          reach, attract high-quality leads, and maximize your return on
          investment.
        </p>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Our expert team combines creative content, eye-catching design,
          data-driven analytics, and automation tools to deliver campaigns that
          perform across all digital channels. From Google Ads to social media
          marketing, we ensure your brand connects with the right audience at
          the right time.
        </p>

        {/* Services */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Our Digital Marketing Services Include:
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Search Engine Marketing (SEM)</strong> – Targeted Google Ads
            campaigns that drive instant traffic and conversions.
          </li>
          <li>
            <strong>Search Engine Optimization (SEO)</strong> – On-page and
            off-page strategies to improve your organic search rankings.
          </li>
          <li>
            <strong>Social Media Marketing</strong> – Engaging content and paid
            promotions across platforms like Facebook, Instagram, LinkedIn, and
            Twitter.
          </li>
          <li>
            <strong>Content Marketing</strong> – Compelling blogs, videos, and
            graphics designed to educate and engage your audience.
          </li>
          <li>
            <strong>Email Marketing & Automation</strong> – Personalized
            campaigns that nurture leads and build customer loyalty.
          </li>
          <li>
            <strong>Analytics & Reporting</strong> – Insightful performance
            tracking to optimize campaigns and maximize ROI.
          </li>
        </ul>

        {/* Why Choose Us */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Why Choose SRJ Global Technologies for Digital Marketing?
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Customized Campaigns</strong> — Strategies tailored to your
            unique business objectives and target audience.
          </li>
          <li>
            <strong>Integrated Approach</strong> — Combining multiple digital
            channels for cohesive and effective marketing.
          </li>
          <li>
            <strong>Data-Driven Decisions</strong> — Continuous analysis to
            refine campaigns and improve results.
          </li>
          <li>
            <strong>Creative Excellence</strong> — Content and design that
            captivate and convert.
          </li>
          <li>
            <strong>Transparent Reporting</strong> — Clear, actionable insights
            delivered regularly.
          </li>
        </ul>

        {/* Closing */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Boost Your Brand Visibility & Grow Your Business
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          At SRJ Global Technologies, we don’t just run campaigns — we build
          partnerships focused on your long-term digital success. Whether you’re
          a startup looking to gain traction or an established business aiming
          to scale, our digital marketing solutions are designed to deliver
          measurable growth and lasting impact.
        </p>
      </>
    ),
    provided: [
      "Social media marketing",
      "Email marketing campaigns",
      "Influencer collaborations",
      "Facebook & Instagram ads",
      "Lead generation strategies",
      "Campaign analytics",
      "Ad creative design",
      "Audience targeting",
      "Funnel optimization",
      "Online reputation management",
    ],
  },
  {
    id: "Search-Engine-Optimization",
    icon: <FaSearch />,
    title: "Search Engine Optimization",
    desc: "Increase your visibility, improve rankings, and drive organic traffic with proven SEO techniques.",
    image: search,
    brief: (
      <>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          SRJ Global Technologies — Results-Driven SEO Solutions to Grow Your
          Business
        </h2>

        {/* Intro */}
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          In the digital era, strong search engine visibility is key to
          attracting targeted traffic and generating qualified leads. At SRJ
          Global Technologies, we specialize in delivering sustainable, ethical
          SEO strategies that improve your rankings and ensure long-term online
          success.
        </p>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Our expert SEO team employs a comprehensive approach combining
          in-depth keyword research, technical audits, on-page and off-page
          optimization, and content strategy to keep your website competitive in
          search engines like Google and Bing.
        </p>

        {/* Services */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Our SEO Services Include:
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Keyword Research & Analysis</strong> — Identifying
            high-impact keywords tailored to your industry and audience.
          </li>
          <li>
            <strong>On-Page SEO Optimization</strong> — Optimizing meta tags,
            headers, content, and internal linking for better relevance and
            crawlability.
          </li>
          <li>
            <strong>Technical SEO Audits</strong> — Detecting and fixing site
            speed, mobile-friendliness, crawl errors, and other technical
            issues.
          </li>
          <li>
            <strong>Content Planning & Development</strong> — Creating
            SEO-friendly content that drives engagement and authority.
          </li>
          <li>
            <strong>Authority Building & Link Acquisition</strong> — Ethical
            link-building strategies to boost your site’s trust and ranking
            power.
          </li>
          <li>
            <strong>Performance Tracking & Reporting</strong> — Transparent
            analytics to measure progress and refine SEO tactics.
          </li>
        </ul>

        {/* Why Choose Us */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Why Choose SRJ Global Technologies for SEO?
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Ethical & White-Hat Strategies</strong> — Sustainable SEO
            that protects your site’s reputation.
          </li>
          <li>
            <strong>Customized SEO Plans</strong> — Tailored solutions based on
            your unique business goals and market.
          </li>
          <li>
            <strong>Experienced SEO Professionals</strong> — Skilled team
            staying ahead of ever-evolving search engine algorithms.
          </li>
          <li>
            <strong>Focus on Long-Term Growth</strong> — Strategies designed to
            generate lasting organic traffic and leads.
          </li>
          <li>
            <strong>Clear & Regular Reporting</strong> — Actionable insights
            delivered with complete transparency.
          </li>
        </ul>

        {/* Closing */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Boost Your Online Presence with SRJ Global Technologies
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Let SRJ Global Technologies help you navigate the complexities of SEO
          with proven strategies that grow your business organically. Our
          dedicated team works relentlessly to improve your search rankings,
          increase your visibility, and drive qualified traffic — turning
          visitors into loyal customers.
        </p>
      </>
    ),
    provided: [
      "On-page SEO",
      "Keyword research & mapping",
      "Meta tag optimization",
      "Technical SEO audit",
      "Sitemap and robots.txt setup",
      "Google Search Console integration",
      "Speed & mobile optimization",
      "Backlink building",
      "Content strategy for SEO",
      "Local SEO for businesses",
    ],
  },
  {
    id: "PPC-Advertising",
    icon: <FaGoogle />,
    title: "PPC Advertising",
    desc: "Maximize your ROI with highly-targeted Pay-Per-Click campaigns managed by certified experts.",
    image: ppca,
    brief: (
      <>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Strategic PPC Campaigns That Deliver Real Results
        </h2>

        {/* Intro */}
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          At SRJ Global Technologies, we understand that Pay-Per-Click (PPC)
          advertising is a powerful tool to drive immediate, targeted traffic
          and generate quality leads for your business. Our PPC experts design
          and manage comprehensive campaigns tailored to your unique goals,
          ensuring every advertising dollar is invested wisely for maximum
          return.
        </p>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          We specialize in managing campaigns across major platforms such as
          Google Ads, Bing Ads, Facebook Ads, Instagram, LinkedIn, and more —
          leveraging each platform’s unique strengths to reach your ideal
          audience effectively. Whether you’re looking to boost brand awareness,
          increase website traffic, or drive sales, our data-driven approach
          ensures your campaigns are optimized for peak performance.
        </p>

        {/* Process */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Our process includes:
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>In-depth Keyword Research & Competitive Analysis</strong> —
            Identifying high-intent keywords to attract the right audience.
          </li>
          <li>
            <strong>Compelling Ad Copywriting & Creative Design</strong> —
            Crafting engaging ads that capture attention and encourage clicks.
          </li>
          <li>
            <strong>Targeted Audience Segmentation</strong> — Reaching specific
            demographics, locations, and interests to maximize relevance.
          </li>
          <li>
            <strong>Continuous Monitoring & Optimization</strong> — A/B testing
            and bid adjustments to improve ROI and reduce costs.
          </li>
          <li>
            <strong>Multi-Platform Campaign Management</strong> — Utilizing
            Google, Bing, Facebook, Instagram, LinkedIn, and more for broader
            reach.
          </li>
          <li>
            <strong>Transparent Reporting & Analytics</strong> — Providing
            detailed insights and performance reports to keep you informed.
          </li>
        </ul>

        {/* Closing */}
        <p className="text-gray-600 text-sm leading-relaxed">
          With SRJ Global Technologies as your PPC partner, you gain a trusted
          team dedicated to driving business growth, increasing online
          visibility, and turning prospects into loyal customers through
          expertly managed, cost-effective advertising campaigns.
        </p>
      </>
    ),
    provided: [
      "Google Ads (Search, Display)",
      "Bing & YouTube Ads",
      "Campaign setup & management",
      "Keyword bidding strategy",
      "Ad copywriting",
      "Landing page optimization",
      "Conversion tracking",
      "A/B testing",
      "Audience targeting",
      "Performance reports",
    ],
  },
  {
    id: "Content-Writing",
    icon: <FaPenFancy />,
    title: "Content Writing",
    desc: "Engaging, SEO-optimized content that attracts readers and ranks higher on search engines.",
    image: content,
    brief: (
      <>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          SEO-Driven & Engaging Content Writing
        </h2>

        {/* Intro */}
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          At SRJ Global Technologies, we believe that powerful content is the
          foundation of any successful digital strategy. Our expert writers
          craft tailored content that authentically reflects your brand’s voice
          and deeply resonates with your target audience.
        </p>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Whether you need compelling blog posts, persuasive web pages,
          captivating social media content, or SEO-optimized articles, we
          deliver content designed to help your brand stand out in a crowded
          market. We follow a thorough research process and adhere strictly to
          SEO best practices to ensure your content attracts the right visitors
          and drives meaningful conversions.
        </p>

        {/* Services */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Our content writing services include:
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>In-depth Research & Audience Analysis</strong> —
            Understanding your industry, competitors, and customers to tailor
            content accordingly.
          </li>
          <li>
            <strong>SEO Optimization</strong> — Incorporating relevant keywords
            naturally to improve search engine rankings without compromising
            readability.
          </li>
          <li>
            <strong>Engaging & Clear Writing</strong> — Creating content that
            educates, entertains, and motivates your audience to take action.
          </li>
          <li>
            <strong>Plagiarism-Free & Original Content</strong> — Every piece is
            uniquely crafted to represent your brand with authenticity and
            integrity.
          </li>
          <li>
            <strong>Content Strategy & Planning</strong> — Developing editorial
            calendars and topic ideas aligned with your marketing goals.
          </li>
          <li>
            <strong>Multichannel Content Creation</strong> — Blogs, website
            copy, newsletters, social media posts, product descriptions, and
            more.
          </li>
        </ul>

        {/* Closing */}
        <p className="text-gray-600 text-sm leading-relaxed">
          Count on SRJ Global Technologies for high-quality, targeted content
          that delivers real value, boosts your online presence, and strengthens
          your connection with customers.
        </p>
      </>
    ),
    provided: [
      "Website content",
      "Blog posts and articles",
      "SEO-friendly writing",
      "Product descriptions",
      "Social media captions",
      "Press releases",
      "Email newsletters",
      "Technical writing",
      "Proofreading & editing",
      "Multilingual content (on request)",
    ],
  },
  {
    id: "Web-Hosting",
    icon: <FaServer />,
    title: "Web Hosting",
    desc: "Fast, secure hosting with 99.9% uptime and dedicated support to keep your site running smoothly.",
    image: webhosting,
    brief: (
      <>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Reliable Web Hosting Solutions for Every Website
        </h2>

        {/* Intro */}
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          At SRJ Global Technologies, we provide high-speed, secure, and
          cost-effective web hosting tailored to meet the needs of individuals,
          startups, and enterprises. Whether you’re launching a new website or
          require a robust cloud infrastructure to support your growing
          business, our hosting plans are designed to deliver exceptional
          performance and reliability.
        </p>

        {/* Features */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Our Hosting Features Include:
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Blazing Fast SSD Storage</strong> — Ensuring your website
            loads quickly and handles traffic efficiently.
          </li>
          <li>
            <strong>Free SSL Certificates</strong> — Keeping your site secure
            and building trust with your visitors.
          </li>
          <li>
            <strong>Automatic Daily Backups</strong> — Protecting your data with
            regular, reliable backups.
          </li>
          <li>
            <strong>99.9% Uptime Guarantee</strong> — Maximizing your website’s
            availability and minimizing downtime.
          </li>
          <li>
            <strong>Scalable Resources</strong> — Easily upgrade your plan as
            your website and traffic grow.
          </li>
          <li>
            <strong>24/7 Expert Technical Support</strong> — Our team is always
            available to help you resolve any issues quickly.
          </li>
        </ul>

        {/* Why Choose Us */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Why Choose SRJ Global Technologies for Web Hosting?
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            Affordable Plans — High-quality hosting solutions without breaking
            your budget.
          </li>
          <li>
            Secure Infrastructure — State-of-the-art security measures to
            safeguard your website and data.
          </li>
          <li>
            User-Friendly Control Panel — Manage your hosting environment with
            ease.
          </li>
          <li>
            Optimized for Performance — Hosting environments tailored for
            popular CMS and e-commerce platforms.
          </li>
          <li>
            Reliable & Transparent Service — No hidden fees or surprises, just
            dependable hosting you can trust.
          </li>
        </ul>

        {/* Closing */}
        <p className="text-gray-600 text-sm leading-relaxed">
          Experience hassle-free hosting that supports your website’s success
          with SRJ Global Technologies. From startups to established
          enterprises, our scalable hosting solutions give you the speed,
          security, and support you need to thrive online.
        </p>
      </>
    ),
    provided: [
      "Shared & VPS hosting plans",
      "cPanel/WHM setup",
      "Domain pointing",
      "SSL certificate installation",
      "Daily backups",
      "Server uptime monitoring",
      "Firewall & security hardening",
      "FTP & database access",
      "Email account setup",
      "Hosting support",
    ],
  },
  {
    icon: <BsPhoneVibrate />,
    title: "Bulk SMS",
    desc: "Reach thousands instantly with our reliable and cost-effective bulk SMS service.",
    image: bulk,
    brief: (
      <>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Bulk SMS Solutions Near You — Fast, Reliable, and Scalable
        </h2>

        {/* Intro */}
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          SRJ Global Technologies offers comprehensive Bulk SMS services
          designed to enhance your customer communication and engagement.
          Whether you’re promoting a new product, sending time-sensitive alerts,
          or delivering transactional messages, our robust SMS gateway
          guarantees fast, secure, and scalable message delivery tailored to
          your business needs.
        </p>

        {/* Services */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Our Bulk SMS Services Include:
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Promotional SMS</strong> — Reach a wide audience with
            targeted marketing campaigns that boost sales and brand awareness.
          </li>
          <li>
            <strong>Transactional SMS</strong> — Deliver critical notifications
            such as OTPs, alerts, reminders, and order confirmations with
            guaranteed high deliverability.
          </li>
          <li>
            <strong>Smart Campaign Management</strong> — Strategically designed
            messaging plans to maximize impact and customer response.
          </li>
          <li>
            <strong>Real-Time Delivery & Reporting</strong> — Track your message
            status and campaign performance instantly for transparent insights.
          </li>
          <li>
            <strong>Secure API Integration</strong> — Seamlessly connect our SMS
            platform with your existing systems and applications.
          </li>
          <li>
            <strong>24/7 Expert Support</strong> — Dedicated assistance to help
            you set up, manage, and optimize your SMS campaigns.
          </li>
        </ul>

        {/* Why Choose Us */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Why Choose SRJ Global Technologies for Bulk SMS?
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            High-Speed, Reliable Delivery — Ensuring your messages reach
            customers promptly without delays.
          </li>
          <li>
            Scalable Solutions — From small businesses to large enterprises, our
            platform grows with your needs.
          </li>
          <li>
            Affordable Pricing Plans — Cost-effective SMS solutions to fit every
            budget.
          </li>
          <li>
            Industry Compliance & Security — Adhering to regulatory standards to
            protect your brand reputation.
          </li>
          <li>
            User-Friendly Dashboard — Easy management of contacts, messages, and
            campaign analytics.
          </li>
        </ul>

        {/* Closing */}
        <p className="text-gray-600 text-sm leading-relaxed">
          Stay connected with your customers instantly and effectively with SRJ
          Global Technologies’ Bulk SMS services — your trusted partner for
          seamless communication.
        </p>
      </>
    ),
    provided: [
      "Promotional & transactional SMS",
      "DND & non-DND delivery",
      "Real-time delivery reports",
      "SMS scheduling",
      "API integration",
      "Custom sender ID",
      "Targeted campaign tools",
      "Unicode/Multilingual support",
      "Contact group management",
      "Quick template creation",
    ],
  },
  {
    icon: <FaWhatsapp />,
    title: "Whatsapp Advertising Software",
    desc: "Automate your WhatsApp marketing with our smart software to boost conversions and outreach.",
    image: whatsapp,
    brief: (
      <>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Supercharge Customer Engagement with WhatsApp Advertising
        </h2>

        {/* Intro */}
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          At SRJ Global Technologies, we empower your business to connect with
          thousands of customers instantly through our advanced WhatsApp
          advertising platform. Leverage the world’s most popular messaging app
          to automate personalized campaigns, boost engagement, and drive
          meaningful conversions — all managed effortlessly from a single,
          intuitive dashboard.
        </p>

        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Whether you’re a small business or a large enterprise, our WhatsApp
          advertising tool helps you build lasting trust and foster customer
          loyalty by delivering timely, relevant messages right where your
          audience is most active.
        </p>

        {/* Features */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Key Features of Our WhatsApp Advertising Solution:
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            <strong>Automated Messaging Campaigns</strong> — Schedule and send
            bulk messages without manual effort.
          </li>
          <li>
            <strong>Personalization at Scale</strong> — Customize messages to
            resonate with each segment of your audience.
          </li>
          <li>
            <strong>Rich Media Support</strong> — Share images, PDFs, links, and
            videos to create engaging communications.
          </li>
          <li>
            <strong>Contact Management</strong> — Organize and segment your
            contacts for targeted outreach.
          </li>
          <li>
            <strong>Real-Time Tracking & Analytics</strong> — Monitor delivery,
            read rates, and engagement to optimize your campaigns.
          </li>
          <li>
            <strong>Compliance & Security</strong> — Fully compliant with
            WhatsApp policies and data protection regulations.
          </li>
        </ul>

        {/* Why Choose Us */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Why Choose SRJ Global Technologies for WhatsApp Advertising?
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            User-Friendly Dashboard — Manage all your campaigns conveniently
            from your desktop or laptop.
          </li>
          <li>
            Scalable for Any Business Size — Whether you’re reaching hundreds or
            thousands, our platform grows with you.
          </li>
          <li>
            Cost-Effective Engagement — Reach customers directly and personally,
            cutting through the noise of other marketing channels.
          </li>
          <li>
            Dedicated Support — Our team is ready to help you set up, manage,
            and optimize your WhatsApp marketing.
          </li>
        </ul>

        {/* Closing */}
        <p className="text-gray-600 text-sm leading-relaxed">
          Harness the power of WhatsApp advertising with SRJ Global Technologies
          and transform your customer communication into a direct, engaging, and
          highly effective experience.
        </p>
      </>
    ),
    provided: [
      "Bulk WhatsApp message sending",
      "Multimedia (image, video, doc) support",
      "Custom message templates",
      "Group & contact management",
      "API-based integration",
      "Message scheduling",
      "Delivery & read status tracking",
      "Personalized name-based messages",
      "Auto-reply and chatbot integration",
      "Anti-block technology (within limits)",
    ],
  },
  {
     id: "Domain-Registration",
    icon: <FaGlobe />,
    title: "Domain Registration",
    desc: "Secure the perfect domain for your business with hassle-free domain registration services.",
    image: domain,
    brief: (
      <>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Domain Registration Made Easy with SRJ Global Technologies
        </h2>

        {/* Intro */}
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Finding the perfect domain name is the first step to establishing your
          online identity. At SRJ Global Technologies, we simplify the process
          of searching, registering, and managing your domain so you can focus
          on growing your business.
        </p>

        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Choose from a wide variety of domain extensions, including popular
          options like .com, .in, .net, and many more tailored to your industry
          or region. Our user-friendly platform ensures a seamless registration
          experience, whether you’re launching your first website or expanding
          your digital portfolio.
        </p>

        {/* Services */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Our Domain Services Include:
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            Wide Range of Domain Extensions — Pick the best fit for your brand’s
            global or local presence.
          </li>
          <li>
            Easy Domain Search & Registration — Quick availability checks and
            instant registration.
          </li>
          <li>
            Domain Renewal Alerts — Never miss an expiration date with timely
            reminders.
          </li>
          <li>
            Domain Forwarding & DNS Management — Direct your domain to the right
            web or email services effortlessly.
          </li>
          <li>
            Domain Privacy & Security — Protect your personal information and
            safeguard your domain from unauthorized transfers.
          </li>
          <li>
            Expert Support — Our team is always ready to assist you with any
            domain-related queries.
          </li>
        </ul>

        {/* Why Choose Us */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Why Register Your Domain with SRJ Global Technologies?
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 text-sm space-y-1">
          <li>
            Reliable & Secure Service — Trusted by businesses across India and
            beyond.
          </li>
          <li>Affordable Pricing — Competitive rates without hidden fees.</li>
          <li>
            Simple Management Dashboard — Handle all your domains easily from
            one place.
          </li>
          <li>
            Flexible Options — Perfect for startups, personal brands, and
            enterprises alike.
          </li>
        </ul>

        {/* Closing */}
        <p className="text-gray-600 text-sm leading-relaxed">
          Secure your domain today with SRJ Global Technologies — your trusted
          partner for building a strong, credible digital presence from the
          ground up.
        </p>
      </>
    ),
    provided: [
      "Domain name search & suggestions",
      "Top-level domains (.com, .in, .org, etc.)",
      "WHOIS privacy protection",
      "DNS management",
      "Domain forwarding",
      "Renewal reminders",
      "Domain locking/unlocking",
      "Subdomain setup",
      "Free basic email with domain",
      "Bulk domain purchase support",
    ],
  },
];
 useEffect(() => {
    if (id) {
      const index = services.findIndex((s) => s.id === id);
      if (index !== -1) {
        setSelected(index);
      }
    }
  }, [id]);
  return (
    <section className="relative mt-[100px] min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-[#0d0d0d] dark:via-[#111] dark:to-[#1a1a1a] text-black dark:text-white pt-32 px-4 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-sky-400/30 rounded-full blur-[150px] animate-pulse-slow z-0" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[130px] animate-pulse-slow z-0" />

      {/* Heading */}
      <div className="text-center relative z-10 mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-sky-600 dark:text-white tracking-wide mb-2">
          Our Services
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto">
          Explore our wide range of offerings tailored to modern businesses.
        </p>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        {/* Left – Service List */}
        <div className="w-full md:w-1/3 max-h-[100vh] overflow-y-auto px-4 custom-scrollbar" >
          {services.map((service, index) => (
            <div
              key={index}
              
              onClick={() => {
                navigate(`/services/${service.id}`);
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
        <div className="relative w-full mb-5 md:w-2/3 p-1 rounded-3xl bg-white/70 dark:bg-[#0f172a]/50 shadow-xl backdrop-blur-xl border border-gray-200 dark:border-gray-700 transition-all duration-700">
          {/* Inner Container */}
          <div className="relative w-full h-full rounded-[22px] bg-white/90 dark:bg-[#0f172a]/70 p-10 overflow-hidden shadow-lg">
            {/* Content */}
            {selected === null ? (
              <div className="relative z-10 text-center mt-20">
                <h2 className="text-2xl font-bold text-gray-700 dark:text-white mb-5">
                  Select a Service to Learn More
                </h2>
                <div className="w-32 h-32 bg-sky-100 dark:bg-sky-900 rounded-full blur-xl mx-auto" />
              </div>
            ) : (
              <div className="relative z-10 w-full max-w-2xl mx-auto animate-fade-in">
                {/* Title */}
                <h2 className=" text-3xl sm:text-4xl font-bold text-sky-600 dark:text-sky-400 mb-6 text-center tracking-wide drop-shadow-sm">
                  {services[selected].title}
                </h2>

                {/* Toggle Buttons */}
                <div className="flex justify-center items-center mb-6 bg-sky-100 dark:bg-[#1e293b] rounded-full overflow-hidden border border-sky-500 w-fit mx-auto shadow">
                  <button
                    onClick={() => setViewMode("brief")}
                    className={`px-6 py-2 text-sm sm:text-base transition font-medium focus:outline-none ${
                      viewMode === "brief"
                        ? "bg-sky-600 text-white shadow"
                        : "text-sky-600 hover:bg-sky-200 dark:hover:bg-[#334155]"
                    }`}
                  >
                    Brief
                  </button>
                  <button
                    onClick={() => setViewMode("services")}
                    className={`px-5 sm:px-6 py-2 text-sm sm:text-base transition font-medium focus:outline-none ${
                      viewMode === "services"
                        ? "bg-sky-600 text-white shadow"
                        : "text-sky-600 hover:bg-sky-200 dark:hover:bg-[#334155]"
                    }`}
                  >
                    Services Provided
                  </button>
                </div>

                {/* content */}
                <div className="text-gray-700 dark:text-gray-300 text-lg min-h-[120px] transition-all duration-500 ease-in-out">
                  <div className="flex-col md:flex-row gap-6 items-center md:items-start justify-center">
                    {/* Right: Image */}
                    {services[selected].image && (
                      <div className="w-full mb-[20px] flex justify-center md:justify-end">
                        <img
                          src={services[selected].image}
                          alt={services[selected].title}
                          className="rounded-2xl w-[100%] h-48 object-cover shadow-lg"
                        />
                      </div>
                    )}

                    {/* Left: Text Content */}
                    <div className="w-full max-h-60 overflow-y-auto sm:pr-2 scrollbar-thin scrollbar-thumb-sky-400 scrollbar-track-transparent">
                      {viewMode === "brief" ? (
                        <div className="animate-fade-in transition-opacity duration-500 leading-relaxed text-center md:text-left whitespace-pre-line">
                          {services[selected].brief}
                        </div>
                      ) : (
                        <ul className="list-disc text-left list-inside space-y-2 animate-fade-in transition-opacity duration-500 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-sky-400 scrollbar-track-transparent">
                          {services[selected].provided.map((item, idx) => (
                            <li
                              key={idx}
                              className="tracking-wide text-base sm:text-lg capitalize "
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                {/* Back Button */}
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={() => setSelected(null)}
                    className="mt-4 px-6 py-2 bg-white dark:bg-[#0f172a] border border-sky-500 text-sky-600 font-medium rounded-full hover:bg-sky-100 dark:hover:bg-[#1e293b] transition shadow hover:shadow-sky-300/30"
                  >
                    ← Back to All Services
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

export default Services;
