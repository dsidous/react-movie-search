import React from 'react';

import { propTypes, defaultProps } from './propTypes';
import Spinner from '../../atoms/Spinner';
import PageTransition from '../../atoms/PageTransition';
import TopRatedMovies from '../../organisms/TopRatedMovies';
import HomeList from '../../atoms/HomeList';

const Home = ({
  nowPlayingLoading,
  popularLoading,
  upcomingLoading,
  nowplaying,
  upcoming,
  popular,
}) => {
  if (nowPlayingLoading || popularLoading || upcomingLoading) {
    return <Spinner />;
  }

  return (
    <PageTransition>
      <TopRatedMovies popular={popular} />

      <div className="top-lists-wrapper">
        <HomeList list={nowplaying.slice(0, 10)} title="In Theatres" />
        <HomeList list={upcoming.slice(0, 10)} title="Upcoming Movies" />
      </div>
    </PageTransition>
  );
};

export default Home;

Home.defaultProps = defaultProps;

Home.propTypes = propTypes;
