/* eslint-disable camelcase */
import React from 'react';
import { compose, withProps, branch } from 'recompose';

import withMovies from '../../queries/withMovies';
import withTvs from '../../queries/withTvs';
import withConfig from '../../queries/withConfig';
import { propTypes } from './propTypes';
import MovieCard from '../MovieCard';
import Spinner from '../../atoms/Spinner';


const Result = ({
  shows,
  config: {
    images: {
      secure_base_url,
      poster_sizes,
    },
  },
  resultMedia,
  loading,
  configLoading,
}) => {
  const img_base_path = secure_base_url + poster_sizes[3];

  if (loading || configLoading) {
    return <Spinner />;
  }

  return (
    <ul className="movies-list">
      {shows.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          img_base_path={img_base_path}
          media={resultMedia}
        />
      ))}
    </ul>
  );
};

Result.propTypes = propTypes;

const enhancedComponent = compose(
  branch(
    props => props.resultMedia === 'movie',
    withMovies(),
    withTvs(),
  ),
  withConfig(),
)(Result);

export default enhancedComponent;
