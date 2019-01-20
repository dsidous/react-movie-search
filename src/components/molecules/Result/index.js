/* eslint-disable camelcase */
import React from 'react';

import { propTypes } from './propTypes';
import MovieCard from '../MovieCard';

const Result = ({
  shows,
  config: {
    images: {
      secure_base_url,
      poster_sizes,
    },
  },
  media,
}) => {
  const img_base_path = secure_base_url + poster_sizes[3];

  return (
    <ul className="movies-list">
      {shows.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          img_base_path={img_base_path}
          media={media}
        />
      ))}
    </ul>
  );
};

Result.propTypes = propTypes;

export default Result;
