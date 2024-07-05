import React from 'react';
import { FaDatabase, FaChartBar, FaPython, FaReact, FaHtml5, FaCss3, FaJsSquare, FaCloud, FaCogs, FaCode, FaTable, FaTasks, FaDna, FaNetworkWired } from 'react-icons/fa';
import { Parallax } from 'react-parallax';
import Footer from './Footer';
import '../index.css';

const skills = [
  { title: 'Data Science', icon: FaDna },
  { title: 'Power BI', icon: FaChartBar },
  { title: 'Google Cloud', icon: FaCloud },
  { title: 'SQL', icon: FaDatabase },
  { title: 'Data Analysis', icon: FaTable },
  { title: 'Data Structures', icon: FaTasks },
  { title: 'Machine Learning', icon: FaCogs },
  { title: 'JavaScript', icon: FaJsSquare },
  { title: 'CSS', icon: FaCss3 },
  { title: 'HTML', icon: FaHtml5 },
  { title: 'MS Excel', icon: FaTable },
  { title: 'Python', icon: FaPython },
  { title: 'DBMS', icon: FaDatabase },
  { title: 'C++', icon: FaCode },
  { title: 'Django', icon: FaNetworkWired },
  { title: 'React', icon: FaReact },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <Parallax bgImage="/path/to/background-image.jpg" strength={300}>
        <div className="skills-content">
          <h1 className="skills-title">Skills</h1>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <skill.icon className="skill-icon" />
                <h2 className="skill-title">{skill.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </Parallax>
      <Footer />
    </div>
  );
};

export default Skills;
