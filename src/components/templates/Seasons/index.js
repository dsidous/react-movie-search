/* eslint-disable camelcase */
import React from 'react';

import { propTypes } from './propTypes';
import Spinner from '../../atoms/Spinner';
import Season from '../../molecules/Season';
import PageTransition from '../../atoms/PageTransition';
import MiniHeader from '../../molecules/MiniHeader';

const Seasons = props => {
  const { loading } = props;

  if (loading) {
    return <Spinner />;
  }

  const {
    show: { seasons, name, first_air_date, id, poster_path },
  } = props;

  return (
    <PageTransition>
      <MiniHeader
        title={name}
        release_date={first_air_date}
        poster_path={poster_path}
        link={`/tv/${id}`}
        linkCopy="Back to main"
      />

      <ul className="seasons">
        {seasons
          .sort((a, b) => a.season_number - b.season_number)
          .map(season => (
            <li className="seasons__element" key={season.season_number}>
              <Season season={season} tvId={id} />
            </li>
          ))}
      </ul>
    </PageTransition>
  );
};

Seasons.propTypes = propTypes;

export default Seasons;
