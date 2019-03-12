import React, { Component } from 'react';

import { propTypes, defaultProps } from './propTypes';
import Spinner from '../../atoms/Spinner';
import PageTransition from '../../atoms/PageTransition';
import TopRatedMovies from '../../organisms/TopRatedMovies';
import HomeList from '../../atoms/HomeList';

export default class Home extends Component {
  static defaultProps = defaultProps;

  static propTypes = propTypes;

  state = {
    topmovies: [],
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.popularLoading) {
      this.setState({
        topmovies: nextProps.popular.slice(0, 5),
      });
    }
  }

  randomList = (arrayMax) => {
    const nbrArray = Array.from(Array(arrayMax), (_, x) => x);
    const rndList = [];
    // eslint-disable-next-line no-plusplus
    for (let n = 1; n <= 5; ++n) {
      const rndNum = Math.floor((Math.random() * (arrayMax - n)) + 1);
      rndList.push(nbrArray[rndNum]);
      nbrArray[rndNum] = nbrArray[arrayMax - n];
    }
    return rndList;
  }

  filterTopMovies = (genre) => {
    const { popular } = this.props;
    let movies = genre !== -1
      ? popular.filter(movie => movie.genre_ids.includes(genre))
      : popular;

    const moviesLength = movies.length;

    if (moviesLength > 5) {
      const rndList = this.randomList(moviesLength);
      movies = movies.filter((movie, index) => rndList.indexOf(index) !== -1);
    }

    this.setState({ topmovies: movies });
  }

  render() {
    const {
      nowPlayingLoading,
      popularLoading,
      upcomingLoading,
      nowplaying,
      upcoming,
    } = this.props;
    const { topmovies } = this.state;
    if (nowPlayingLoading || popularLoading || upcomingLoading) {
      return <Spinner />;
    }

    return (
      <PageTransition>
        <TopRatedMovies
          topMovies={topmovies}
          filterTopMovies={this.filterTopMovies}
        />

        <div className="top-lists-wrapper">
          <HomeList
            list={nowplaying.slice(0, 10)}
            title="In Theatres"
          />
          <HomeList
            list={upcoming.slice(0, 10)}
            title="Upcoming Movies"
          />
        </div>
      </PageTransition>
    );
  }
}
