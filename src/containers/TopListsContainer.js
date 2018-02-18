import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as actions from "../actions";
import TopRatedMovies from "../components/TopRatedMovies";
import HomeList from "../components/HomeList";

class TopListsContainer extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    topmovies: PropTypes.array
  };

  constructor(props) {
    super();
    this.state = {
      topmovies: []
    };
  }

  componentDidMount() {
    this.props.dispatch(actions.getHomeLists());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.topMovies) {
      this.setState({
        topmovies: nextProps.topMovies.slice(0, 5)
      });
    }
  }

  randomList = (to) => {
    var a = Array.from(Array(to), (_,x) => x);
    var n;
    var r=[];
    for (n=1; n<=5; ++n)
    {
      var i = Math.floor((Math.random() * (to-n)) + 1);
      r.push(a[i]);
      a[i] = a[to-n];
    }
    
    return r;
  }

  filterTopMovies = genre => {
    let movies = genre !== -1 
      ? this.props.topMovies.filter(movie => movie.genre_ids.includes(genre))
      : this.props.topMovies;
    
    let moviesLength = movies.length;

    if (moviesLength > 5) {
      let a = this.randomList(moviesLength);
      movies = movies.filter((movie,index) => a.indexOf(index) !== -1);   
    }

    this.setState({topmovies: movies});
  }

  goToMovie = movieId => {
    this.props.dispatch({ type: "RESET_MOVIE_STATE" });
    this.context.router.history.push(`/movie/${movieId}`);
  };

  render() {
    return (
      <div>
        {this.state.topmovies && (
          <TopRatedMovies
            config={this.props.config.config}
            topMovies={this.state.topmovies}
            goToMovie={this.goToMovie}
            filterTopMovies={this.filterTopMovies}
          />
        )}
        <div className="top-lists-wrapper">
          {this.props.npmovies &&
            this.props.config.config && (
              <HomeList
                config={this.props.config}
                list={this.props.npmovies.slice(0, 10)}
                goToMovie={this.goToMovie}
                title="In Theatres"
              />
            )}
          {this.props.ucmovies &&
            this.props.config.config && (
              <HomeList
                config={this.props.config}
                list={this.props.ucmovies.slice(0, 10)}
                goToMovie={this.goToMovie}
                title="Upcoming Movies"
              />
            )}
        </div>
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
    topMovies: state.homelists.topmovies.results,
    npmovies: state.homelists.npmovies.results,
    ucmovies: state.homelists.ucmovies.results
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TopListsContainer)
);
