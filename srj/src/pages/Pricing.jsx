import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Rp57oBVaflZupDIuBsjTkNYqNTH7X8Ko0JIXDOucw4r11DXqb2gGnykFtMKZHizgPaZOxZuFlLCJyDYUpsQz51200tb0fzwAH"
);

// All pricing data
const pricingData = {
  Website: [
    {
      tier: "Basic",
      price: 14999,
      displayPrice: "14,999+",
      features: ["4–5 pages", "Contact form", "Responsive", "Basic SEO"],
    },
    {
      tier: "Standard",
      price: 24999,
      displayPrice: "24,999+",
      features: ["7–10 pages", "WhatsApp + Map", "Dynamic sections"],
    },
    {
      tier: "Advanced",
      price: 39999,
      displayPrice: "39,999+",
      features: ["UI/UX", "Animations", "Blog", "Chatbot", "Domain + Hosting"],
    },
    {
      tier: "Premium",
      price: 69999,
      displayPrice: "69,999+",
      features: ["E-commerce/Booking", "Admin Panel", "Analytics"],
    },
  ],
  "Mobile App": [
    {
      tier: "Basic",
      price: 24999,
      features: ["1–3 screens", "Static app", "Splash", "Basic nav"],
    },
    {
      tier: "Standard",
      price: 44999,
      features: ["4–8 screens", "Login", "API", "Dashboard"],
    },
    {
      tier: "Advanced",
      price: 69999,
      features: ["Firebase DB", "GPS", "Push notifications"],
    },
    {
      tier: "Premium",
      price: 99999,
      displayPrice: "99,999+",
      features: ["E-com app", "Admin panel", "Payments"],
    },
  ],
  Dashboard: [
    {
      tier: "Basic",
      price: 9999,
      features: ["Static dashboard", "Sample data"],
    },
    {
      tier: "Standard",
      price: 19999,
      features: ["Filters", "Sorting", "Dynamic charts"],
    },
    {
      tier: "Advanced",
      price: 29999,
      features: ["Login system", "DB", "Excel export"],
    },
    {
      tier: "Premium",
      price: 49999,
      features: ["Real-time sync", "Roles", "CMS-ready"],
    },
  ],
  ERPCRM: [
    {
      tier: "Basic",
      price: 29999,
      features: ["Static ERP/CRM", "Offline reports"],
    },
    { tier: "Standard", price: 49999, features: ["DB", "Login", "CRUD"] },
    {
      tier: "Advanced",
      price: 74999,
      features: ["Role access", "Analytics", "Dashboards"],
    },
    {
      tier: "Premium",
      price: 129999,
      displayPrice: "1,49,999+",
      features: ["Cloud-based", "Multi-login", "Real-time sync"],
    },
  ],
  SEO: [
    {
      tier: "Basic SEO",
      price: 3499,
      features: ["On-page SEO", "Google indexing"],
    },
    {
      tier: "Full SEO",
      price: 6999,
      features: ["On-page + off-page", "Backlinks", "Keywords"],
    },
    { tier: "SMM", price: 4999, features: ["8 creative posts/month (IG/FB)"] },
    { tier: "Combo", price: 9999, features: ["SEO + Social Media"] },
  ],
  Graphics: [
    {
      tier: "Logo (Basic)",
      price: 3499,
      features: ["2–3 concepts", "1 revision"],
    },
    {
      tier: "Logo (Pro)",
      price: 4999,
      features: ["4–5 concepts", "Source files"],
    },
    {
      tier: "Business Card",
      price: 1199,
      features: ["Front & back print-ready"],
    },
    {
      tier: "Brochure/Flyer/Poster",
      price: 1499,
      features: ["Single-page design"],
    },
    { tier: "Banner", price: 999, features: ["Per banner design"] },
  ],
  WordPress: [
    {
      tier: "Basic",
      price: 11999,
      displayPrice: "11,999+",
      features: ["4–5 pages", "Free theme", "Blog setup"],
    },
    {
      tier: "Standard",
      price: 17999,
      features: ["Custom theme", "Plugins", "Contact forms"],
    },
    {
      tier: "Advanced",
      price: 24999,
      features: ["WooCommerce", "Booking", "Payments"],
    },
    {
      tier: "Premium",
      price: 34999,
      features: ["Speed optimization", "Security setup", "SEO audit"],
    },
  ],
  Shopify: [
    {
      tier: "Shopify Basic",
      price: 11999,
      features: ["Theme", "10 products setup"],
    },
    {
      tier: "Shopify Pro",
      price: 21999,
      features: ["Full setup", "Navigation", "Payment"],
    },
    {
      tier: "Custom E-Commerce",
      price: 39999,
      features: ["Custom frontend", "Admin panel"],
    },
  ],
  Bulk: [
    { tier: "Bulk SMS", price: 2499, features: ["10,000 SMS", "Sender ID"] },
    {
      tier: "WA Broadcast",
      price: 3499,
      features: ["Message tool", "Content"],
    },
    { tier: "WA Automation", price: 4499, features: ["Trigger-based replies"] },
  ],
  Ads: [
    {
      tier: "Google Ads",
      price: 5999,
      features: ["2 ad groups", "Keyword setup", "Tracking"],
    },
    {
      tier: "Meta Ads",
      price: 4999,
      features: ["FB/IG audience", "Creatives"],
    },
    { tier: "Combo", price: 11999, features: ["Google + Meta + report"] },
    {
      tier: "Ad Optimization",
      price: 3499,
      features: ["Retargeting", "Performance boost"],
    },
  ],
  Gaming: [
    {
      tier: "Basic",
      price: 14999,
      features: [
        "Simple 2D game (1–2 levels)",
        "Basic UI & graphics",
        "Mobile-friendly",
        "Basic sound effects",
        "Ex. Flappy Bird"
      ],
    },
    {
      tier: "Standard",
      price: 24999,
      features: [
        "2D game (3–5 levels)",
        "Custom graphics & animations",
        "Scoreboard & basic achievements",
        "Android & iOS build",
      ],
    },
    {
      tier: "Advanced",
      price: 39999,
      features: [
        "2D/Basic 3D game (up to 10 levels)",
        "Story mode integration",
        "Multiplayer (local) support",
        "Custom music & sound design",
        "Play Store & App Store publishing",
      ],
    },
    {
      tier: "Premium",
      price: 149999,
      displayPrice: "1,49,999+",
      features: [
        "Fully custom 3D game",
        "Multiplayer (online) with chat",
        "In-app purchases & ads integration",
        "Analytics & user tracking",
        "Ongoing support & updates",
      ],
    },
  ],
};

const addOns = [
  { name: "Chatbot (Web/App)", price: 2999 },
  { name: "WhatsApp Automation", price: 2499 },
  { name: "Payment Gateway Integration", price: 3999 },
  { name: "Admin Panel", price: 5999 },
  { name: "Hosting + Domain (1 yr)", price: 2999 },
  { name: "Content Writing (per page)", price: 1299 },
  { name: "Email Setup + SMTP", price: 1999 },
];

const urgentDelivery = {
  Website: [3000, 7000],
  "Mobile App": [5000, 12000],
};

const dynamicPolicy = [
  { scenario: "Urgent Timeline (< 5 days)", impact: "+20–30%" },
  { scenario: "Bulk Orders (3+ Services)", impact: "10–20% Discount" },
  { scenario: "Weekend/Holiday Delivery", impact: "+15%" },
  { scenario: "Custom/Enterprise Request", impact: "Custom Quote" },
];

export default function PricingChart() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(pricingData);

  // Moved below `filteredData`
  const serviceList = Object.keys(filteredData);
  const [selectedService, setSelectedService] = useState(serviceList[0]);
  const [selectedTier, setSelectedTier] = useState(
    filteredData[serviceList[0]][0]
  );
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [days, setDays] = useState(7);

  useEffect(() => {
    const tier = filteredData[selectedService]?.[0];
    if (tier) setSelectedTier(tier);
    setSelectedAddons([]);
    setDays(7);
  }, [selectedService, filteredData]);

  const handleTierChange = (tier) => setSelectedTier(tier);

  const handleAddonToggle = (addon) => {
    setSelectedAddons((prev) =>
      prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]
    );
  };

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const newData = {};

    for (const category in pricingData) {
      const filteredTiers = pricingData[category].filter((tier) => {
        const tierMatch = tier.tier.toLowerCase().includes(query);
        const featureMatch = tier.features.some((feature) =>
          feature.toLowerCase().includes(query)
        );
        return tierMatch || featureMatch;
      });

      if (filteredTiers.length > 0 || category.toLowerCase().includes(query)) {
        newData[category] =
          filteredTiers.length > 0 ? filteredTiers : pricingData[category];
      }
    }

    setFilteredData(newData);

    const newServiceList = Object.keys(newData);
    if (newServiceList.length > 0) {
      setSelectedService(newServiceList[0]);
    }
  };

  let urgentCharge = 0;
  let urgentLabel = "";
  if (urgentDelivery[selectedService] && days < 5) {
    urgentCharge = urgentDelivery[selectedService][0];
    urgentLabel = `Urgent Delivery (+₹${urgentDelivery[
      selectedService
    ][0].toLocaleString()}–₹${urgentDelivery[
      selectedService
    ][1].toLocaleString()})`;
  }

  const totalPrice =
    selectedTier.price +
    selectedAddons.reduce((sum, addon) => sum + addon.price, 0) +
    urgentCharge;

  const handlePayment = async () => {
    const stripe = await stripePromise;

    // Prepare line items for Stripe
    const lineItems = [
      {
        name: `${selectedService} - ${selectedTier.tier}`,
        amount: selectedTier.price,
      },
      ...selectedAddons.map((addon) => ({
        name: `Add-on: ${addon.name}`,
        amount: addon.price,
      })),
    ];

    // Send to backend
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/payment/create-checkout-session`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: lineItems,
          totalAmount: totalPrice, // optional for logging only
        }),
      }
    );

    const data = await res.json();
    console.log("Stripe session ID received:", data);

    if (!data.id) {
      alert("Payment session creation failed");
      return;
    }

    // Redirect to Stripe checkout
    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <>
      {/* Search Input */}
      <div className="flex justify-center items-center gap-2 mb-10 mt-38">
        <input
          type="text"
          placeholder="🔍 Search service, tier or feature..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-lg px-5 py-2.5 border border-gray-300 dark:border-gray-600 rounded-full shadow-sm focus:ring-2 focus:ring-indigo-400 dark:bg-gray-900 dark:text-white"
        />
        <button
          onClick={handleSearch}
          className="px-5 py-2.5 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition"
        >
          Search
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto p-8 md:p-12 mt-6 mb-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700"
      >
        {/* Heading */}
        <motion.h1
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-indigo-600 dark:text-indigo-300 mb-3"
        >
          SRJ Software Company – Pricing Chart 2025
        </motion.h1>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
          🚀 Smart pricing, premium quality — tailored tech & marketing packages
          for startups, MSMEs, and local brands.
        </p>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {serviceList.map((service) => (
            <motion.button
              key={service}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                selectedService === service
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-gray-100 text-indigo-700 hover:bg-indigo-100 dark:bg-gray-800 dark:hover:bg-indigo-600 dark:hover:text-white"
              }`}
              onClick={() => setSelectedService(service)}
            >
              {service}
            </motion.button>
          ))}
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredData[selectedService]?.map((tier) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              key={tier.tier}
              className={`rounded-2xl p-6 shadow-md border-2 transition cursor-pointer ${
                selectedTier.tier === tier.tier
                  ? "border-indigo-600 bg-indigo-100 dark:bg-indigo-900 shadow-xl"
                  : "border-gray-200 bg-white dark:bg-gray-800 hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700"
              }`}
              onClick={() => handleTierChange(tier)}
            >
              <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">
                {tier.tier}
              </h3>
              <p className="text-3xl font-extrabold text-blue-600 dark:text-blue-300 mb-4">
                ₹
                {tier.displayPrice
                  ? tier.displayPrice
                  : tier.price.toLocaleString()}
              </p>

              <ul className="text-sm space-y-1 text-gray-800 dark:text-gray-200">
                {tier.features.map((f, i) => (
                  <li key={i}>✔️ {f}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Delivery Timeline */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
          <label
            htmlFor="days"
            className="font-medium text-indigo-700 dark:text-indigo-300"
          >
            🕒 Delivery Timeline (days):
          </label>
          <input
            id="days"
            type="number"
            min={1}
            max={30}
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="w-24 px-3 py-2 border rounded text-center dark:bg-gray-800 dark:text-white"
          />
          {urgentLabel && (
            <span className="text-red-600 font-semibold">{urgentLabel}</span>
          )}
        </div>

        {/* Add-on Services */}
        <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-4">
          Add-On Services
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-12">
          {addOns.map((addon) => (
            <label
              key={addon.name}
              className="flex justify-between items-center border rounded-xl p-4 bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-gray-700 transition cursor-pointer"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedAddons.includes(addon)}
                  onChange={() => handleAddonToggle(addon)}
                  className="mr-3 accent-indigo-500 scale-125"
                />
                <span className="text-sm font-medium text-gray-800 dark:text-white">
                  {addon.name}
                </span>
              </div>
              <span className="text-blue-600 dark:text-blue-300 font-semibold text-sm">
                ₹{addon.price.toLocaleString()}
              </span>
            </label>
          ))}
        </div>

        {/* Total Price */}
        <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 p-6 rounded-2xl shadow-lg text-center mb-12">
          <h4 className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">
            💰 Total Price
          </h4>
          <p className="text-4xl font-extrabold text-green-600 dark:text-green-200">
            ₹{totalPrice.toLocaleString()}
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
            *Final price may vary for custom/enterprise requests
          </p>
        </div>

        {/* Dynamic Policy */}
        <div className="mb-12">
          <h4 className="text-lg font-bold text-indigo-700 dark:text-indigo-300 mb-3">
            Dynamic Pricing Policy
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dynamicPolicy.map((policy) => (
              <div
                key={policy.scenario}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow text-sm text-gray-800 dark:text-gray-200 flex justify-between"
              >
                <span>{policy.scenario}</span>
                <span className="font-semibold text-indigo-600 dark:text-indigo-300">
                  {policy.impact}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-indigo-100 to-blue-50 dark:from-indigo-800 dark:to-blue-900 p-6 rounded-2xl shadow-lg mb-10">
          <h4 className="text-lg font-bold text-indigo-700 dark:text-indigo-200 mb-2">
            🛠 Why Choose SRJ Software Company?
          </h4>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1 text-sm">
            <li>💡 Moderate pricing + enterprise quality</li>
            <li>📦 All-in-one IT & marketing solutions</li>
            <li>🔧 Customization for startups & MSMEs</li>
            <li>🎯 On-time delivery with performance focus</li>
            <li>🔄 Long-term support, upgrade-ready services</li>
          </ul>
        </div>

        {/* <button
          onClick={handlePayment}
          className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:opacity-90 transition"
        >
          Proceed to Pay ₹{totalPrice.toLocaleString()}
        </button> */}
      </motion.div>
    </>
  );
}
