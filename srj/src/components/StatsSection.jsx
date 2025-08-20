import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { value: 850, suffix: "+", label: "Clients Worldwide" },
  { value: 1252, suffix: "+", label: "Successful Projects" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

const StatsSection = () => {
  return (
    <div className="relative z-20 -mt-28 md:-mt-25 z-[10] px-2 sm:px-0">
      
      <div className="absolute inset-0 blur-[120px] opacity-20 bg-gradient-to-r from-sky-300 via-blue-500 to-purple-400 rounded-3xl z-0"></div>

      <motion.div
        className="max-w-6xl mx-auto px-6 py-10 md:py-16 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.08 }}
            className="flex flex-col items-center transition-transform duration-300 ease-in-out"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-sm">
              <CountUp end={item.value} duration={2} />{item.suffix}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 font-medium">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default StatsSection;
