import React from 'react';

function Crew(props) {

  return (
    <div className="crew">
      <div className="crew-wrapper">
        {props.crew.map((cr, i) => (
          <div className="crew-element" key={i}>
            <small><strong>{cr.job}:</strong> </small>
            <small>{cr.name}</small>
          </div>
        ))
        }
      </div>
    </div>
  );

}

Crew.defaultProps = {
  crew: [],
};

export default Crew;
