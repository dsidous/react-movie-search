import React from 'react';

function Crew(props) {

  return (
    <div className="crew-wrapper">
      {props.crew.map((cr, i) => (
        <div className="crew-element" key={i}>          
          <strong>{cr.name}</strong><br />
          <small>{cr.job}</small>
        </div>
      ))
      }
    </div>
  );

}

Crew.defaultProps = {
  crew: [],
};

export default Crew;
