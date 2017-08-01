import React from 'react'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function FullScreenBackdrop (props){
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,    
    adaptiveHeight: true
  };

  return(
    <div>
      {props.backdrops &&
        <Slider {...settings}>
          {props.backdrops.map((backdrop,i) => (
            <div key={i}>
              <div style={{height: window.innerHeight,backgroundImage: 'url(' + props.backdrop_img_path + backdrop.file_path + ')'}} ></div>
            </div>
          ))
          }

        </Slider>
      }
    </div>
  )
}


export default FullScreenBackdrop;
