import React from "react";
import { motion } from "framer-motion";
import { FaRecycle } from "react-icons/fa";
import { useState, useEffect } from "react";


const CountUpStat = ({ end, label, isDarkMode }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const target = parseInt(end.replace(/\D/g, ""));
    const interval = setInterval(() => {
      let increment = 1;
      if (current >= 1000) increment = 100;
      else if (current >= 100) increment = 10;
      else if (current >= 10) increment = 1;

      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }

      setCount(current);
    }, 30); // Adjust speed here if needed

    return () => clearInterval(interval);
  }, [end]);

  return (
    <div className={`flex flex-col items-center py-10 rounded-xl shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
      <span className={`text-3xl font-extrabold ${isDarkMode ? "text-green-400" : "text-green-700"}`}>
        {count.toLocaleString()}+
      </span>
      <span className={`text-xl font-bold ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
        {label}
      </span>
    </div>
  );
};

const HeroSection = ({ isDarkMode, setIsDarkMode }) => {
  const stats = [
    { end: "25,000+", label: "KG Waste Processed" },
    { end: "10,000+", label: "Users Rewarded" },
    { end: "5", label: "Smart Cities Connected" },
  ];
  

  return (
    <section className={`relative overflow-hidden ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"} font-['Inter']   py-16 transition-colors duration-500`}>
       {/* Statistics Section */}
       <div className="grid grid-cols-1 sm:grid-cols-3 gap-8  mb-20 max-w-screen-xl mx-auto">
          {stats.map((stat, index) => (
            <CountUpStat key={index} end={stat.end} label={stat.label} isDarkMode={isDarkMode} />
          ))}
      </div>

      {/* Background SVG Blob */}
      <div className="absolute top-0 -left-20 w-[600px] h-[600px] opacity-10 pointer-events-none z-0">
        <img src="/blob.svg" alt="blob" className="w-full h-full animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start px-6 md:px-12 gap-8 md:gap-16">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src="/herosection.jpg"
          alt="EcoExchangeIndia - Scenic waste management visual"
          className="w-full md:w-1/2 rounded-2xl shadow-xl object-cover"
          width="600"
          height="400"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2"
        >
          
          <p className="text-5xl font-extrabold uppercase tracking-wide mb-2">
            Our Mission! ♻️
          </p>
          <br/>
          <h1 className="text-4xl font-bold  leading-tight mb-4">
            Empowering India’s Future Through Smart Waste Solutions 
          </h1>
          <br/>
          <p className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-6 leading-relaxed`}>
            EcoExchangeIndia transforms the way India recycles—combining AI-based recognition with reward points to motivate every citizen to contribute to a greener tomorrow.
          </p>
          <br/>
          <motion.button
            type="button"
            className="bg-[#ff6b4a] hover:bg-[#e25d3c] transition-colors duration-300 text-white text-lg font-semibold px-6 py-4 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Read Our Story →
          </motion.button>
        </motion.div>
      </div>

     
    </section>
  );
};

export default HeroSection;
