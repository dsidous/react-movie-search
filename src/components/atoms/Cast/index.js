import React from 'react';
import MediaImage from '../MediaImage';

function Cast(props) {
  return (
    <div className="cast">
      <h4>Top Billed Cast</h4>
      <div className="cast-wrapper">
        {props.cast.map((cr, i) => (
          <div className="cast-element" key={i}>
            <MediaImage
              mediaType="profile"
              size={1} 
              filePath={cr.profile_path} 
              name={cr.name} 
              onClick={() => props.handlePersonClick(cr.id)}
              className="cast-img"
            />
            <br />
            <strong>{cr.name}</strong><br />
            <small>{cr.character}</small>
          </div>
        ))
        }
      </div>

      <button className="full-crew-btn" onClick={props.handleFullCrewClick}>Full Cast & Crew</button>

    </div>
  );

}

Cast.defaultProps = {
  cast: [],
};

export default Cast;
