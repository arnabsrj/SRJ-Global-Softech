import React from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import {
  FaUserShield,
  FaInfoCircle,
  FaLock,
  FaGlobe,
  FaCogs,
  FaFileSignature,
} from "react-icons/fa";

const sections = [
  {
    title: "1. Introduction",
    icon: <FaInfoCircle className="text-sky-600 mr-2" />,
    content: `At SRJ Global Technologies (“we”, “our”, or “us”), we respect your privacy and are committed to protecting it through this Privacy Policy. This document describes how we collect, use, process, and share your personal data through our website (hereinafter referred to as the "Platform").
    By accessing or using our Platform, you agree to be bound by the terms of this Privacy Policy and our Terms of Use. If you do not agree with any part of this policy, please do not access or use our services.`,
  },
  {
    title: "2. Information We Collect",
    icon: <FaGlobe className="text-sky-600 mr-2" />,
    content: `We may collect and process the following categories of information:`,
    list: [
      "**Personal Data**: Full Name, Email Address, Phone Number, Postal Address, Company Information (for B2B inquiries)",
      "**Technical and Device Information**: IP address, browser type/version, time zone, device ID, OS, and platform",
      "**Usage Data**: Pages visited, clickstream behavior, interaction with forms/chatbots",
      "**Cookies and Tracking Technologies**: Preferences, session IDs, analytics (e.g., Google Analytics)",
    ],
  },
  {
    title: "3. How We Use Your Information",
    icon: <FaCogs className="text-sky-600 mr-2" />,
    content: `We use the collected information to:`,
    list: [
      "Provide, operate, and maintain our Platform",
      "Improve our services and user experience",
      "Respond to inquiries or customer support",
      "Send transactional communications (e.g., updates, confirmations)",
      "Send marketing/promotional messages (with your consent)",
      "Ensure security and prevent fraud",
      "Fulfill legal or regulatory obligations",
    ],
  },
  {
    title: "4. Sharing of Personal Data",
    icon: <FaFileSignature className="text-sky-600 mr-2" />,
    content: `We may share your data with:`,
    list: [
      "**Trusted Third Parties**: Email/SMS service providers, hosting partners, analytics providers — all bound by legal contracts to safeguard data.",
      "**Legal or Regulatory Authorities**: If required to comply with legal processes, court orders, or regulatory obligations.",
    ],
  },
  {
    title: "5. Data Security",
    icon: <FaUserShield className="text-sky-600 mr-2" />,
    content: `We implement industry-standard safeguards including SSL encryption, firewalls, intrusion detection, and access control. However, no system is 100% secure. You are responsible for keeping your login credentials confidential.`,
  },
  {
    title: "6. Your Rights",
    icon: <FaUserShield className="text-sky-600 mr-2" />,
    content: `Depending on applicable laws, you may have the right to:`,
    list: [
      "Access your personal data",
      "Correct or update incorrect data",
      "Request deletion of your data",
      "Withdraw previously granted consent",
      "Object to certain types of processing",
    ],
  },
  {
    title: "7. Retention of Information",
    icon: <FaLock className="text-sky-600 mr-2" />,
    content: `We retain personal data only as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements. Where possible, data may be anonymized or aggregated for research or analytics.`,
  },
  {
    title: "8. Children's Privacy",
    icon: <FaInfoCircle className="text-sky-600 mr-2" />,
    content: `Our services are not intended for individuals under 18. If we discover we've collected data from a minor without appropriate consent, we will delete it promptly.`,
  },
  {
    title: "9. Third-Party Links and Services",
    icon: <FaFileSignature className="text-sky-600 mr-2" />,
    content: `Our Platform may include links to third-party websites or services, each with their own privacy practices. We are not responsible for their content or policies. Please review their privacy notices before sharing data.`,
  },
  {
    title: "10. Changes to This Privacy Policy",
    icon: <FaInfoCircle className="text-sky-600 mr-2" />,
    content: `We may periodically update this policy. All changes will be posted on this page with a revised “Last Updated” date. If significant, we may notify you via email or a notice on our Platform.`,
  },
  {
    title: "11. Contact Us",
    icon: <FaInfoCircle className="text-sky-600 mr-2" />,
    content: `If you have questions, concerns, or complaints about this policy or how we handle your data, please contact:
    
    📧 Email: srjsoftechsolutions@gmail.com  
    📞 Phone: +91 92665 94199  
    🏢 Address: Urbtech Trade Centre, Tower 35, Sector 132, Noida, UP 201304`,
  },
];



const Privacy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 mt-[50px]"
    >
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-300 opacity-30 rounded-full filter blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 opacity-30 rounded-full filter blur-3xl -z-10 animate-pulse delay-200"></div>

      <div className="max-w-4xl mx-auto mt-10">
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-sky-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-cente text-gray-600 mb-4 italic">
          <span className="font-semibold text-lg">Disclaimer</span>: In case of any discrepancy or difference, the English version shall prevail over translations.
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
                      <li key={idx}>
                        <ReactMarkdown components={{ p: 'span' }}>{item}</ReactMarkdown>
                      </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <p className="text-sm text- text-gray-500">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Privacy;