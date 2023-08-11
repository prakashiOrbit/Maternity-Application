import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { Routes, Route } from 'react-router-dom';
import OurTeam from './components/pages/OurTeam';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/ContactUs';
import React, { useState } from 'react';

function App() {
  const handleClick = () => setClick(!click);
  const [click, setClick] = useState(false);

  return (
    <>
      <Navbar />
     
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
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
