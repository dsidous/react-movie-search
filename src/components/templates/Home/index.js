import React, { Component } from 'react';

import { propTypes, defaultProps } from './propTypes';
import Spinner from '../../atoms/Spinner';
import PageTransition from '../../atoms/PageTransition';
import TopRatedMovies from '../../organisms/TopRatedMovies';
import HomeList from '../../atoms/HomeList';

export default class Home extends Component {
  static defaultProps = defaultProps;

  static propTypes = propTypes;

  render() {
    const {
      nowPlayingLoading,
      popularLoading,
      upcomingLoading,
      nowplaying,
      upcoming,
      popular,
    } = this.props;
    if (nowPlayingLoading || popularLoading || upcomingLoading) {
      return <Spinner />;
    }

    return (
      <PageTransition>
        <TopRatedMovies
          popular={popular}
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
