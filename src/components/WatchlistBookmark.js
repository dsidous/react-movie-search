import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class WatchlistBookmark extends Component {

  toggleMovie = () => {
    const {movie, user} = this.props;

    (user.watchlist && user.watchlist[movie.id])
      ? actions.removeMovieFromWatchlist(movie.id)  
      : actions.addMovieToWatchlist(movie) 
  }

  render() {
    const {movie, user} = this.props; 
    const watchlist = user && user.watchlist && user.watchlist[movie.id];
    return (
      <div className="movie-add-watchlist__wrapper" onClick={() => this.toggleMovie()}>
        {user && 
          <span className={
            ["movie-add-watchlist__icon fa",
            (watchlist !== undefined) ? "fa-bookmark": "fa-bookmark-o"].join(" ")
          }></span>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(mapStateToProps)(WatchlistBookmark);