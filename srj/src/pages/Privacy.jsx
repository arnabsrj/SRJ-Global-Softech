import React from "react";
import { motion } from "framer-motion";
import { FaUserShield, FaInfoCircle, FaLock, FaGlobe, FaCogs, FaFileSignature } from "react-icons/fa";

const sections = [
  {
    title: "1. Introduction",
    icon: <FaInfoCircle className="text-sky-600 mr-2" />,
    content: `SRJ Global Softech ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy...`,
  },
  {
    title: "2. Information We Collect",
    icon: <FaGlobe className="text-sky-600 mr-2" />,
    content: `We collect several types of information from and about users of our website, including:`,
    list: [
      "Personal info: name, email, phone number, etc.",
      "Your internet connection & device details.",
      "Non-personal data like browser type and timestamps.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    icon: <FaCogs className="text-sky-600 mr-2" />,
    content: `We use your information to:`,
    list: [
      "Present our website to you.",
      "Offer requested services/products.",
      "Notify changes & respond to inquiries.",
      "Fulfill legal obligations.",
    ],
  },
  {
    title: "4. Cookies and Tracking",
    icon: <FaLock className="text-sky-600 mr-2" />,
    content: `We use cookies to track activity and store preferences. You may instruct your browser to refuse all cookies.`,
  },
  {
    title: "5. Data Security",
    icon: <FaUserShield className="text-sky-600 mr-2" />,
    content: `We use SSL encryption, firewalls, and security protocols to protect your data.`,
  },
  {
    title: "6. Third-Party Services",
    icon: <FaFileSignature className="text-sky-600 mr-2" />,
    content: `We may share your data with trusted third parties (e.g., newsletters) with your consent.`,
  },
  {
    title: "7. Your Rights",
    icon: <FaUserShield className="text-sky-600 mr-2" />,
    content: `Depending on your location, you may request access, correction, or deletion of your data.`,
  },
  {
    title: "8. Policy Changes",
    icon: <FaInfoCircle className="text-sky-600 mr-2" />,
    content: `We may update this policy. Check this page periodically for changes.`,
  },
  {
    title: "9. Contact Us",
    icon: <FaInfoCircle className="text-sky-600 mr-2" />,
    content: `Email: srjsoftechsolutions@gmail.com  
Phone: +91 92665 94199  
Address: Urbtech Trade Centre, Tower 35, Sector 132, Noida, UP 201304`,
  },
];

const Privacy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-300 opacity-30 rounded-full filter blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 opacity-30 rounded-full filter blur-3xl -z-10 animate-pulse delay-200"></div>

      <div className="max-w-4xl mx-auto mt-10">
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-sky-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-10 tracking-tight">
          Privacy Policy
        </h1>

        <p className="text-sm text-center text-gray-500 mb-8">
          Last Updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-10 text-gray-700">
          {sections.map((sec, index) => (
            <div key={index}>
              <h2 className="text-xl sm:text-2xl font-semibold flex items-center mb-3">
                {sec.icon} {sec.title}
              </h2>
              <p className="mb-3 whitespace-pre-line">{sec.content}</p>
              {sec.list && (
                <ul className="list-disc pl-6 space-y-1">
                  {sec.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Privacy;
