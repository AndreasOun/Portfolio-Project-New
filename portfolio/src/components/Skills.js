import React from 'react';
import { skills } from './data';
import './Skills.css';


const Skills = () => {
    return (
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <i className={`fab ${skill.icon}`}></i>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Skills;