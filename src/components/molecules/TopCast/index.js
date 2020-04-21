import React from 'react';

import { propTypes, defaultProps } from './propTypes';
import Cast from '../../atoms/Cast';

const TopCast = ({ cast, handleFullCrewClick }) => (
  <div className="cast">
    <h4>Top Billed Cast</h4>
    <div className="cast-wrapper">
      {cast.map(person => (
        <Cast cast={person} type="top" key={person.id} />
      ))}
    </div>

    <button
      type="button"
      className="full-crew-btn"
      onClick={handleFullCrewClick}
    >
      Full Cast & Crew
    </button>
  </div>
);

TopCast.propTypes = propTypes;
TopCast.defaultProps = defaultProps;

export default TopCast;
