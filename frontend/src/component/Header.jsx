import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const texts = ['Cleaning the Planet', 'Smart Recycling', 'Earning Rewards'];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[textIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText((prev) => fullText.substring(0, prev.length + 1));
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayText((prev) => fullText.substring(0, prev.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <section className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"} mt-[64px] font-['Inter'] relative`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-16 flex flex-col md:flex-row items-start justify-start gap-8">

        {/* Left section */}
        <motion.div
          className="md:w-2/3 max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-4xl font-extrabold leading-10">
            Ai Powered By Smart Waste Management System
            <br />
            Start&nbsp;
            <motion.span
              className={`${isDarkMode ? "text-[#15c92a]" : "text-[#16840a]"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              &lt;{displayText}&gt;
            </motion.span>
            <br />
            With Our EcoExchange Platform
          </h1>

          <motion.p
            className={`mt-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"} text-md sm:text-md leading-relaxed max-w-md`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Empowering you to make a difference —
            <br />
            Our intelligent waste management system turns your everyday waste into real-world value, promoting a cleaner environment, smarter recycling, and reward-based participation for a better tomorrow.
            <br />
            Accessible for everyone!
          </motion.p>

          <motion.button
            type="button"
            className="bg-[#ff6b4a] hover:bg-[#e25d3c] transition-colors duration-300 text-white text-lg font-semibold px-6 py-4 mt-6 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Get Started →
          </motion.button>
        </motion.div>

        {/* Right section - images */}
        
              
        <motion.div
          className="md:w-1/2 flex flex-col gap-6 sm:gap-8 relative ml-auto items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
        
          <div className="flex gap-6 sm:gap-8">
            {[1, 2].map((id, index) => (
              <motion.div
                key={id}
                className="relative rounded-lg overflow-hidden w-36 sm:w-44 h-24 sm:h-28"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={
                    isDarkMode
                      ? `public/home${id}_dark.${id === 1 ? 'png' : 'jpg'}`
                      : `public/home${id}.${id === 1 ? 'jpg' : 'png'}`
                  }
                  alt={`Image ${id}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="relative rounded-lg overflow-hidden w-72 sm:w-96 h-44 sm:h-56"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={`${isDarkMode ? "public/home3_dark.jpg" : "public/home3.jpg"}`}
              alt="Collecting Man Recyle product"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
