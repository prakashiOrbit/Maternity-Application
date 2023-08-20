import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box, Container } from '@mui/material';
import Bipin from '../../Images/Bipin.png';
import Dr from '../../Images/Dr.png';

export default function OurTeam() {
  return (
    <>
      <Container maxWidth="xl">
        <Box textAlign="center" paddingTop="50px" sx={{ marginTop: "40px" }}>
          <Typography variant="h2" className='aboutUsTitle'>
            OUR TEAM
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            flexDirection="row"
            flexWrap="wrap"
          >
            <Card style={{ marginRight: '10px', width: '450px', marginTop: "90px" }}>
              <CardMedia
                component="img"
                height="400"
                image={Dr}
                alt="RR"
                style={{ borderRadius: '70%' }}
              />
              <CardContent>
                <Typography variant="h5">Dr. Gregg Givens</Typography>
                <Typography variant="h6">Lead founder & Advisor</Typography>
                <Typography variant="body1" style={{ textAlign: "justify" }}>
                  Our lead founder is Dr. Gregg Givens. Dr. Givens is a Professor Emeritus of East Carolina University with 40+ years’ experience in clinical audiology at medical centers, University clinics and teleaudiology. Dr. Givens has national and international scientific publications and holds 6 U.S. patents in the area of telehealth. He has been awarded the credentials of Fellow in both the American Speech-Language-Hearing Association and the American Academy of Audiology.
                </Typography>
              </CardContent>
            </Card>

            <Card style={{ width: '450px', marginBottom: '20px', marginTop: "100px" }}>
              <CardMedia
                component="img"
                height="400"
                image={Bipin}
                alt="BB"
                style={{ borderRadius: '70%' }}
              />
              <CardContent>
                <Typography variant="h5">Bipin RR</Typography>
                <Typography variant="h6">Product Design & Tech Partner</Typography>
                <Typography style={{ textAlign: "justify" }}>
                  Bipin RR is the Founder CEO of iOrbit Digital Technologies, an IoT based enterprise with a global footprint of clientele and product development teams, focused on the med tech space with world class operations at the convergence of Clinical, Behavioral and Technology. Bipin has a comprehensive experience of over 25 years in global business development, technology strategy and solutioning and in the management of global teams.
                </Typography>
              </CardContent>
            </Card>

          </Box>
        </Box>
      </Container>
    </>
  );
}
