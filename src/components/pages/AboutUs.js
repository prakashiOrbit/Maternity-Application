import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import '../../App.css';

export default function AboutUs() {
  return (
    <Card className='aboutUsCard'>
      <CardContent>
        <Typography variant='h4' className='aboutUsTitle'>
          JUST MOM THINGS
        </Typography>
        <Typography variant='body1' className='aboutUsContent'>
          Just Mom Things is the world’s best-known, most trusted pregnancy and parenting brand. The Just Mom Things brand mission drives everything we do, and it's as simple as it is powerful: “Support happy, healthy pregnancies and happy, healthy babies.Empowering, positive, personalized and relevant, Just Mom Things offers must-have information, support and community for every step of the parenting journey, from preconception and pregnancy to the baby years and beyond."
        </Typography>
      </CardContent>
    </Card>
  );
}
