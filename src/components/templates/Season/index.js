/* eslint-disable camelcase */
import React from 'react';

import { propTypes } from './propTypes';
import Spinner from '../../atoms/Spinner';
import Episode from '../../molecules/Episode';
import PageTransition from '../../atoms/PageTransition';
import MiniHeader from '../../molecules/MiniHeader';

const Season = props => {
  const { loading } = props;

  if (loading) {
    return <Spinner />;
  }

  const {
    tvSeason: { name, air_date, episodes, poster_path },
    tvId,
  } = props;

  return (
    <PageTransition>
      <MiniHeader
        title={name}
        release_date={air_date}
        poster_path={poster_path}
        link={`/tv/${tvId}/seasons`}
        linkCopy="Back to seasons"
      />

      <ul className="episodes__wrapper">
        {episodes.map(episode => (
          <li className="episodes__element" key={episode.episode_number}>
            <Episode episode={episode} />
          </li>
        ))}
      </ul>
    </PageTransition>
  );
};

Season.propTypes = propTypes;

export default Season;
