import React from 'react';
import Header from './components/Header';
import { Title, AboutMe, Skills } from './pages/main';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Title />
      <AboutMe />
      <Skills />
    </div>
  );
};

export default App;
