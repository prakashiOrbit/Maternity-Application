import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import '../../App.css';
import sea from '../../Images/sea.jpg';
import waterfall from '../../Images/waterfall.jpg';

export default function OurTeam() {
  return (
    <>
      <div style={{ textAlign: 'center', paddingTop: '50px' }}>
        <h1 style={{ color: 'purple' }}>OUR TEAM</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          <Card style={{ marginRight: '50px', width: '450px' }}>
            <CardMedia
              component="img"
              height="400"
              image={sea}
              alt="RR"
              style={{ borderRadius: '70%' }}
            />
            <CardContent>
              <Typography variant="h5">RR</Typography>
              <Typography variant="h6">CEO</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam eu turpis at nunc gravida tincidunt.
              </Typography>
            </CardContent>
          </Card>
          <Card style={{ width: '450px', marginBottom: '20px' }}>
            <CardMedia
              component="img"
              height="400"
              image={waterfall}
              alt="BB"
              style={{ borderRadius: '70%' }}
            />
            <CardContent>
              <Typography variant="h5">BB</Typography>
              <Typography variant="h6">CTO</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam eu turpis at nunc gravida tincidunt.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}