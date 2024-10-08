import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full mb-6 mt-0'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' style={{ background: '#151030' }}>
        <img src={service.icon} alt='some_icon' className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{service.title}</h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div className='relative'>
      <div className='area'>
        <ul className='circles'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className='content'>
        <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
          <div className='flex flex-col justify-around'>
            <div className='sm:px-16 px-2'>
              <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
              <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
                👨‍💻 Hi, This is Prashanth Reddy, a 2024 graduate 🎓 from National Institute of Technology. <br/>
                I am eager to 🚀 launch my career in Data Science and Software Development roles.<br/>
                My academic background and hands-on project experience have equipped me with a versatile skill set, allowing me to bring 💡 fresh ideas and a strong work ethic to any dynamic team.<br/>
                Driven by a passion for applying technology to solve 🌍 real-world problems and a desire to contribute to backend solutions and 📊 data-driven decision making. <br/>
                Committed to 📚 continuous learning, innovation, and 🤝 collaboration.<br/>
                Outside of tech, I love travelling and 📸 photography is my creative outlet, allowing me to capture and share meaningful moments. <br/>
                <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/prashanth-reddy-a8a304201/' rel="noreferrer" target='_blank'>My LinkedIn Profile</a><br/>
              </p>
              <ButtonLink url='https://drive.google.com/file/d/1aJCB9VpboyIt2QqKlVU71euQlh4Ak8uI/view?usp=drive_link' text='View Resume →' padding={`p-3`} />
            </div>
            <div className='mt-20 flex justify-center flex-wrap gap-7'>
              {services.map((service, index) => (
                <ServiceCard service={service} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
