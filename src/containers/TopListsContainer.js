import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as actions from "../actions";
import TopRatedMovies from "../components/TopRatedMovies";

class TopListsContainer extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    topmovies: PropTypes.array
  };

  componentDidMount() {
    this.props.dispatch(actions.getTopRatedMovies());
  }

  goToMovie = movieId => {
    this.props.dispatch({ type: "RESET_MOVIE_STATE" });
    this.context.router.history.push(`/movie/${movieId}`);
  };

  render() {
    return (
      <div>
        {this.props.topMovies && (
          <TopRatedMovies
            config={this.props.config.config}
            topMovies={this.props.topMovies.slice(0, 5)}
            goToMovie={this.goToMovie}
            title="Popular Movies"
          />
        )}
      </div>
    );
  }
}

TopListsContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    config: state.config,
    topMovies: state.homelists.topmovies.results
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TopListsContainer)
);