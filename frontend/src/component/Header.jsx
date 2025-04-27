import React, { useEffect, useState } from 'react';

const Header = (props) => {
  const isDarkMode=props.isDarkMode;
  const setIsDarkMode=props.setIsDarkMode;

  const texts = ['Cleaning the Planet', 'Recycling Smart', 'Earning Rewards'];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const fullText = texts[textIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayText((prev) => fullText.substring(0, prev.length + 1));
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }
      } else {
        // Deleting
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
    <section className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}  mt-[64px] font-['Inter']`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left section */}
        <div className="md:w-1/2 max-w-lg ">
          <h1 className="text-3xl sm:text-2xl font-extrabold  leading-10 ">
            Ai Powered By Smart Waste Management System
            <br />
            Start&nbsp;
            <span className="text-[#048b14]">&lt;{displayText}&gt;</span>
            <br />
            With Our EcoExchange Platform
          </h1>
          <p className={`mt-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm sm:text-base leading-relaxed max-w-md`}>
          Empowering you to make a difference —<br/>
          Our intelligent waste management system turns your everyday waste into real-world value, promoting a cleaner environment, smarter recycling, and reward-based participation for a better tomorrow.
            <br />
            accessible for everyone!
          </p>
          <button
            type="button"
            className="mt-8 bg-[#E37B63] text-white text-sm sm:text-base font-semibold rounded-md px-6 py-3 hover:bg-[#d66a53] transition-colors"
          >
            Get Started
          </button>
        </div>

        {/* Right section - images */}
        <div className="md:w-1/2 flex flex-col gap-6 sm:gap-8 relative">
          <div className="flex gap-6 sm:gap-8">
            <div className="relative rounded-lg overflow-hidden w-36 sm:w-44 h-24 sm:h-28">
              <img
                src={`${isDarkMode ? "public/home1_dark.png" : "public/home1.jpg"} `}
                alt="Person coding"
                className="w-full h-full object-cover"
              />
              {/* <img
                src="https://storage.googleapis.com/a1aa/image/f4ab1dec-6edd-4ae6-ce8e-eb8944bc498b.jpg"
                alt="TensorFlow icon"
                className="absolute bottom-1 right-1 w-8 h-8"
              /> */}
              {/* <img
                src="https://storage.googleapis.com/a1aa/image/e109bed7-3078-4aeb-b400-303d26f93b87.jpg"
                alt="SQL icon"
                className="absolute top-1 right-1 w-8 h-8"
              /> */}
            </div>

            <div className="relative rounded-lg overflow-hidden w-36 sm:w-44 h-28 sm:h-36 bg-[#f3f6f7] flex items-center justify-center outline-none">
              <img
                src={`${isDarkMode ? "public/home2_dark.jpg" : "public/home2.png"} `}
                alt="Smiling woman"
                className="w-full h-full object-cover rounded-lg "
              />
              {/* <img
                src="https://storage.googleapis.com/a1aa/image/a0623d14-671d-4118-5b22-029c50eb3a23.jpg"
                alt="Java icon"
                className="absolute -top-3 left-0 w-8 h-8"
              />
              <img
                src="https://storage.googleapis.com/a1aa/image/efbb037e-d3eb-4f70-7df4-0f15ef47c277.jpg"
                alt="Python icon"
                className="absolute top-1 right-0 w-8 h-8"
              /> */}
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden w-72 sm:w-96 h-44 sm:h-56">
            <img
              src={`${isDarkMode ? "public/home3_dark.jpg" : "public/home3.jpg"} `}
              alt="Man working on computer"
              className="w-full h-full object-cover rounded-lg"
            />
            {/* <img
              src="https://storage.googleapis.com/a1aa/image/0715c504-e49e-44aa-af86-099338f257ec.jpg"
              alt="CSS3 icon"
              className="absolute bottom-1 left-1 w-8 h-8"
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/c1e2aa73-3023-4076-4b5f-b1a56430e01f.jpg"
              alt="Fire icon"
              className="absolute top-1 right-1 w-8 h-8"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
