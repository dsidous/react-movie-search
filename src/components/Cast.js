import React from 'react';

function Cast(props) {

  return (
    <div className="cast-wrapper">
      {props.cast.map((cr, i) => (
        <div className="cast-element" key={i}>
          {cr.profile_path !== null
            ? <img
              src={props.profile_img_base_url + cr.profile_path}
              alt={cr.name}
              onClick={() => props.handlePersonClick(cr.id)}
              className="cast-img"
            />
            : <div
              className="movie-no-image-holder smaller"
              onClick={() => props.handlePersonClick(cr.id)}
            />
          }
          <br />
          <strong>{cr.name}</strong><br />
          <small>{cr.character}</small>
        </div>
      ))
      }
    </div>
  );

}

Cast.defaultProps = {
  cast: [],
  profile_img_base_url: '',
};

export default Cast;
