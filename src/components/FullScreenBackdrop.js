import React from 'react'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function FullScreenBackdrop (props){
  const settings = {
    arrows: false,
    dots: false,
    fade: true,
    autoPlay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    adaptiveHeight: true,
    pauseOnHover: false,
    beforeChange: () => {
      return(
        console.log(this)
      )


    }
  };

  return(
    <div>
      {props.backdrops &&
        <Slider {...settings}>
          {props.backdrops.map((backdrop,i) => (
            <div key={i}>
              <div style={{
                height: window.innerHeight,
                backgroundImage: 'url(' + props.backdrop_img_path + backdrop.file_path + ')',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }} ></div>
            </div>
          ))
          }

        </Slider>
      }
    </div>
  )
}


export default FullScreenBackdrop;
