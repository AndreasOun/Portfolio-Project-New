import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import './Header.css';

const Header = () => {
  const { darkMode, toggleTheme, modeText } = useTheme();

  return (
    <header className={`header ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="header-name">
        <h1><Link to="/">Andreas Õun</Link></h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li><Link to="/projects">PROJECTS</Link></li>
          <li><Link to="/skills">SKILLS</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </nav>
      <div className="header-mode-switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => toggleTheme(!darkMode)}
          id="mode-switch"
        />
        <label htmlFor="mode-switch" className="slider"></label>
        <p>{modeText}</p>
      </div>
    </header>
  );
};

export default Header;