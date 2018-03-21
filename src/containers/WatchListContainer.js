import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import WatchList from '../components/WatchList';
import * as actions from '../actions';

class WatchListContainer extends Component {
  
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  goToMovie = movieId => {
    this.context.router.history.push(`/movie/${movieId}`);
  }

  removeMovie = movieId => {
    this.props.dispatch(actions.removeMovieFromWatchlist(movieId));
  }

  render() {    
    return (
      <div>
        {this.props.config.config.images && this.props.user.user.watchlist &&
          <WatchList
            movies={this.props.user.user.watchlist} 
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