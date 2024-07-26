import { useState } from 'react'
import Masonry from 'react-masonry-css';
import './MasonryGrid.css'

export default function Photography() {

  const [enlarged, setEnlarged] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const imgArr = [
    {
      id: 1,
      content: 'https://www.dropbox.com/scl/fi/7q1xc41ktgjhzdqjouvnx/6N5A4149.jpg?rlkey=6tr85de2owbbtc3mwzpl598zf&st=pu4bo5zy&dl=0'
    },
    {
      id: 2,
      content: 'https://www.dropbox.com/scl/fi/k6vrzfrtksm0hbj10qy5s/6N5A8725.jpg?rlkey=7uwh3p2yh7ksc0onit0hachue&st=69rv23rc&dl=0'
    },
    {
      id: 3,
      content: 'https://www.dropbox.com/scl/fi/l9iiljgdi1n46b2gxz7n6/6N5A9239.jpg?rlkey=39fz2vv0471hfvrw8scxs3s1f&st=0ld04mcq&dl=0'
    },
    {
      id: 4,
      content: 'https://www.dropbox.com/scl/fi/8u24sztp2wra2jcib48vq/6N5A8612final.jpg?rlkey=uio2abkv6tdlx6ucffajzrw2r&st=z1dolm7z&dl=0'
    },
    {
      id: 5,
      content: 'https://www.dropbox.com/scl/fi/bmawhay6a8goqvzr9540i/6N5A3302-2.jpg?rlkey=kqrr6c8fyxrfk5jv0b9euj51q&st=f3v6ibg4&dl=0'
    },
    {
      id: 6,
      content: 'https://www.dropbox.com/scl/fi/dkrv7mrar4ojbifhlqta8/6N5A3680-2.jpg?rlkey=9zil7z1t5h9t9ayetb4oe9elc&st=o9wzapr1&dl=0'
    },
    {
      id: 7,
      content: 'https://www.dropbox.com/scl/fi/32sjtw7dlxx5xptn3zz11/6N5A3407-p.jpg?rlkey=ctc9xdiq2amf0dd84h2kaj40y&st=gd05w2r8&dl=0'
    },
    {
      id: 8,
      content: 'https://uc1bfe78c4cd72a56a97c94ad8e7.previews.dropboxusercontent.com/p/thumb/ACXSMib-E3hXKDkcf_HQ1f3sbOVd3yPPgaN3XVciTpcouSo1qWa3G7gQUrOEELPMBIIU8bBDsilbT6CCpIC3CqAgNk2Hog897ZnqVAuFTZ5U3pGkFDJLeExpWWyB-_G75FfDw8_gPL7LwZtRIau8aIeJA2mQcuhzyuj9BenKJ-bXUELRDkf_JzPKSoXvwdqMX_DGi2sFFQI1oKx3Ce6bPc7tNDnJ03tuOP5JjyixUkvUhqh4N4OgJJ414lyLixmemnBYGPSURRtTUXHlRGLW3xB4UDU4Oj9Ly8O0ahazEX2eU_ajXaApsUP-k0Oi79D-Re2fMQo3qDm1CL3Iwg7XF8-8RomcPmNtnJshnqcvauGUgOPc49opL6e_PDH8tjqNsGpbSPKemiWfYM2TKoLrA5nE/p.jpeg?is_prewarmed=true'
    },
    {
      id: 9,
      content: 'https://www.dropbox.com/scl/fi/y8gpwpgjnk3vkkyabsjfg/6N5A8710-2.jpg?rlkey=rd88yjvbk3g7o9tp4qaut8tv2&st=3f0cu7k0&dl=0'
    },
    {
      id: 10,
      content: 'https://www.dropbox.com/scl/fi/k89cwqn96k28n7hua6trk/6N5A9640-2.jpg?rlkey=7mu6gj74s0l60arqmjasielrt&st=h8hisuff&dl=0'
    },
    {
      id: 11,
      content: 'https://consequence.net/wp-content/uploads/2017/03/radiohead-cat-miller-69-of-146.png'
    },
    {
      id: 12,
      content: 'https://consequence.net/wp-content/uploads/2017/05/kendrick-lamar-by-catlin-miller4.jpg'
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
