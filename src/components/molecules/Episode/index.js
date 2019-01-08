import React from 'react';

import NoBdImage from '../../../images/nobdimage.jpg';

const Episode = (props) => {
  const { config: {images:{secure_base_url, still_sizes}},
    episode:{name, air_date, episode_number, overview, still_path}
  } = props;

  const date = air_date !== null ? air_date.slice(0,4) : '';

  return (
    <div className="season">
      <picture
        className="season-poster"
      >
        <img
          src={still_path !== null ? secure_base_url + still_sizes[3] + still_path : NoBdImage}
          alt={name}
        />
      </picture>
      <div className="season-details">
        <h3>{name}</h3>
        <h5>{`${date} | episode ${episode_number}`}</h5>
        <div>{overview}</div>
      </div>
    </div>
  )
}

export default Episode;
