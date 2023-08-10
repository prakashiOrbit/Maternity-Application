import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { Routes, Route } from 'react-router-dom';
import OurTeam from './components/pages/OurTeam';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/aboutUs' element={< AboutUs />} />
        <Route path='/ourTeam' element={< OurTeam />} />
        <Route path='/contactUs' element={< ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
