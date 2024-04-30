import React from 'react'
import Hero from '../components/Hero'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

export default function Home() {
  return (

    <>
      <Hero />

      <Box sx={{ paddingTop: '30px', paddingBottom: '30px',}}>
        <Box sx={{  padding: '30px', marginBottom: '5%'}}>
          <p>A photographer for 15 years, I originally started my professional journey studying my BFA at UIUC in 2012-2015. I have photographed countless concerts, weddings, engagements, runway shows, you name it.</p>

          <p> I attended the Full Stack Development bootcamp through UM in 2023-2024. I have experience with HTML, CSS, JavaScript, Node.js, Express, MySQL, MongoDB, and React</p>

          {/* <Button variant="outlined" sx={{ color: 'black', border: '2px solid black' }} onClick={() => window.location.replace('/about')} >
            Click Here
          </Button> */}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px', border: '1px solid black', boxShadow: '0px 0px 3px 3px #519872',  marginBottom: '2%' }}>
          <Button variant="outlined" sx={{ color: 'black', border: '1px solid black', fontFamily:"Shadows Into Light"}}  onClick={() => window.location.replace('/photography')} >
            Click Here
          </Button>

          <h3>Check out my Photography Portfolio</h3>


        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px', border: '1px solid black', boxShadow: '0px 0px 5px 5px #938BA1' }}>

          <h3>Check out my Coding Portfolio</h3>

          <Button variant="outlined" sx={{ color: 'black', border: '1px solid black', fontFamily:"Shadows Into Light" }} onClick={() => window.location.replace('/development')} className='buttonHover'>
            Click Here
          </Button>



        </Box>
      </Box>

    </>
  )
}