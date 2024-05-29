import { useState } from 'react'
import Masonry from 'react-masonry-css';
import './MasonryGrid.css'

export default function Photography() {

  const [enlarged, setEnlarged] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const imgArr = [
    {
      id: 1,
      content: 'https://picsum.photos/200/293'
    },
    {
      id: 2,
      content: 'https://picsum.photos/200/219'
    },
    {
      id: 3,
      content: 'https://picsum.photos/200/200'
    },
    {
      id: 4,
      content: 'https://picsum.photos/200/201'
    },
    {
      id: 5,
      content: 'https://picsum.photos/200/202'
    },
    {
      id: 6,
      content: 'https://picsum.photos/200/203'
    },
    {
      id: 7,
      content: 'https://picsum.photos/200/204'
    },
    {
      id: 8,
      content: 'https://picsum.photos/200/205'
    },
    {
      id: 9,
      content: 'https://picsum.photos/200/206'
    },
    {
      id: 10,
      content: 'https://picsum.photos/200/207'
    },
    {
      id: 11,
      content: 'https://picsum.photos/200/208'
    },
    {
      id: 12,
      content: 'https://picsum.photos/200/209'
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
          <img src={imgArr.find(img => img.id === enlarged).content} alt="enlarged" className={`overlay-content ${isAnimating ? 'hide': 'show'}`} />
        </div>

      )}



    </div>
  )
}
