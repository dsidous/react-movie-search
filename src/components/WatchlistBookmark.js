import React, { Component } from 'react';

import { removeMovieFromWatchlist, addMovieToWatchlist, FirebaseAuthContext } from '../firebase/FirebaseAuthProvider';

class WatchlistBookmark extends Component {

  static contextType = FirebaseAuthContext;

  toggleMovie = () => {
    const { movie } = this.props;
    const { user } = this.context;

    (user.watchlist && user.watchlist[movie.id])
      ? removeMovieFromWatchlist(movie.id)
      : addMovieToWatchlist(movie)
  }

  render() {
    const { movie } = this.props;
    const { user } = this.context;
    const watchlist = user && user.watchlist && user.watchlist[movie.id];
    return (
      <div className="movie-add-watchlist__wrapper" onClick={() => this.toggleMovie()}>
        {user &&
          <span className={
            ["movie-add-watchlist__icon fa",
              (watchlist !== undefined) ? "fa-bookmark" : "fa-bookmark-o"].join(" ")
          }></span>
        }
      </div>
    )
  }
}

export default WatchlistBookmark;