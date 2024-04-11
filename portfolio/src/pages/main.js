import React from 'react';
import { aboutMeText, skills, otherSkills } from '../components/data';
import '../styles/Title.css';
import '../styles/AboutMe.css';
import '../styles/Skills.css';

const Title = () => {
  return (
    <div className="title-container">
      <h1 className="title">Hello, I'm a Software Developer</h1>
    </div>
  );
};

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="text-container">
        <h2>About Me</h2>
        <p>{aboutMeText}</p>
      </div>
      <div className="image-container">
        <img
          src={process.env.PUBLIC_URL + '/images/profile.png'}
          alt="Profile"
          className="profile-image"
        />
      </div>
    </div>
  );
};

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

const Profile = () => {
  return (
    <div>
      <Title />
      <AboutMe />
      <Skills />
    </div>
  );
};


export default Profile;