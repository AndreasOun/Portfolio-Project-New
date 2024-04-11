import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/main';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/pages/main" />} />
        <Route exact path="/pages/main" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
