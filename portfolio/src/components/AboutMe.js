import React from 'react';
import { aboutMeText } from './data'; 
import './AboutMe.css';



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

export default AboutMe;