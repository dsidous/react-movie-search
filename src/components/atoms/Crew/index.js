import React from 'react';
import { propTypes, defaultProps } from './propTypes';

const Crew = ({ crew }) => (
  <div className="crew">
    <div className="crew-wrapper">
      {crew.map(cr => (
        <div className="crew-element" key={cr.name}>
          <small>
            <strong>
              {`${cr.job}:`}
            </strong>
          </small>
          <small>{cr.name}</small>
        </div>
      ))
      }
    </div>
  </div>
);

Crew.propTypes = propTypes;
Crew.defaultProps = defaultProps;

export default Crew;
