import React from "react";
import food from '../assets/food.png';  
import plant from '../assets/plant.jpeg'; 
import todo from '../assets/todo.webp'; 
import dash from '../assets/dash.svg';  
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover" src={image} alt={title} />  {}
            </a>
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className="m-2 sm:m-4 lg:m-6 flex justify-between">
                <div className="flex flex-wrap gap-2 pl-2">
                    {technologies.map((tag, index) => (
                        <p key={`${index}-${tag}`} className="text-[14px] text-blue-500">
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    const projects = [
        {
            title: 'Food Website',
            description: 'A dynamic web application crafted using HTML, CSS, and JS. This project is a modern platform that allows users to order food.',
            image: food,  
            git: 'https://github.com/prashanth11102/foodwebsite',
            technologies: ['HTML', 'CSS', 'JS']
        },
        {
            title: 'ToDo',
            description: 'ToDo is an application exclusively designed using Django and Python. This project serves as a platform to manage tasks effectively.',
            image: todo,  
            git: 'https://github.com/prashanth11102/todo',
            technologies: ['Python', 'Django']
        },
        {
            title: 'Plant Disease Identifier',
            description: 'A CNN-based web app using Flask, Python, TensorFlow, and Keras with 95% accuracy in classifying potato leaf diseases.',
            image: plant,  
            git: 'https://github.com/prashanth11102/plant-disease-classifier',
            technologies: ['Flask', 'Python', 'TensorFlow', 'Keras', 'HTML', 'CSS']
        },
        {
            title: 'Finance Dashboard',
            description: 'Stunning dashboard in Power BI for tracking expenses and income, and managing financial goals by utilizing DAX for custom calculations.',
            image: dash,  
            git: 'https://github.com/prashanth11102/personal-finance-dashboard',
            technologies: ['Power BI', 'DAX']
        }
    ];

    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {projects.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Projects;
