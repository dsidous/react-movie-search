import React from 'react';

import { propTypes } from './propTypes';
import Cast from '../../atoms/Cast';
import MediaImage from '../../atoms/MediaImage';

const FullCastCrew = props => {
  const {
    movie: {
      credits: { crew, cast },
    },
  } = props;

  return (
    <div>
      <div className="full-ca-cr">
        <div className="full-ca-cr__col">
          <h3>
            Cast
            <span>{` ${cast.length}`}</span>
          </h3>
          {cast.map(person => (
            <Cast cast={person} type="full" key={person.credit_id} />
          ))}
        </div>
        <div className="full-ca-cr__col">
          <h3>
            Crew
            <span>{` ${crew.length}`}</span>
          </h3>
          {crew.map(person => (
            <div key={person.credit_id} className="full-ca-cr__element">
              <MediaImage
                mediaType="miniProfile"
                filePath={person.profile_path}
                name={person.name}
                className="full-ca-cr__image"
              />
              <div className="full-ca-cr__copy">
                <strong>{person.name}</strong>
                <br />
                <small>{person.job}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

FullCastCrew.propTypes = propTypes;

export default FullCastCrew;
