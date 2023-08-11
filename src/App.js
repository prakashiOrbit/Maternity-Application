import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { Routes, Route } from 'react-router-dom';
import OurTeam from './components/pages/OurTeam';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/ContactUs';
import React, { useState } from 'react';
import Privacy from './components/Privacy';
import Terms from './components/Terms';

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
        <Route path='/privacy' element={< Privacy />} />
        <Route path='/terms' element={< Terms />} />
      </Routes>
    </>
  );
}

export default App;
