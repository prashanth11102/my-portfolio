import React, { useEffect } from 'react';
import { FaCertificate } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';
import { Link as ScrollLink, Element } from 'react-scroll';

const certifications = [
  { title: 'Foundations of Management', institution: 'IIM Bangalore' },
  { title: 'The Business Intelligence Analyst', institution: 'Udemy' },  
  { title: 'Machine Learning', institution: 'Andrew NG, Coursera' },
  { title: 'DevOps, Cloud, and Agile Foundations', institution: 'Coursera' },
  { title: 'Google Cloud Big Data and Machine Learning Fundamentals', institution: 'Coursera' },
  { title: 'Management Information Systems Elective Course', institution: 'NIT Warangal' },
  { title: 'Problem Solving and Computer Programming', institution: 'NIT Warangal' },
  { title: 'Generative AI: Prompt Engineering Basics', institution: 'Coursera' },
  { title: 'Introduction to Data Science in Python', institution: 'Coursera' },
];

const Certifications = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-black min-h-screen pt-8">
      <div className="container mx-auto py-12 px-8">
        <div className="text-center mb-6">
          <p className="font-light text-l text-white">MY COURSEWORKS & CERTIFICATIONS SO FAR.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <ScrollLink
              key={index}
              to={`cert-${index}`}
              smooth={true}
              duration={500}
              offset={-50}
              className="cursor-pointer"
            >
              <div
                className="bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-lg overflow-hidden shadow-xl text-white transform hover:scale-105 transition duration-300 ease-in-out"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="p-6">
                  <FaCertificate className="text-4xl mb-4 mx-auto text-gray-300" />
                  <h2 className="text-xl font-semibold text-center mb-2">{cert.title}</h2>
                  <p className="text-gray-300 text-sm text-center">{cert.institution}</p>
                </div>
              </div>
            </ScrollLink>
          ))}
        </div>
      </div>
      {certifications.map((cert, index) => (
        <Element key={index} name={`cert-${index}`} className="element"></Element>
      ))}
      <Footer />
    </div>
  );
};

export default Certifications;
