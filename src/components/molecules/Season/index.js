import React from 'react';

import NoBdImage from '../../../images/nobdimage.jpg';

const Season = (props) => {
  const {
    season: { poster_path, overview, name, episode_count, air_date },
    config: {
      images: { secure_base_url, poster_sizes }
    }
  } = props;

  const date = air_date !== null ? air_date.slice(0,4) : '';
  
  return (
    <div className="season">
      <picture
        className="season-poster"
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

export default Season;