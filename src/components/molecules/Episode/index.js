import React from 'react';
import { FormattedDate, IntlProvider } from "react-intl";

import NoBdImage from '../../../images/nobdimage.jpg';

const Episode = (props) => {
  const { config: { images: { secure_base_url, still_sizes } },
    episode: { name, air_date, episode_number, overview, still_path }
  } = props;

  const date = air_date !== null ? air_date : '';

  return (
    <IntlProvider locale={navigator.language}>
      <div className="episode">
        <picture
          className="episode-poster"
        >
          <img
            src={still_path !== null ? secure_base_url + still_sizes[3] + still_path : NoBdImage}
            alt={name}
          />
        </picture>
        <div className="episode-details">
          <h3>{name}</h3>
          <h5>
            <FormattedDate
              value={date}
              year="numeric"
              month="long"
              day="2-digit"
            />{` | episode ${episode_number}`}
          </h5>
          <div>{overview}</div>
        </div>
      </div>
    </IntlProvider>
  )
}

export default Episode;
