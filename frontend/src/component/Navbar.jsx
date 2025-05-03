import React, { useState } from "react";
import { FaMoon, FaSun, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const isDarkMode=props.isDarkMode
  const setIsDarkMode=props.setIsDarkMode
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
<nav className={`fixed top-4 left-1/2 w-full z-50 backdrop-blur-lg shadow-lg -translate-x-1/2 px-4 py-3 rounded-full  transition-all  duration-300 ${isDarkMode ? "bg-black/10 text-white" : "bg-white/10 text-black"}`}>
  <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 sm:px-12 py-4">
    {/* Logo */}
    <div className="text-lg font-bold">
      <NavLink to="/home" className="hover:underline">EcoExchangeIndia</NavLink>
    </div>

    {/* Links */}
    <div className="flex gap-6 text-base font-medium">
      <NavLink to="/home" className="hover:underline">Home</NavLink>
      <NavLink to="/society" className="hover:underline">Society</NavLink>
      <NavLink to="/shop" className="hover:underline">Online Shop</NavLink>
      <NavLink to="/service" className="hover:underline">Service</NavLink>
    </div>

    {/* Actions */}
    <div className="flex items-center gap-4">
    <button onClick={() => setIsDarkMode(prev => !prev)} className="text-xl cursor-pointer" >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>

      {isLoggedIn ? (
        <div className="relative">
          <button onClick={() => setShowProfileMenu(!showProfileMenu)} className="text-xl cursor-pointer">
            <FaUser />
          </button>
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-xl z-10">
              <NavLink to="/dashboard" className="block px-4 py-2 hover:bg-gray-200">Dashboard</NavLink>
              <NavLink to="/coin" className="block px-4 py-2 hover:bg-gray-200">Coin</NavLink>
              <button onClick={toggleLogin} className="w-full text-left px-4 py-2 hover:bg-gray-200">Log Out</button>
            </div>
          )}
        </div>
      ) : (
        <button onClick={toggleLogin} className="bg-blue-600 text-white px-4 py-2 rounded-lg">Login</button>
      )}
    </div>
  </div>
</nav>

  );
};

export default Navbar;