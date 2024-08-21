import { useState } from 'react'
import Masonry from 'react-masonry-css';
import './MasonryGrid.css'

// import images
import radiohead from '../assets/photos/radiohead.png'
import kendricklamar from '../assets/photos/kendricklamar.jpg'
import fashion1 from '../assets/photos/fashion1.jpg'
import fashion2 from '../assets/photos/fashion2.jpg'
import fashion3 from '../assets/photos/fashion3.jpg'
import fashion4 from '../assets/photos/fashion4.jpg'
import fashion5 from '../assets/photos/fashion5.jpg'
import fashion6 from '../assets/photos/fashion6.jpg'
import fashion7 from '../assets/photos/fashion7.jpg'
import albumart1 from '../assets/photos/albumart1.jpg'
import maternity1 from '../assets/photos/maternity1.jpg'
import wedding1 from '../assets/photos/wedding1.jpg'

export default function Photography() {

  const [enlarged, setEnlarged] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const imgArr = [
    {
      id: 1,
      content: fashion1
    },
    {
      id: 2,
      content: fashion2
    },
    {
      id: 3,
      content: fashion3
    },
    {
      id: 4,
      content: fashion4
    },
    {
      id: 5,
      content: fashion5
    },
    {
      id: 6,
      content: fashion6
    },
    {
      id: 7,
      content: fashion7
    },
    {
      id: 8,
      content: albumart1
    },
    {
      id: 9,
      content: maternity1
    },
    {
      id: 10,
      content: wedding1
    },
    {
      id: 11,
      content: radiohead
    },
    {
      id: 12,
      content: kendricklamar
    }

  ]


  const handleClick = (id) => {
    if (id === enlarged) {
      setIsAnimating(true)
      setTimeout(() => {
        setIsAnimating(false)
        setEnlarged(null)
      }, 500)
    } else {
      setEnlarged(id === enlarged ? null : id)
    }
    
  }

  const breakPoint = {
    default:3,
    1100: 2,
    700: 1
  }

  const items = imgArr.map((img) => (

    <img
      key={img.id}
      src={img.content}
      onClick={() => handleClick(img.id)}
      className={`masonry-item`}
      width='50%'
    />

  ));



  return (
    <div className="App">
      <Masonry
        breakpointCols={breakPoint}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {items}
      </Masonry>
      {enlarged && (
        <div className={`overlay ${enlarged ? 'show' : ''}`} onClick={() => handleClick(null)}>
          <img height={'35%'} src={imgArr.find(img => img.id === enlarged).content} alt="enlarged" className={`overlay-content ${isAnimating ? 'hide': 'show'}`} />
        </div>

      )}



    </div>
  )
}
