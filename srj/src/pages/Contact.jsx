import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const services = [
  "Website Designing",
  "Graphic Designing",
  "Logo Designing",
  "Custom Website Design",
  "Web Development",
  "E-Commerce Development",
  "App Development",
  "WordPress Development",
  "Digital Marketing",
  "Search Engine Optimization",
  "PPC Advertising",
  "Content Writing",
  "Web Hosting",
  "Domain Registration",
  "Bulk SMS",
  "Whatsapp Advertising Software",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    } else if (!nameRegex.test(formData.firstName)) {
      newErrors.firstName = "First Name should contain only letters and spaces";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    } else if (!nameRegex.test(formData.lastName)) {
      newErrors.lastName = "Last Name should contain only letters and spaces";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid Indian phone number";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      };

      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      const res = await response.json();
      console.log("Server response:", res.message);
      toast.success("Message sent successfully!");

      // Clear form after success
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen mt-[100px] pb-1 bg-white dark:bg-[#0e0e0e] pt-28 px-6 sm:px-10 text-black dark:text-white transition-colors duration-500">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <MdContactPhone
            size={100}
            className="text-6xl text-[#0A49D9] dark:text-[#38BDF8] animate-pulse"
          />
        </motion.div>
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-[#0A49D9] dark:text-[#38BDF8] mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Let's Chat, Contact with Us
        </motion.p>
        <motion.p
          className="mt-2 text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Have any questions or feedback? We’re here to help. Send us a message,
          we’ll get back to you within 24 hours.
        </motion.p>
      </div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white dark:bg-[#1a1a1a] shadow-2xl rounded-2xl p-8 mb-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {["firstName", "lastName", "email", "phone", "service", "message"].map(
          (field) => (
            <React.Fragment key={field}>
              {field !== "message" && field !== "service" && (
                <div>
                  <label className="block text-sm font-semibold mb-1 capitalize">
                    {field.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type={
                      field === "email"
                        ? "email"
                        : field === "phone"
                        ? "tel"
                        : "text"
                    }
                    name={field}
                    placeholder={`Enter your ${
                      field === "phone"
                        ? "phone number (+91 9999999999)"
                        : field
                    }`}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-[#111] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A49D9]"
                  />
                  {errors[field] && (
                    <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                  )}
                </div>
              )}

              {field === "service" && (
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-1">
                    Select Service
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-[#111] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A49D9]"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service, i) => (
                      <option key={i} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.service}
                    </p>
                  )}
                </div>
              )}

              {field === "message" && (
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-1">
                    Type Your Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-[#111] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A49D9]"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
              )}
            </React.Fragment>
          )
        )}

        <div className="md:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#0A49D9] to-[#38BDF8] text-white px-10 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-300"
          >
            Submit
          </button>
        </div>
      </motion.form>

      {/* Contact Info + Map */}
      <motion.div
        className="max-w-5xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <MdContactPhone
              size={28}
              className="text-[#0A49D9] dark:text-[#38BDF8]"
            />
            <div>
              <h4 className="text-lg font-semibold mb-1">Phone</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                +91 96251 90448 <br />
                +91 92667 06599 
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelopeOpenText
              size={26}
              className="text-[#0A49D9] dark:text-[#38BDF8]"
            />
            <div>
              <h4 className="text-lg font-semibold mb-1">Email</h4>
              <p className="text-gray-700 dark:text-gray-300">
                <a
                  href="mailto:srjglobaltechnology@gmail.com"
                  className="hover:underline"
                >
                  srjglobaltechnology@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <svg
              className="w-6 h-6 text-[#0A49D9] dark:text-[#38BDF8]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13 21.314V10a1 1 0 00-2 0v11.314l-4.657-4.657a8 8 0 1111.314 0z"
              />
            </svg>
            <div>
              <h4 className="text-lg font-semibold mb-1">Address</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Urbtech Trade Center Tower,<br></br>C -1101 Noida Sector-132,
                <br></br>
                Uttar Pradesh 201304
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl h-full">
          <iframe
            title="SRJ Office Location"
            src="https://www.google.com/maps?q=Urbtech+Tower+35,+adjacent+DPS+School,+Block+B,+Sector+132,+Noida,+Uttar+Pradesh+201304&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-2xl"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
