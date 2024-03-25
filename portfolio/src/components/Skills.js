import React from 'react';
import { skills, otherSkills } from './data';
import './Skills.css';


const Skills = () => {
  return (
    <div>
      <div className="skills-container">
        <h2>Technologies I use:</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <i className={`fab ${skill.icon} skill-icon`}></i>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="other-container">
        <h2>Other:</h2>
        <div className="other-list">
          {otherSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <i className={`fab ${skill.icon} skill-icon`}></i>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
  
export default Skills;