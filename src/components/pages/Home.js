import React from 'react';
import '../../App.css';
import Footer from '../ContactUs';
import AboutUs from './AboutUs';
import OurTeam from './OurTeam';

function Home() {
  return (
    <>
      <AboutUs />
      <OurTeam />
      <Footer />
    </>
  );
}

export default Home;
