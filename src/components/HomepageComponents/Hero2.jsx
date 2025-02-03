import React from 'react'
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const NoHoverBtn = styled(Button)({
  borderColor: 'initial',
  '&:hover': {
    borderColor: 'white',
  },
});

export default function Hero2() {
  return (
    <section className='hero-two'>
      <div className="hero-content">
        <h1>Hey, Hej, Bonjour!</h1>
        <p>Capturing moments, Creating memories.</p>
        <NoHoverBtn variant="outlined" sx={{ color: 'white', border: '1px solid white',  marginRight: '10px' }} component={Link} to='/contact'>Let's Create!</NoHoverBtn>
        {/* <a href="/about" className="cta-btn">More about me</a> */}
      </div>
    </section>
  )
}
