import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import moonImage from './images/moon.png';
import sunImage from './images/sun.png';
import './Header.css';

const Header = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className={`header ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="header-name">
        <h1><Link to="/">Andreas Õun</Link></h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="header-mode-switch">
        <button type="button" onClick={toggleTheme}>
          <img 
            src={darkMode ? moonImage : sunImage}
            alt="Toggle Mode"
            className="mode-icon"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;