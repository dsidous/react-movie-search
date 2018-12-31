import React, { Component } from "react";
import PropTypes from "prop-types";

import TopRatedMovies from "../../organisms/TopRatedMovies";
import HomeList from "../../atoms/HomeList";

export default class TopListsContainer extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    popular: PropTypes.array
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      topmovies: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.popularLoading) {
      this.setState({
        topmovies: nextProps.popular.slice(0, 5)
      });
    }
  }

  randomList = (to) => {
    var a = Array.from(Array(to), (_, x) => x);
    var n;
    var r = [];
    for (n = 1; n <= 5; ++n) {
      var i = Math.floor((Math.random() * (to - n)) + 1);
      r.push(a[i]);
      a[i] = a[to - n];
    }

    return r;
  }

  filterTopMovies = genre => {
    let movies = genre !== -1
      ? this.props.popular.filter(movie => movie.genre_ids.includes(genre))
      : this.props.popular;

    let moviesLength = movies.length;

    if (moviesLength > 5) {
      let a = this.randomList(moviesLength);
      movies = movies.filter((movie, index) => a.indexOf(index) !== -1);
    }

    this.setState({ topmovies: movies });
  }

  goToMovie = movieId => {
    this.context.router.history.push(`/movie/${movieId}`);
  };

  render() {
    if (this.props.nowPlayingLoading || this.props.popularLoading || this.props.upcomingLoading || this.props.configLoading) {
      return (
        <div className="loader">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
          <span className="sr-only">Loading...</span>
        </div>
      )
    }

    return (
      <div>
        <TopRatedMovies
          config={this.props.config}
          topMovies={this.state.topmovies}
          goToMovie={this.goToMovie}
          filterTopMovies={this.filterTopMovies}
        />

        <div className="top-lists-wrapper">
          <HomeList
            config={this.props.config}
            list={this.props.nowplaying.slice(0, 10)}
            goToMovie={this.goToMovie}
            title="In Theatres"
          />
          <HomeList
            config={this.props.config}
            list={this.props.upcoming.slice(0, 10)}
            goToMovie={this.goToMovie}
            title="Upcoming Movies"
          />
        </div>
      </div>
    );
  }
}
