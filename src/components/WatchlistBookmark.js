import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class WatchlistBookmark extends Component {

  toggleMovie = () => {
    (this.props.user.user.watchlist && this.props.user.user.watchlist[this.props.movie.id])
      ? this.props.dispatch(actions.removeMovieFromWatchlist(this.props.movie.id))  
      : this.props.dispatch(actions.addMovieToWatchlist(this.props.movie)) 
  }

  render() {
    const {movie} = this.props; 
    const watchlist=this.props.user.user && this.props.user.user.watchlist && this.props.user.user.watchlist[movie.id];
    return (
      <div className="movie-add-watchlist__wrapper" onClick={() => this.toggleMovie()}>
        {this.props.user.user && 
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
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchlistBookmark);