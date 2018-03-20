import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import FullCastCrew from "../components/FullCastCrew";
import * as actions from "../actions";

class FullCastCrewContainer extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  state = {
    movieId: ''
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.movieId && (nextProps.match.params.movieId !== this.state.movieId)) {
      let movieId = nextProps.match.params.movieId;
      this.props.dispatch(actions.getMovie(movieId));
      this.setState({movieId});
    }
  }

  componentDidUpdate = () => { window.scrollTo(0, 0) }

  handlePersonClick = personId => {
    this.context.router.history.push(`/person/${personId}`);
  };

  render() {
    return (
      <div>
        {this.props.movie.movie.credits &&
          <FullCastCrew
            config={this.props.config.config}
            crew={this.props.movie.movie.credits.crew}
            cast={this.props.movie.movie.credits.cast}
            movieTitle={this.props.movie.movie.title}
            movieRelease={this.props.movie.movie.release_date}
            handlePersonClick={this.handlePersonClick}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movie,
    config: state.config
  };
};

export default withRouter(connect(mapStateToProps)(FullCastCrewContainer));
