import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [modeText, setModeText] = useState('Light Mode');

  const toggleTheme = (isDarkMode) => {
    setDarkMode(isDarkMode);
    setModeText(isDarkMode ? 'Dark Mode' : 'Light Mode');
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, modeText }}>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>{children}</div>
    </ThemeContext.Provider>
  );
};