import React from 'react';
import { motion } from 'framer-motion';

const offerings = [
  {
    number: '01.',
    title: 'Waste Recognition',
    description: 'AI-based waste sorting and credit system',
  },
  {
    number: '02.',
    title: 'Door-to-Door Pickup',
    description: 'Convenient waste collection and recycling service',
  },
  {
    number: '03.',
    title: 'Community Engagement',
    description: 'Join our active waste recycling community',
  },
  {
    number: '04.',
    title: 'Recycled Products',
    description: 'Shop eco-friendly products at affordable rates',
  },
  {
    number: '05.',
    title: 'Eco Wallet',
    description: 'Earn and redeem green credits digitally',
  },
  {
    number: '06.',
    title: 'Smart Bin Network',
    description: 'Track public waste bins in real time',
  },
  {
    number: '07.',
    title: 'Green Leaderboards',
    description: 'Gamify recycling with points & rankings',
  },
  {
    number: '08.',
    title: 'Sustainable Education',
    description: 'Workshops and resources for a greener future',
  },
];

const CoreOfferings = ({ isDarkMode }) => {
  return (
    <section className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"} py-12 px-6 font-['Inter']`}>
      <div className="max-w-6xl mx-auto">
        <p className={`text-2xl font-extrabold uppercase tracking-wide mb-2 ${isDarkMode ? 'text-green-400' : 'text-gray-900'} `}>Our Services</p>
        <h2 className="text-4xl font-bold  leading-tight mb-4">
          Our Core Offerings
        </h2>
        <br/>
        {/* Infinite Horizontal Rolling Cards */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: ['0%', '-200%'] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: 'linear',
            }}
          >
            {[...offerings, ...offerings].map((offer, index) => (
              <motion.article
                key={index}
                className={`min-w-[300px] max-w-[500px] flex-shrink-0 p-6 rounded-xl shadow-lg ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start mb-3">
                  <p className="text-[28px] font-bold text-gray-400 mr-4">{offer.number}</p>
                  <div>
                    <h3 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-black"}`}>
                      {offer.title}
                    </h3>
                    <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {offer.description}
                    </p>
                  </div>
                </div>
                <a href="#" className="text-lg font-bold text-[#f87171] mt-2 inline-block">Read More</a>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoreOfferings;
