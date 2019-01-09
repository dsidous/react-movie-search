import React from 'react';
import PropTypes from "prop-types";

import NoBdImage from '../../../images/nobdimage.jpg';

const Season = (props, context) => {
  const {
    season: { poster_path, overview, name, episode_count, air_date, season_number },
    config: {
      images: { secure_base_url, poster_sizes }
    }, tvId
  } = props;

  const date = air_date !== null ? air_date.slice(0, 4) : '';

  const handleSeasonClick = () => {
    context.router.history.push(`/tv/${tvId}/season/${season_number}`);
  };

  return (
    <div className="season">
      <picture
        className="season-poster"
        onClick={handleSeasonClick}
      >
        <img
          src={poster_path !== null ? secure_base_url + poster_sizes[3] + poster_path : NoBdImage}
          alt={name}
        />
      </picture>
      <div className="season-details">
        <h3>{name}</h3>
        <h5>{`${date} | ${episode_count} episodes`}</h5>
        <div>{overview}</div>
      </div>
    </div>
  )
}

Season.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Season;