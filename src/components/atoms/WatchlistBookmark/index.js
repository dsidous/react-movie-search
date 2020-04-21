import React, { useContext } from 'react';

import { propTypes } from './propTypes';
import {
  removeMovieFromWatchlist,
  addMovieToWatchlist,
  FirebaseAuthContext,
} from '../../../firebase/FirebaseAuthProvider';

const WatchlistBookmark = ({ movie }) => {
  const { user } = useContext(FirebaseAuthContext);
  const toggleMovie = () => {
    user.watchlist && user.watchlist[movie.id]
      ? removeMovieFromWatchlist(movie.id)
      : addMovieToWatchlist(movie);
  };

  const watchlist = user && user.watchlist && user.watchlist[movie.id];

  return (
    <div
      className="movie-add-watchlist__wrapper"
      onClick={() => toggleMovie()}
      onKeyDown={() => toggleMovie()}
      role="button"
      tabIndex="-1"
    >
      {user.email && (
        <span
          className={[
            'movie-add-watchlist__icon fa',
            watchlist !== undefined ? 'fa-bookmark' : 'fa-bookmark-o',
          ].join(' ')}
        />
      )}
    </div>
  );
};

WatchlistBookmark.propTypes = propTypes;

export default WatchlistBookmark;
