import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Result from "../components/Result";

class ResultContainer extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    movies: PropTypes.array
  };

  goToMovie = movieId => {    
    this.context.router.history.push(`/movie/${movieId}`);
  };

  render() {
    return (
      <div className="result-wrapper">
        {!this.props.movies ? (
          this.props.isFetching ? (
            <div className="loader">
              <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            ""
          )
        ) : (
          this.props.config.genres &&
            <Result {...this.props} goToMovie={this.goToMovie} />
          
        )}
      </div>
    );
  }
}

ResultContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    config: state.config,
    movies: state.movies.movies.results,
    isFetching: state.movies.isFetching
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer);
