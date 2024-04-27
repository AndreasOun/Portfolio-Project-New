import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/main';
import './App.css';
import Projects from './pages/projects';
import Contact from './pages/contact';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/pages/main" />} />
        <Route exact path="/pages/main" element={<Profile />} />
        <Route exact path="/pages/projects" element={<Projects/>} />
        <Route exact path="/pages/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
};

export default App;
