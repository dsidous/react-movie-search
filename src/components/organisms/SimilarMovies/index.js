import React from 'react';
import Slider from 'react-slick';

import { propTypes } from './propTypes';
import MediaImage from '../../atoms/MediaImage';

const SimilarMovies = ({ similar, handleMovieClick }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  if (window.innerWidth < 640) {
    Object.assign(settings, {
      arrows: false,
      slidesToScroll: 1,
      slidesToShow: 3,
      swipeToSlide: true,
    });
  }

  return (
    <div className="similar">
      <h4>Similar movies</h4>
      <Slider {...settings}>
        {similar.map(sim => (
          <div
            key={sim.id}
            className="similar-movies__element"
            onClick={() => handleMovieClick(sim.id)}
            onKeyDown={() => handleMovieClick(sim.id)}
            role="link"
            tabIndex="-1"
          >
            <p className="crew-col text-center">
              <MediaImage
                mediaType="poster"
                size={1}
                filePath={sim.poster_path}
                name={sim.title}
                className="similar-movies-img"
              />
              <br />
              <small>{sim.title}</small>
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

SimilarMovies.propTypes = propTypes;

export default SimilarMovies;
