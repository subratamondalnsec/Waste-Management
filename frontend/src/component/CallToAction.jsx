import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = ({ isDarkMode }) => {
  return (
    <section className="relative w-full overflow-hidden font-['Inter']">
      {/* Background Image with animation */}
      <motion.img
        src="/calltoAction.jpg" 
        alt="Pile of colorful plastic bottle caps and recycling materials"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="w-full h-[420px] object-cover brightness-70"
      />

      {/* Optional Dark Mode Overlay */}
      {isDarkMode && (
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30 z-0" />
      )}

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Foreground Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4"
      >
        <motion.p
          className="text-white text-xs sm:text-sm font-medium uppercase mb-2 tracking-widest"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Take Action Now
        </motion.p>

        <motion.h2
          className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          Join the Green Revolution Today
        </motion.h2>

        <motion.p
          className="text-white text-sm sm:text-base max-w-2xl mb-6 drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          Start recycling, earn rewards, and make a difference in waste management.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="bg-[#ff6b4a] hover:bg-[#e25d3c] transition-colors duration-300 text-white text-lg font-semibold px-6 py-4 rounded-xl shadow-md"
        >
          Get Started →
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CallToAction;
