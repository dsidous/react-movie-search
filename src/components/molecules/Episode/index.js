/* eslint-disable camelcase */
import React from 'react';
import { FormattedDate, IntlProvider } from 'react-intl';

import { propTypes } from './propTypes';
import MediaImage from '../../atoms/MediaImage';

const Episode = props => {
  const {
    episode: { name, air_date, episode_number, overview, still_path },
  } = props;

  const date = air_date !== null ? air_date : '';

  return (
    <IntlProvider locale={navigator.language}>
      <div className="episode">
        <picture className="episode-poster">
          <MediaImage
            mediaType="still"
            size={3}
            filePath={still_path}
            name={name}
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
            />
            {` | episode ${episode_number}`}
          </h5>
          <div>{overview}</div>
        </div>
      </div>
    </IntlProvider>
  );
};

Episode.propTypes = propTypes;

export default Episode;
