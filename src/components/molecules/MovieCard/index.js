/* eslint-disable camelcase */
import React from 'react';

import { propTypes, contextTypes } from './propTypes';
import NoImage from '../../../images/noimage.jpg';
import NoBdImage from '../../../images/nobdimage.jpg';
import WatchlistBookmark from '../../atoms/WatchlistBookmark';

const MovieCard = ({ img_base_path, movie, media }, context) => {
  const goToMovie = movieId => (
    context.router.history.push(`/${media}/${movieId}`)
  );

  const {
    id, title, overview, poster_path,
    backdrop_path, vote_average, release_date,
    name, first_air_date,
  } = movie;

  const mtitle = title || name;
  const date = release_date || first_air_date;
  const imagePath = poster_path !== null
    ? [img_base_path + poster_path, img_base_path + backdrop_path]
    : [NoImage, NoBdImage];

  return (
    <li className="movies-list__element">
      <picture
        className="movies-poster"
        onClick={() => goToMovie(id)}
        onKeyDown={() => goToMovie(id)}
      >
        <source
          media="(min-width: 941px)"
          srcSet={imagePath[0]}
        />
        <source
          media="(max-width: 940px)"
          srcSet={imagePath[1]}
        />
        <img
          src={imagePath[0]}
          className="movies-poster"
          alt={mtitle}
        />
      </picture>

      <div className="clearfix">
        <div className="movies-title">
          {mtitle}
        </div>
        <div className="movies-rating">{vote_average}</div>
      </div>
      <div className="clearfix">
        <div className="movies-year">
          {date.slice(0, 4)}
        </div>
      </div>
      <div
        className={[
          'movies-overview ',
          overview.length > 200 ? 'long' : '',
        ].join(' ')}
      >
        {overview.slice(0, overview.indexOf(' ', 200))}
      </div>
      <WatchlistBookmark movie={movie} />
    </li>
  );
};

MovieCard.contextTypes = contextTypes;
MovieCard.propTypes = propTypes;

export default MovieCard;
