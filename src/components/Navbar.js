import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Card, Typography, CardMedia } from '@mui/material';
import mat from '../Images/jmt.png';
import baby1 from '../Images/baby1.jpg';
import { CardActionArea } from '@mui/material';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={mat} alt='Logo' />
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <Typography variant="h4" style={{ color: "white", width: "100%", marginLeft: "18px", fontWeight: "bold" }}>JUST MOM THINGS</Typography>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/aboutUs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/ourTeam'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Our Team
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contactUs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
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
    </>
  );
}

export default Navbar;