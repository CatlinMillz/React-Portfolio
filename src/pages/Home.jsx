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

      <Box sx={{ paddingTop: '30px', paddingBottom: '30px', border: '2px solid black', backgroundColor: '#3B5249'}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px', border: '2px solid black', marginBottom: '5%',  backgroundColor: '#F4FDD9' }}>
          <h3>Find out more about me</h3>


          <Button variant="outlined" sx={{ color: 'black', border: '2px solid black' }} onClick={() => window.location.replace('/about')} >
            Click Here
          </Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px', border: '2px solid black', backgroundColor: '#F4FDD9'  }}>
          <Button variant="outlined" sx={{ color: 'black', border: '2px solid black' }} onClick={() => window.location.replace('/about')} >
            Click Here
          </Button>

          <h3>Find out more about me</h3>


        </Box>
      </Box>

    </>
  )
}