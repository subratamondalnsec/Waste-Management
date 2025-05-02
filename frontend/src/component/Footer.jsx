import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({ isDarkMode }) => {
  const textColor = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const headingColor = isDarkMode ? 'text-white' : 'text-black';
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-gray-100';
  const borderColor = isDarkMode ? 'border-gray-700' : 'border-gray-300';

  return (
    <footer className={`  pt-20 pb-10 px-6 md:px-16 ${bgColor} font-['Inter']`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid gap-14 sm:grid-cols-[3fr_1fr_1fr] mb-16 max-w-screen-xl mx-auto"
      >
        {/* Left Side - Company Overview */}
        <div>
          <h2 className={`text-2xl font-bold mb-5 ${headingColor}`}>EcoExchangeIndia</h2>
          <p className={`leading-6 text-sm ${textColor}`}>
            We aim to revolutionize sanitation practices by empowering communities through smart waste
            segregation, AI-driven classification, doorstep pickup, and eco-reward systems. Users can
            earn credit points by disposing waste responsibly, share stories on our SOCIETY platform,
            shop for recycled products in the ONLINE STORE, and request Emergency Pickups when needed.
          </p>
        </div>

        {/* Mid Side - Navigation */}
        <div>
          <p className={`text-xl font-semibold mb-5 ${headingColor}`}>Company</p>
          <ul className={`flex flex-col gap-2 text-sm ${textColor}`}>
            <li>Home</li>
            <li>Society</li>
            <li>Online Store</li>
            <li>Emergency Pickup</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Side - Contact */}
        <div>
          <p className={`text-xl font-semibold mb-5 ${headingColor}`}>Get in Touch</p>
          <ul className={`flex flex-col gap-2 text-sm ${textColor}`}>
            <li>Email: EcoExchangeIndia.111@gmail.com</li>
            <li>Feedback & Suggestions</li>
            <li>Join our Blog Community</li>
          </ul>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <hr className={`border-t ${borderColor} mb-6`} />
      <p className={`text-center text-xs ${textColor}`}>
        © 2025 EcoExchangeIndia — All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
