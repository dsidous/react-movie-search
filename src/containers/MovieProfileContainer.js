import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as Vibrant from "node-vibrant";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import MovieProfile from "../components/MovieProfile";
import * as actions from "../actions";
import { db } from '../firebase';


class MovieProfileContainer extends Component {
  state = {
    dcolor: [],
    movieId: this.props.match.params.movieId || '',
    watchlist: false
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
    if (movieId !== '') {
      this.props.dispatch(actions.updateMovie(movieId));
    }

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.movieId && (nextProps.match.params.movieId !== this.state.movieId)) {
      let movieId = nextProps.match.params.movieId;
      this.props.dispatch(actions.updateMovie(movieId));
      this.setState({movieId});
    }

    if (nextProps.user.user.watchlist && nextProps.user.user.watchlist.includes(Number(this.state.movieId))) {
      this.setState({watchlist: true});
    } else {
      this.setState({watchlist: false});
    }

    console.log(nextProps);
    if (this.props.user.user && nextProps.user.user.watchlist !== this.props.user.user.watchlist) {
      console.log("UPDATE");
    }

  }
  
  getPalette = path => {
    if (this.props.movie.movie.poster_path) {
      let path =
      this.props.config.config.images.base_url +
      this.props.config.config.images.poster_sizes[3] +
      this.props.movie.movie.poster_path;
      Vibrant.from(path).getSwatches((err, palette) =>
      this.setState({ dcolor: palette.DarkVibrant._rgb })
    );
  } else {
    this.setState({ dcolor: [0, 0, 0] });
  }
};

handleMovieClick = movieId => {
  this.props.dispatch({ type: "RESET_MOVIE_STATE" });
  this.props.dispatch(actions.updateMovie(movieId));
  this.context.router.history.push(`/movie/${movieId}`);
};

handleFullCrewClick = () => {
  this.context.router.history.push(`/movie/${this.props.movie.movie.id}/crew`);
};

handlePersonClick = personId => {
  this.props.dispatch({ type: "RESET_PERSON" });
  this.props.dispatch(actions.updatePerson(personId));
  this.context.router.history.push(`/person/${personId}`);
};

toggleWatchlist = () => {
  this.state.watchlist
   ? this.props.dispatch(actions.removeMovieFromWatchlist(this.props.movie.movie.id))  
   : this.props.dispatch(actions.addMovieToWatchlist(this.props.movie.movie)) 
  //db.updateUserWatchlist(this.props.authUser.uid, this.props.user.user.watchlist);
}

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
              getPalette={this.getPalette}
              dcolor={this.state.dcolor}
              handleMovieClick={this.handleMovieClick}
              handlePersonClick={this.handlePersonClick}
              handleFullCrewClick={this.handleFullCrewClick}
              toggleWatchlist={this.toggleWatchlist}
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
    watchlist: state.watchlist,
    authUser: state.session.authUser,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MovieProfileContainer)
);
