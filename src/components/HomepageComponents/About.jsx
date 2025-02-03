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
      <p>I'm Catlin but you can call me Cat! I'm a passionate photographer with over 15 years of experience based in Fort Lauderdale, FL. I specialize in portrait and event photography. From professional headshots to important life milestones such as engagements, weddings, and maternity, to your moments with your family and furry friends, from the runway to the big stage; whatever your needs are, my trusty camera and I are here to help you achieve your vision. Let's create something amazing together!
      </p>
      <NoHoverBtn variant="outlined" sx={{ color: 'black', border: '1px solid black', marginRight: '10px' }} component={Link} to='/about'>Get To Know Me Better</NoHoverBtn>
     
    </section>
  )
}
