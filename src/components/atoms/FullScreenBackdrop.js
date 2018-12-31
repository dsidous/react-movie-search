import React from 'react'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function FullScreenBackdrop (props){
  const settings = {
    arrows: false,
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    adaptiveHeight: true,
    pauseOnHover: false
  };

  return(
    <div>
      {props.backdrops &&
        <Slider {...settings}>
              {props.backdrops
                .map((backdrop,i) => (
                  <div className="fullscreen-backdrop-slide" key={i} style={{
                      height: window.innerHeight,
                      backgroundImage: 'url(' + props.backdrop_img_path + backdrop.file_path + ')'
                    }} >
                  </div>
                ))
              }

        </Slider>
      }
    </div>
  )
}


export default FullScreenBackdrop;
