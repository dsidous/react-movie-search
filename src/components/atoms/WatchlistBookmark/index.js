import React, { Component } from 'react';

import { propTypes } from './propTypes';
import {
  removeMovieFromWatchlist,
  addMovieToWatchlist,
  FirebaseAuthContext,
} from '../../../firebase/FirebaseAuthProvider';

class WatchlistBookmark extends Component {
  static contextType = FirebaseAuthContext;

  static propTypes = propTypes;

  toggleMovie = () => {
    const { movie } = this.props;
    const { user } = this.context;

    (user.watchlist && user.watchlist[movie.id])
      ? removeMovieFromWatchlist(movie.id)
      : addMovieToWatchlist(movie);
  }

  render() {
    const { movie } = this.props;
    const { user } = this.context;
    const watchlist = user && user.watchlist && user.watchlist[movie.id];
    return (
      <div
        className="movie-add-watchlist__wrapper"
        onClick={() => this.toggleMovie()}
        onKeyDown={() => this.toggleMovie()}
        role="button"
        tabIndex="-1"
      >
        {user.email
          && (
            <span className={
              ['movie-add-watchlist__icon fa',
                (watchlist !== undefined)
                  ? 'fa-bookmark'
                  : 'fa-bookmark-o',
              ].join(' ')
            }
            />
          )
        }
      </div>
    );
  }
}

export default WatchlistBookmark;
