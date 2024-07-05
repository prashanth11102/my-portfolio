import React from 'react';
import { FaGithub, FaTelegram } from 'react-icons/fa';
import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';


const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className='bg-slate-900 p-4' style={{ cursor: 'default' }}>
			<div className='flex justify-between flex-wrap gap-4'>
				<p className='text-white text-center w-full sm:w-auto font-light'>© {year} Prashanth. All rights reserved.</p>
				<div className='text-white flex justify-around sm:w-[250px] w-full'>
					
					<a href="mailto:prasanthreddymaddirala@gmail.com" className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<FiMail className='text-xl' />
					</a>
					<a href="https://t.me/prashanthreddy7/" rel="noreferrer" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<FaTelegram className='text-xl' />
					</a>
					<a href="https://www.linkedin.com/in/prashanth-reddy-a8a304201/" rel="noreferrer" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<AiFillLinkedin className='text-xl' />
					</a>
					<a href="https://github.com/prashanth11102/" target='_blank' rel="noreferrer" className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }} >
						<FaGithub className='text-xl' />
					</a>
					<a href="https://www.instagram.com/prashanth.rdy/" rel="noreferrer" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<AiFillInstagram className='text-xl' />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;