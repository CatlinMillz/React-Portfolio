import React from 'react'
import { Link } from 'react-router-dom';
// pick 4 images to features
import featuredOne from '../../assets/featuredphotos/featuredOne.jpg'
import featuredTwo from '../../assets/featuredphotos/featuredTwo.jpg'
import featuredThree from '../../assets/featuredphotos/featuredThree.jpg'
import featuredFour from '../../assets/featuredphotos/featuredFour.jpg'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const NoHoverBtn = styled(Button)({
  borderColor: 'initial',
  '&:hover': {
    borderColor: '#3B5249',
  },
});

export default function FeaturedPhotos() {
  const photos = [
    featuredOne,
    featuredTwo,
    featuredThree,
    featuredFour
  ]
  return (
    <section className="featured-photos" id="portfolio">
      <h2>Featured Work</h2>
      <div className="photo-grid"> {
        photos.map((photo, index) => (
          <div key={index} className="photo-item">
            <img src={photo} alt={`Featured ${index + 1}`} />
          </div>))}
      </div>
      <NoHoverBtn variant="outlined" sx={{ color: 'black', border: '1px solid black', fontFamily: "Shadows Into Light", marginRight: '10px' }} component={Link} to='/photography'>View My Work</NoHoverBtn>
          {/* <a href="/photography" className="cta-btn"></a> */}
    </section>
  )
}
