import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as Vibrant from "node-vibrant";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import MovieProfile from "../components/MovieProfile";
import * as actions from "../actions";

class MovieProfileContainer extends Component {
  state = {
    dcolor: [0, 0, 0],
    movieId: this.props.match.params.movieId || ''
  };

  static propTypes = {
    config: PropTypes.object.isRequired,
    movie: PropTypes.object.isRequired
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  componentDidMount(){
    let movieId = this.state.movieId;
    this.props.dispatch(actions.getMovie(movieId,() => this.getPalette()));
  }

  componentWillReceiveProps(nextProps) {    
    if (nextProps.match.params.movieId && (nextProps.match.params.movieId !== this.state.movieId)) {
      let movieId = nextProps.match.params.movieId;
      this.setState({movieId});
      this.props.dispatch(actions.getMovie(movieId));
      this.getPalette();
    }
  }
  
  getPalette = path => {
    if (this.props.movie.movie.poster_path) {
      let path =
      this.props.config.config.images.base_url +
      this.props.config.config.images.poster_sizes[3] +
      this.props.movie.movie.poster_path;
      Vibrant.from(path).getSwatches((err,palette) => {
          this.setState({ dcolor: (palette.DarkVibrant !== null) ? palette.DarkVibrant._rgb : [0, 0, 0] })
        }
      )
    } 
  };

handleMovieClick = movieId => {
  this.context.router.history.push(`/movie/${movieId}`);
};

handleFullCrewClick = () => {
  this.context.router.history.push(`/movie/${this.props.movie.movie.id}/crew`);
};

handlePersonClick = personId => {
  this.context.router.history.push(`/person/${personId}`);
};

  render() {
    
    return (
      <div>
        {!this.props.movie.movie.id ? (
          this.props.movie.isFetching ? (
            <div className="loader">
              <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            ""
          )
        ) : (
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={1500}
            transitionEnterTimeout={1500}
            transitionLeave={false}
          >
            <MovieProfile
              key={this.props.movie.movie.id}
              config={this.props.config.config}
              movie={this.props.movie.movie}
              dcolor={this.state.dcolor}
              handleMovieClick={this.handleMovieClick}
              handlePersonClick={this.handlePersonClick}
              handleFullCrewClick={this.handleFullCrewClick}
            />
          </ReactCSSTransitionGroup>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movie,
    config: state.config,    
  };
};

export default withRouter(
  connect(mapStateToProps)(MovieProfileContainer)
);
