import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { db } from '../firebase';
import WatchList from '../components/WatchList';
import * as actions from '../actions';

class WatchListContainer extends Component {
  
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  goToMovie = movieId => {
    this.props.dispatch({ type: "RESET_MOVIE_STATE" });
    this.context.router.history.push(`/movie/${movieId}`);
  }

  removeMovie = movieId => {
    this.props.dispatch(actions.removeMovieFromWatchlist(movieId));
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.user && this.props.user.user && nextProps.user.user.watchlist !== this.props.user.user.watchlist) {
      db.updateUserWatchlist(this.props.authUser.uid, nextProps.user.user.watchlist);
    };
  }

  render() {
    return (
      <div>
        {this.props.config.config.images &&
          <WatchList
            movies={this.props.watchlist} 
            config={this.props.config.config}
            goToMovie={this.goToMovie}
            removeMovie={this.removeMovie}
            />
        }
      </div>  
    )
  }
}

const mapStateToProps = state => {
  return {
    config: state.config,
    watchlist: state.watchlist,
    authUser: state.session.authUser,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(WatchListContainer)
);