import React from 'react';
import PropTypes from "prop-types";

import MediaImage from '../../atoms/MediaImage';

const Season = (props, context) => {
  const {
    season: { poster_path, overview, name, episode_count, air_date, season_number },
    tvId
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
        <MediaImage
          mediaType="poster"
          size={3} 
          filePath={poster_path} 
          name={name} 
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