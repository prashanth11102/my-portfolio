import React, { useEffect } from 'react';
import { FaMedal } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';


const achievements = [
  { title: 'Institute Merit Scholarship Holder', details: '2022-23 & 2023-24' },
  { title: 'National Cadet Corps (NCC) - C Certificate', details: '2020-23' },
  { title: 'OPJEMS Scholar', details: 'Honors 100 exceptional students from top IITs and NITs, 2021' },
];

const Achievements = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-black min-h-screen pt-8">
      <div className="container mx-auto py-12 px-8">
      <div className="text mb-6">
          <p className="font-light text-l text-white">MY MAJOR ACHIEVEMENTS SO FAR.</p>
        </div>
        <div className="relative">
          <div className="absolute border-r-4 border-white-500 h-full left-1/2 transform -translate-x-1/2"></div>
          {achievements.map((ach, index) => (
            <div
              key={index}
              className={`mb-4 flex justify-${index % 2 === 0 ? 'start' : 'end'} items-center w-full`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                <div
                  className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-white-500 relative transform hover:scale-105 transition duration-300 ease-in-out"
                  style={{ left: index % 2 === 0 ? '0' : 'auto', right: index % 2 !== 0 ? '0' : 'auto' }}
                >
                  <div className="flex items-center mb-4">
                    <FaMedal className="text-4xl mr-4 text-yellow-400" />
                    <h2 className="text-2xl font-semibold text-white">{ach.title}</h2>
                  </div>
                  <p className="text-gray-300">{ach.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Achievements;
