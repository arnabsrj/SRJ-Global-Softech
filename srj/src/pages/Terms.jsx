import React from "react";
import { motion } from "framer-motion";

const Terms = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeUp}
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-[50px]"
    >
      <div className="max-w-4xl mx-auto mt-10">
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-sky-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-10 tracking-tight">
          Terms and Conditions
        </h1>

        <div className="bg-white/90 shadow-xl backdrop-blur rounded-2xl p-6 sm:p-10 border border-gray-200">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-sm text-gray-500 mb-6 italic">
              Last Updated: {new Date().toLocaleDateString()}
            </p>

            {[
              {
                title: "1. Acceptance of Terms",
                content:
                  "By accessing and using the services provided by SRJ Global Technologies (\"we,\" \"our,\" or \"us\"), you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.",
              },
              {
                title: "2. Services Description",
                content:
                  "SRJ Global Technologies provides various digital services including but not limited to website design and development, mobile app development, e-commerce solutions, digital marketing, and other related services as described on our website.",
              },
              {
                title: "3. User Accounts and Responsibilities",
                content:
                  "Some of our services may require you to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.",
              },
              {
                title: "4. Payment Terms",
                content:
                  "For services that require payment, you agree to pay all fees associated with the services you select. All payments are non-refundable unless otherwise specified in a separate agreement. We reserve the right to change our prices at any time, with notice provided on our website or via email.",
              },
              {
                title: "5. Intellectual Property Rights",
                content:
                  "All content included on our website, such as text, graphics, logos, images, and software, is the property of SRJ Global Technologies or its content suppliers and is protected by international copyright laws. The compilation of all content on this site is the exclusive property of SRJ Global Technologies.",
              },
              {
                title: "6. Limitation of Liability",
                content:
                  "SRJ Global Technologies shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, our services or any content provided by SRJ Global Technologies.",
              },
              {
                title: "7. Indemnification",
                content:
                  "You agree to indemnify, defend, and hold harmless SRJ Global Technologies, its officers, directors, employees, agents, and third parties, for any losses, costs, liabilities, and expenses relating to or arising out of your use of our services or your violation of these Terms and Conditions.",
              },
              {
                title: "8. Governing Law",
                content:
                  "These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any dispute arising under or relating to these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts located in Noida, Uttar Pradesh.",
              },
              {
                title: "9. Changes to Terms",
                content:
                  "We reserve the right to modify these Terms and Conditions at any time. We will notify users of any changes by updating the \"Last Updated\" date at the top of this page. Your continued use of our services after any such changes constitutes your acceptance of the new Terms and Conditions.",
              },
              {
                title: "10. Contact Information",
                content: (
                  <>
                    If you have any questions about these Terms and Conditions,
                    please contact us at:
                    <br />
                    <strong>Email:</strong> srjsoftechsolutions@gmail.com
                    <br />
                    <strong>Phone:</strong> +91 92665 94199
                    <br />
                    <strong>Address:</strong> Urbtech Trade Centre, Tower 35,
                    Adjacent to DPS School, Block B, Sector 132, Noida, Uttar
                    Pradesh 201304
                  </>
                ),
              },
            ].map((section, idx) => (
              <motion.section
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mb-10"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {section.title}
                </h2>
                <p className="leading-relaxed">{section.content}</p>
              </motion.section>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Terms;
