import React from 'react';
import { propTypes, defaultProps } from './propTypes';
import MediaImage from '../MediaImage';

const Cast = ({ cast, handleFullCrewClick, handlePersonClick }) => (
  <div className="cast">
    <h4>Top Billed Cast</h4>
    <div className="cast-wrapper">
      {cast.map(cr => (
        <div className="cast-element" key={cr.id}>
          <MediaImage
            mediaType="profile"
            size={1}
            filePath={cr.profile_path}
            name={cr.name}
            onClick={() => handlePersonClick(cr.id)}
            className="cast-img"
          />
          <br />
          <strong>{cr.name}</strong>
          <br />
          <small>{cr.character}</small>
        </div>
      ))
      }
    </div>

    <button type="button" className="full-crew-btn" onClick={handleFullCrewClick}>
      Full Cast & Crew
    </button>

  </div>
);


Cast.propTypes = propTypes;
Cast.defaultProps = defaultProps;

export default Cast;
