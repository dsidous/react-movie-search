/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';

import { propTypes } from './propTypes';
import MediaImage from '../../atoms/MediaImage';

const Season = props => {
  const {
    season: {
      poster_path,
      overview,
      name,
      episode_count,
      air_date,
      season_number,
    },
    tvId,
  } = props;

  const date = air_date !== null ? air_date.slice(0, 4) : '';
  const link = `/tv/${tvId}/season/${season_number}`;

  return (
    <div className="season">
      <Link to={link} className="season-poster">
        <MediaImage
          mediaType="poster"
          size={3}
          filePath={poster_path}
          name={name}
        />
      </Link>
      <div className="season-details">
        <h3>{name}</h3>
        <h5>{`${date} | ${episode_count} episodes`}</h5>
        <div>{overview}</div>
      </div>
    </div>
  );
};

Season.propTypes = propTypes;

export default Season;
