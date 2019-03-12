import React from 'react';
import Slider from 'react-slick';

import { propTypes } from './propTypes';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FullScreenBackdrop = ({ backdrops }) => {
  const settings = {
    arrows: false,
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    adaptiveHeight: true,
    pauseOnHover: false,
  };

  return (
    <div>
      {backdrops
        && (
          <Slider {...settings}>
            {backdrops.map(backdrop => (
              <div
                className="fullscreen-backdrop-slide"
                key={backdrop}
                style={{
                  height: window.innerHeight,
                  backgroundImage: `url(${backdrop})`,
                }}
              />
            ))}
          </Slider>
        )
      }
    </div>
  );
};

FullScreenBackdrop.propTypes = propTypes;

export default FullScreenBackdrop;
