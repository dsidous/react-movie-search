import React from 'react';
import NoImage from '../images/noimage.jpg';

function Cast(props) {

  return (
    <div className="cast-wrapper">
      {props.cast.map((cr, i) => (
        <div className="cast-element" key={i}>          
            <img
              src={cr.profile_path !== null
                ? props.profile_img_base_url + cr.profile_path
                : NoImage
              }
              alt={cr.name}
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
  );

}

Cast.defaultProps = {
  cast: [],
  profile_img_base_url: '',
};

export default Cast;
