import React from 'react';
import { useState, useEffect, useRef } from 'react';

import Footer from './Footer';

// Replace with your name
const name = 'Prashanth';

const Home = () => {

    const ref = useRef(0);
    const [text, setText] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            if (ref.current < name.length) {
                ref.current++;
                setText((prevText) => prevText + name[ref.current - 1]);
            }
        }, 100); // Adjusted for faster typing effect
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='area relative z-0 bg-black w-screen h-screen flex flex-col justify-between'>
            <ul className="circles">
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
            <ul className="boxes">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className='hero flex-grow flex flex-col justify-center items-center text-white' id='hero'>
                <div className='pt-4 h-36 backdrop-blur-sm rounded-3xl'>
                    <h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>Hi, I'm&nbsp;<span className='text-blue-200 font-extrabold'>{text}</span></h1>
                </div>
                <div className='w-full flex flex-col justify-center items-center mt-6'>
                    <p className='text-4xl font-bold mb-1'>Welcome to my portfolio</p>
                    <p className='mt-3 text-xl'>I am passionate about Software Development and Big Data Analytics.</p>
                    <p className='mt-2 text-lg'>I enjoy working on challenging projects that solve real-world problems.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
