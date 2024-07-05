import React, { useEffect } from 'react';
import { FaCertificate } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';
import { Link as ScrollLink, Element } from 'react-scroll';

const certifications = [
  { title: 'Foundations of Management', institution: 'IIM Bangalore' },
  { title: 'Management Information Systems', institution: 'NIT Warangal' },
  { title: 'Machine Learning', institution: 'Andrew NG, Coursera' },
  { title: 'DevOps, Cloud, and Agile Foundations', institution: 'Coursera' },
  { title: 'Google Cloud Big Data and Machine Learning Fundamentals', institution: 'Coursera' },
  { title: 'Business Intelligence Analyst Course', institution: 'Udemy' },
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
      <div className="container mx-auto py-14 px-8">
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
                className="bg-gray-800 rounded-lg overflow-hidden shadow-xl text-white transform hover:scale-105 transition duration-300 ease-in-out"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="p-6">
                <FaCertificate className="text-4xl mb-4 mx-auto" style={{ color: '#FFF0F5' }} />
                  <h2 className="text-xl font-bold text-center mb-2">{cert.title}</h2>
                  <p className="text-gray-400 text-sm text-center">{cert.institution}</p>
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
