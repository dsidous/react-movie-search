import React from 'react';
import PropTypes from "prop-types";

import MediaImage from '../../atoms/MediaImage';

const FullCastCrew = (props, context) => {
  const {
    movie: {
      credits: { crew, cast }
    },
  } = props;

  const handlePersonClick = personId => {
    context.router.history.push(`/person/${personId}`);
  };

  return (
    <div>
      <div className="full-ca-cr">
        <div className="full-ca-cr__col">
          <h3>
            Cast
              <span> {cast.length} </span>
          </h3>
          {cast.map((cast, i) => (
            <div
              key={i}
              className="full-ca-cr__element"
              onClick={() => handlePersonClick(cast.id)}
            >
              <MediaImage
                mediaType="miniProfile"
                filePath={cast.profile_path}
                name={cast.name}
                className="full-ca-cr__image"
              />

              <div className="full-ca-cr__copy">
                <strong>{cast.name}</strong>
                <br />
                <small>{cast.character}</small>
              </div>
            </div>
          ))}
        </div>
        <div className="full-ca-cr__col">
          <h3>
            Crew
              <span> {crew.length} </span>
          </h3>
          {crew.map((crew, i) => (
            <div key={i} className="full-ca-cr__element">
              <MediaImage
                mediaType="miniProfile"
                filePath={crew.profile_path}
                name={crew.name}
                className="full-ca-cr__image"
              />
              <div className="full-ca-cr__copy">
                <strong>{crew.name}</strong>
                <br />
                <small>{crew.job}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

FullCastCrew.contextTypes = {
  router: PropTypes.object.isRequired
};

export default FullCastCrew;