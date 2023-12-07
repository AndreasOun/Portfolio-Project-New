import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Title from './components/Title';
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
