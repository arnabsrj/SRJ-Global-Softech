import React from "react";
import { FaAward, FaClock, FaHandsHelping, FaUserShield } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaAward size={28} className="text-white" />,
    title: "High Quality",
    desc: "We provide top-notch services and solutions with precision and quality.",
    color: "bg-green-500",
    position: "top-left",
  },
  {
    icon: <FaClock size={28} className="text-white" />,
    title: "Timely Delivery",
    desc: "Our projects are always delivered on time, every time.",
    color: "bg-teal-600",
    position: "bottom-left",
  },
  {
    icon: <FaHandsHelping size={28} className="text-white" />,
    title: "Customer Support",
    desc: "We offer dedicated support that listens and responds promptly.",
    color: "bg-indigo-800",
    position: "top-right",
  },
  {
    icon: <FaUserShield size={28} className="text-white" />,
    title: "Trusted Team",
    desc: "Our team is trusted by clients worldwide for their reliability and integrity.",
    color: "bg-red-400",
    position: "bottom-right",
  },
];

const ChooseUs = () => {
  return (
    <div className="relative py-20 md:py-28 text-black dark:text-white bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative grid md:grid-cols-3 gap-12 items-center">
          {/* Left Features */}
          <div className="flex flex-col gap-12 sm:items-end text-right">
            {features
              .filter((f) => f.position.includes("left"))
              .map((item, idx) => (
                <motion.div
                  key={idx}
                  className="max-w-xs"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col sm:items-end gap-2">
                    <div
                      className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center shadow-md`}
                    >
                      {item.icon}
                    </div>
                    <h4 className="text-base text-left md:text-lg font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-sm text-left text-gray-600 dark:text-gray-300 sm:text-right">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Center Circle */}
          <motion.div
            className="relative w-52 h-52 md:w-60 md:h-60 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-sky-400 to-indigo-500 shadow-[0_0_60px_10px_rgba(59,130,246,0.3)] flex items-center justify-center text-center text-white text-lg md:text-xl font-semibold"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose <br />
            SRJ Globel Softech
          </motion.div>

          {/* Right Features */}
          <div className="flex flex-col gap-12 text-left">
            {features
              .filter((f) => f.position.includes("right"))
              .map((item, idx) => (
                <motion.div
                  key={idx}
                  className="max-w-xs"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col items-start gap-2">
                    <div
                      className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center shadow-md`}
                    >
                      {item.icon}
                    </div>
                    <h4 className="text-base md:text-lg font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
