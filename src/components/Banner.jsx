import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import { Banner1, Banner2, Banner3 } from '../banners/index'

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }
  const slideImages = [
    {
      url: Banner1,
      caption: 'banner-1'
    },
    {
      url: Banner2,
      caption: 'banner-2'
    },
    {
      url: Banner3,
      caption: 'banner-3'
    },
  ];
  
const Banner = () => {
    
    return (
        <div className="slide-container">
          <Slide>
           {slideImages.map((slideImage, index)=> (
              <div key={index}>
                <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                  {/* <span style={spanStyle}>{slideImage.caption}</span> */}
                </div>
              </div>
            ))} 
          </Slide>
        </div>
      )
}

export default Banner