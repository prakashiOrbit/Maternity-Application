import React from 'react';
import './ContactUs.css';
import { Link } from 'react-router-dom';
import mat from '../Images/jmt.png'

function ContactUs() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Copyright © 2023 Just Mom Things - All Rights Reserved . Powered by iOrbit
        </p>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <Link to='/'>Terms & Conditions</Link>
          </div>
          <div className='footer-link-items'>
            <Link to='/'>Privacy Policy</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Just Mom Things
              <img src={mat} style={{ width: "60px", marginLeft: "20px" }}></img>
            </Link>
          </div>
          <div className='social-icons'>
            <a
              className='social-icon-link facebook'
              href='https://www.facebook.com/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a>
            <a
              className='social-icon-link youtube'
              href='https://www.youtube.com/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </a>
            <a
              className='social-icon-link twitter'
              href='https://www.linkedin.com/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
