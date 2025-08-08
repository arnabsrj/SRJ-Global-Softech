import React from "react";
import { motion } from "framer-motion";

const Cookies = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-100 via-white to-purple-100 mt-[50px]"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-sky-300 opacity-30 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-300 opacity-30 rounded-full blur-3xl -z-10 animate-pulse delay-200" />

      <div className="max-w-4xl mx-auto mt-10">
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-sky-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-10 tracking-tight">
          Cookies Policy
        </h1>
        <p className="text-center text-gray-500 mb-10 text-sm">
          Last Updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-10 text-gray-700 text-base leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. What Are Cookies
            </h2>
            <p>
              Cookies are small text files placed on your device when you visit a
              website. They improve efficiency and provide data to site owners to
              enhance user experience and functionality.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. How We Use Cookies
            </h2>
            <p>SRJ Global Technologies uses cookies for:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong>Essential Cookies:</strong> Required for core website
                functionality like logins and form submissions.
              </li>
              <li>
                <strong>Performance Cookies:</strong> Help us understand website
                traffic and user interaction to improve performance.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> Provide enhanced features and
                personalization.
              </li>
              <li>
                <strong>Targeting Cookies:</strong> Used by advertising partners to
                deliver relevant ads based on your interests.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Third-Party Cookies
            </h2>
            <p>
              We use cookies from third-party services such as Google Analytics,
              Google AdSense, and social media platforms to monitor usage, deliver
              ads, and improve content.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Managing Cookies
            </h2>
            <p>
              You can control cookies through your browser settings. However,
              disabling cookies may affect your experience and restrict personalized
              features.
            </p>
            <p className="mt-3">Manage cookies in your browser:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Microsoft Edge
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Safari
                </a>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Changes to Our Cookies Policy
            </h2>
            <p>
              We may update this policy periodically. Changes will be reflected on
              this page with the latest revision date shown above.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Contact Information
            </h2>
            <p>
              If you have any questions, feel free to contact us:
              <br />
              <strong>Email:</strong> srjsoftechsolutions@gmail.com
              <br />
              <strong>Phone:</strong> +91 92665 94199
              <br />
              <strong>Address:</strong> Urbtech Trade Centre, Tower 35, Adjacent to DPS
              School, Block B, Sector 132, Noida, UP 201304
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default Cookies;
