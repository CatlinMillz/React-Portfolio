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

export default function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p> Hi, I'm John Doe, a passionate photographer based in New York. I specialize in portrait, landscape, and event photography, capturing raw, emotional moments.
      </p>
      <NoHoverBtn variant="outlined" sx={{ color: 'black', border: '1px solid black', marginRight: '10px' }} component={Link} to='/about'>Get To Know Me</NoHoverBtn>
     
    </section>
  )
}
