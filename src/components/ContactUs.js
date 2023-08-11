import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import mat from '../Images/jmt.png';

function ContactUs() {
  return (
    <Box sx={{ bgcolor: '#242424', py: 4, display: 'flex', justifyContent: 'center' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ color: '#fff', mb: 3 }}>
              <Typography variant="h6" component="div">
                Just Mom Things
              </Typography>
              <Link to='/' className='social-logo' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <img src={mat} alt='Logo' style={{ width: '60px', marginLeft: '20px' }} />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{textAlign: "center"}}>
            <Box sx={{ color: '#fff', mb: 3 }}>
              <Typography variant="h6" component="div" >
                Links
              </Typography>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                  <Link to='/' style={{ color: '#fff', textDecoration: 'none' }}>
                    Terms & Conditions
                  </Link>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <Link to='/' style={{ color: '#fff', textDecoration: 'none' }}>
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ color: '#fff', mb: 3 }}>
              <Typography variant="h6" component="div">
                Connect With Us
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton
                  href='https://www.facebook.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Facebook'
                  sx={{ color: '#fff' }}
                >
                  <i className='fab fa-facebook-f' />
                </IconButton>
                <IconButton
                  href='https://www.youtube.com/'
                  target='_blank'
                  aria-label='Youtube'
                  sx={{ color: '#fff' }}
                >
                  <i className='fab fa-youtube' />
                </IconButton>
                <IconButton
                  href='https://www.linkedin.com/'
                  target='_blank'
                  aria-label='LinkedIn'
                  sx={{ color: '#fff' }}
                >
                  <i className='fab fa-linkedin' />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', color: '#fff', mt: 3 ,textAlign: "center"}}>
          <Typography variant="body2">
            Copyright © 2023 Just Mom Things - All Rights Reserved. Powered by
            iOrbit
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactUs;
