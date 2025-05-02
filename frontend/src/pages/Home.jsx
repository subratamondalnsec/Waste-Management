import React from 'react'
import Header from '../component/Header'
import HeroSection from '../component/HeroSection';
import CoreOfferings from '../component/CoreOfferings';
import CallToAction from '../component/CallToAction';
import Testimonials from '../component/Testimonials';
import Footer from '../component/Footer';


const Home = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <HeroSection isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <CoreOfferings isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <CallToAction isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Testimonials isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    </>
  )
  
};


export default Home