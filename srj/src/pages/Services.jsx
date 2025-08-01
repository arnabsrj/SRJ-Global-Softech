import React, { useState } from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
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

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Website Designing",
    desc: "We create stunning, responsive websites that reflect your brand’s personality and engage your visitors effectively.",
    image: webDesignImg,
    brief: (
      <>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Crafting Engaging Website Experiences
        </h2>
        <p className="text-gray-600 text-sm">
          At SRJ Global Softech, we specialize in building responsive, elegant,
          and SEO-friendly websites tailored to your business goals. Whether you
          need a business portfolio, an e-commerce platform, or a landing page —
          we design with purpose. Our team combines sleek UI/UX design with
          robust front-end development using the latest tech stacks. Our mission
          is to turn every visitor into a customer. Get scalable, secure, and
          modern websites that adapt seamlessly across all screen sizes and
          devices.
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
    icon: <FaPaintBrush />,
    title: "Graphic Designing",
    desc: "Our creative designs turn ideas into impactful visuals that speak directly to your target audience.",
    image: graphic,
    brief: (
      <>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Make Your Brand Visually Stand Out
        </h2>
        <p className="text-gray-600 text-sm">
          At SRJ Global Softech, we offer professional graphic design services
          tailored to your business goals. Our creative team crafts logos,
          flyers, social media graphics, business cards, brochures, and more —
          all with a focus on visual appeal, message clarity, and brand
          consistency. Whether for digital or print media, we deliver stunning
          designs that captivate your audience. Let us bring your ideas to life
          with designs that communicate and convert.
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
    icon: <FaPenNib />,
    title: "Logo Designing",
    desc: "Make a lasting impression with a unique and professional logo that defines your identity.",
    image: logo,
    brief: (
      <>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Crafting Logos that Define Your Brand
        </h2>
        <p className="text-gray-600 text-sm">
          At SRJ Global Softech, we specialize in designing logos that tell your
          brand’s story. We create custom logos for startups, businesses, and
          enterprises across diverse industries. Whether you need a minimal
          icon, an illustrative mark, or a complete corporate identity, our
          designers collaborate closely with you to deliver a timeless logo that
          resonates with your audience. Begin your branding journey with us —
          and make a lasting first impression through powerful design.
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
    icon: <FaCode />,
    title: "Custom Website Design",
    desc: "We craft custom-built websites tailored to your brand goals and target market.",
    image: cdesign,
    brief: (
      <>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Tailored Websites Built to Impress
        </h2>
        <p className="text-gray-600 text-sm">
          SRJ Global Softech specializes in creating modern, responsive websites
          that align seamlessly with your business goals. From portfolio sites
          to complex service pages, we handle it all. Our team focuses on clean
          UI/UX design, fast loading speeds, SEO optimization, and mobile-first
          responsiveness to ensure your customers enjoy a seamless browsing
          experience. Whether you're launching a startup, refreshing your brand,
          or building an e-commerce platform — we have the tools and talent to
          bring your vision to life online.
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
    icon: <FaCogs />,
    title: "Web Development",
    desc: "Robust, scalable websites built with the latest technologies to ensure speed, security, and functionality.",
    image: develop,
    brief: (
      <>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Build a Website that Converts
        </h2>
        <p className="text-gray-600 text-sm">
          At SRJ Global Softech, we specialize in creating stunning, responsive,
          and lightning-fast websites that deliver real business results.
          Whether you need a personal blog or a complex enterprise site, we've
          got you covered. We leverage the latest web technologies — including
          React.js, Tailwind CSS, and modern backend stacks — to build scalable,
          secure, and SEO-optimized websites from day one. Your digital presence
          starts with a strong, well-crafted site — and we’re here to help you
          make a powerful first impression online.
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
    icon: <FaShoppingCart />,
    title: "E-Commerce Development",
    desc: "Launch high-converting online stores with custom features, payment gateways, and a smooth checkout experience.",
    image: ecom,
    brief: (
      <>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Build & Grow Your Online Store
        </h2>
        <p className="text-gray-600 text-sm">
          At SRJ Global Softech, we design high-performing e-commerce websites
          that deliver seamless shopping experiences. Whether you're selling 10
          products or 10,000, we build scalable, user-friendly platforms
          tailored to your needs. From secure payment gateways and inventory
          management to order tracking and shipping integrations — your store is
          fully covered. We offer solutions built with WooCommerce, Shopify, or
          completely custom development to match your unique requirements and
          budget.
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
    icon: <FaMobileAlt />,
    title: "App Development",
    desc: "We develop seamless, user-friendly mobile apps that elevate customer engagement and usability.",
    image: app,
    brief: (
      <>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          App website near me
        </h2>
        <p className="text-gray-600 text-sm">
          Welcome to SRJ Global Softech — a leading web design and mobile app
          development company based in Delhi. We specialize in delivering custom
          digital solutions for businesses of all sizes, from startups to large
          enterprises. Our expert team of designers and developers works closely
          with clients to understand their unique requirements and craft
          tailored solutions that drive results. As a trusted mobile app
          development partner, we provide robust and flexible Android and iOS
          application development services. From strategy and UI/UX design to
          development and deployment, we offer end-to-end app solutions that
          ensure high performance, scalability, and user satisfaction. Whether
          you're launching your first app or scaling an existing one, our
          experienced engineers are committed to delivering quality that brings
          clients back to us — time and again.
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
    icon: <FaWordpress />,
    title: "WordPress Development",
    desc: "From themes to plugins, we deliver flexible and dynamic WordPress solutions for every need.",
    image: word,
    brief: (
      <>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Reliable WordPress Experts for All Business Types
        </h2>
        <p className="text-gray-600 text-sm">
          Whether you're starting a blog, launching a business site, or building
          an e-commerce store, our WordPress developers deliver visually
          appealing, high-performance websites. We provide custom theme
          development, plugin integration, WooCommerce setup, and SEO-optimized
          architecture — giving you full control over your site. From hosting
          and backups to scalability and security, we handle every technical
          detail so you can focus on growing your business.
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
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    desc: "Data-driven digital marketing strategies to grow your brand and generate quality leads.",
    image: digi,
    brief: (
      <>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Strategic Digital Marketing for Every Business
        </h2>
        <p className="text-gray-600 text-sm">
          At SRJ Global Softech, we craft goal-driven digital marketing
          strategies to strengthen your online presence, generate quality leads,
          and maximize ROI. From Google Ads to social media marketing, we cover
          it all. Our expert marketers blend content, design, data analytics,
          and automation to ensure your brand stands out across every digital
          platform. Whether you're a startup or a growing business, our
          tailor-made campaigns are built to boost visibility, drive traffic,
          and turn visitors into loyal customers.
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
    icon: <FaSearch />,
    title: "Search Engine Optimization",
    desc: "Increase your visibility, improve rankings, and drive organic traffic with proven SEO techniques.",
    image: search,
    brief: (
      <>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          SEO Solutions to Grow Your Business
        </h2>
        <p className="text-gray-600 text-sm">
          At SRJ Global Softech, we deliver results-driven SEO solutions for
          businesses of all sizes. Our team improves your search engine rankings
          using modern, ethical strategies that generate lasting results. We
          conduct in-depth keyword research, on-page optimization, technical SEO
          audits, content planning, and authority building to keep your website
          competitive. Let us help you boost visibility, drive targeted traffic,
          and generate qualified leads through sustainable, scalable SEO
          campaigns.
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
    icon: <FaGoogle />,
    title: "PPC Advertising",
    desc: "Maximize your ROI with highly-targeted Pay-Per-Click campaigns managed by certified experts.",
    image: ppca,
    brief: (
      <>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Drive Targeted Traffic with Strategic PPC Campaigns
        </h2>
        <p className="text-gray-600 text-sm">
          At SRJ Global Softech, we help you reach the right audience at the
          right time through expertly managed Pay-Per-Click (PPC) campaigns.
          From Google Ads to social media platforms, we craft data-driven
          strategies that maximize ROI, boost conversions, and make every ad
          dollar count. Let us increase your visibility and drive business
          growth with highly targeted and cost-effective PPC advertising.
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
    icon: <FaPenFancy />,
    title: "Content Writing",
    desc: "Engaging, SEO-optimized content that attracts readers and ranks higher on search engines.",
    image: content,
    brief: (
      <>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          SEO-Driven & Engaging Content Writing
        </h2>
        <p className="text-gray-600 text-sm">
          At SRJ Global Softech, we craft tailored content that reflects your
          brand’s voice and resonates with your audience. Whether it’s blog
          posts, web pages, social media content, or SEO articles — our writers
          help your brand stand out. We follow a thorough research process and
          adhere to SEO best practices to ensure your content not only attracts
          visitors but also drives conversions. Every word is carefully curated
          to align with your business goals. Count on us for plagiarism-free,
          engaging, and targeted content that delivers real value and improves
          your search engine rankings.
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
    icon: <FaServer />,
    title: "Web Hosting",
    desc: "Fast, secure hosting with 99.9% uptime and dedicated support to keep your site running smoothly.",
    image: webhosting,
    brief: (
      <>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Reliable Hosting for Every Website
        </h2>
        <p className="text-gray-600 text-sm">
          At SRJ Global Softech, we offer high-speed, secure, and
          budget-friendly web hosting solutions tailored for individuals,
          startups, and enterprises alike. Whether you're launching a website or
          need robust cloud infrastructure, our hosting plans come packed with
          powerful features — including SSD storage, free SSL certificates, and
          automatic backups. Enjoy 99.9% uptime, lightning-fast load times, and
          scalable resources — all backed by 24/7 expert technical support.
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
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Bulk SMS Solutions Near You
        </h2>
        <p className="text-gray-600 text-sm">
          SRJ Global Softech offers fast, reliable Bulk SMS services to enhance
          your customer communication. Whether you're promoting a product or
          sending critical updates, our robust SMS gateway ensures high-speed
          delivery at scale. We cater to businesses across all industries with
          smart campaign strategies and real-time message delivery. From OTPs
          and alerts to promotional offers, stay connected with your audience
          instantly. Choose between Promotional and Transactional SMS services —
          both powered by secure APIs and high deliverability. Our platform is
          scalable, affordable, and supported by 24/7 expert technical
          assistance.
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
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Supercharge Customer Engagement
        </h2>
        <p className="text-gray-600 text-sm">
          Our WhatsApp advertising tool empowers you to connect with thousands
          of customers in just one click. Automate messaging, personalize
          campaigns, and track engagement — all from a single, easy-to-use
          dashboard. Whether you're a small business or a large enterprise, our
          software helps you build trust and drive conversions through WhatsApp
          — the world’s most popular messaging platform. Schedule campaigns,
          manage contacts, send images, PDFs, links, and stay fully compliant —
          all from your desktop.
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
    icon: <FaGlobe />,
    title: "Domain Registration",
    desc: "Secure the perfect domain for your business with hassle-free domain registration services.",
    image: domain,
    brief: (
      <>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Domain Registration Made Easy
        </h2>
        <p className="text-gray-600 text-sm">
          At SRJ Global Softech, we help you find and register the perfect
          domain name for your business, blog, or brand. Choose from a wide
          range of domain extensions, including .com, .in, .net, and more. Our
          hassle-free domain management includes renewal alerts, domain
          forwarding, and security features — ensuring your brand stays online
          and protected. Whether you're a beginner or a seasoned professional,
          our platform makes domain registration easy, reliable, and efficient.
          Secure your domain today and start building your digital presence with
          confidence.
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

const Services = () => {
  const [selected, setSelected] = useState(null);
  const [viewMode, setViewMode] = useState("brief");

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-[#0d0d0d] dark:via-[#111] dark:to-[#1a1a1a] text-black dark:text-white pt-32 px-4 overflow-hidden">
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
        <div className="relative w-full mb-5 md:w-2/3  sm:h-[520px] p-1 rounded-3xl bg-white/70 dark:bg-[#0f172a]/50 shadow-xl backdrop-blur-xl border border-gray-200 dark:border-gray-700 transition-all duration-700">
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
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start justify-center">
                    {/* Left: Text Content */}
                    <div className="w-full md:w-2/3 max-h-60 overflow-y-auto sm:pr-2 scrollbar-thin scrollbar-thumb-sky-400 scrollbar-track-transparent">
                      {viewMode === "brief" ? (
                        <div className="animate-fade-in transition-opacity duration-500 leading-relaxed text-center md:text-left whitespace-pre-line">
                          {services[selected].brief}
                        </div>
                      ) : (
                        <ul className="list-disc text-left list-inside space-y-2 animate-fade-in transition-opacity duration-500 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-sky-400 scrollbar-track-transparent">
                          {services[selected].provided.map((item, idx) => (
                            <li
                              key={idx}
                              className="tracking-wide text-base sm:text-lg capitalize"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Right: Image */}
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
