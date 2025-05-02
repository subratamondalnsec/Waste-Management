import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'John Doe',
    image: '/profile1.png',
    feedback: 'EcoExchangeIndia has made waste recycling so convenient and rewarding. I now actively participate in reducing waste thanks to their platform.',
  },
  {
    name: 'Alex Smith',
    image: '/profile2.png',
    feedback: 'I never knew waste management could be this engaging and impactful. Kudos to EcoExchangeIndia for their innovative approach.',
  },
  {
    name: 'Priya Verma',
    image: '/profile3.png',
    feedback: 'EcoExchangeIndia brought real change in my community. We’re recycling more and wasting less!',
  },
  {
    name: 'David Lee',
    image: '/profile4.png',
    feedback: 'The rewards and gamification make recycling super fun. I check my leaderboard every day!',
  },
  {
    name: 'Sara Khan',
    image: '/profile5.png',
    feedback: 'I love how easy it is to track my recycling progress and earn rewards!',
  },
  {
    name: 'Carlos Mendes',
    image: '/profile6.png',
    feedback: 'Finally, a platform that makes environmental responsibility fun and motivating!',
  },
  {
    name: 'Emily Chen',
    image: '/profile7.png',
    feedback: 'EcoExchangeIndia helped my entire apartment community start recycling efficiently.',
  },
  {
    name: 'Vikram Patel',
    image: '/profile8.png',
    feedback: 'Gamification was a game changer! Now even kids are excited about recycling.',
  },
  {
    name: 'Aisha Noor',
    image: '/profile9.png',
    feedback: 'I’ve seen a noticeable decrease in our waste since using EcoExchangeIndia!',
  },
  {
    name: 'Oliver Brown',
    image: '/profile10.png',
    feedback: 'The challenges and badges keep me engaged month after month!',
  },
  {
    name: 'Meera Joshi',
    image: '/profile11.png',
    feedback: 'It feels great to contribute to sustainability while earning cool rewards.',
  },
  {
    name: 'Leo Martin',
    image: '/profile12.png',
    feedback: 'EcoExchangeIndia really bridges the gap between awareness and action!',
  },
  {
    name: 'Ananya Rao',
    image: '/profile13.png',
    feedback: 'They have the best community recycling programs I’ve seen!',
  },
  {
    name: 'Sophia Wilson',
    image: '/profile14.png',
    feedback: 'Highly recommend it for schools and colleges looking to promote recycling.',
  },
];

const Testimonials = ({ isDarkMode }) => {
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const cardColor = isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800';

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className={`${bgColor} py-16 px-6 font-['Inter']`}>
      <div className="max-w-7xl mx-auto">
        <p className={`text-2xl font-semibold uppercase mb-2 tracking-wide ${isDarkMode ? 'text-green-400' : 'text-gray-900'}`}>
          Client Stories
        </p>
        <h2 className={`text-3xl sm:text-4xl font-extrabold mb-10 ${textColor} py-3`}>
          What Our Users Say
        </h2>

        <div className=" overflow-hidden relative">
          <motion.div
            className="flex gap-6 whitespace-nowrap my-3"
            animate={{ x: ['-300%', '0%'] }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: 'linear',
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`flex-none w-80 p-6 rounded-2xl shadow-lg border ${cardColor} transition-all duration-300`}
              >
                <div className="flex space-x-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-sm italic leading-relaxed mb-6 break-words whitespace-normal">{`"${testimonial.feedback}"`}</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={`Portrait of ${testimonial.name}`}
                    className="w-12 h-12 rounded-full object-cover border-2 border-green-400"
                  />
                  <div>
                    <h4 className="text-sm font-bold">{testimonial.name}</h4>
                    <p className="text-xs text-gray-400">Verified Recycler</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
