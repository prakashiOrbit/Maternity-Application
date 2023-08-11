import React from 'react';
import '../../App.css';
import Footer from '../ContactUs';
import AboutUs from './AboutUs';
import OurTeam from './OurTeam';
import { Card, CardMedia } from '@mui/material';
import baby1 from '../../Images/baby1.jpg';
import { CardActionArea } from '@mui/material';

function Home() {
  return (
    <>
      <Card style={{ maxWidth: '1250px', margin: '0 auto', borderRadius: '5%', marginTop: "50px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Ellipse Image"
            height="450"
            image={baby1}
          />
        </CardActionArea>
      </Card>
      <AboutUs />
      <OurTeam />
      <Footer />
    </>
  );
}

export default Home;
