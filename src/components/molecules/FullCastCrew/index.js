import React from 'react';

const FullCastCrew = ({ movie: { title, name, credits: { crew, cast } }, profile_img_base_url, handlePersonClick }) => (
  <div>
    <div className="full-ca-cr__header">
      <h2>{title || name}
        {/* <span> ({release_date.slice(0, 4)})</span> */}
      </h2>
    </div>
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
            {cast.profile_path !== null ? (
              <img
                className="full-ca-cr__image"
                alt={cast.name}
                src={profile_img_base_url + cast.profile_path}
              />
            ) : (
                <div className="no_image_holder w50_and_h50 profile" />
              )}
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
            {crew.profile_path !== null ? (
              <img
                className="full-ca-cr__image"
                src={profile_img_base_url + crew.profile_path}
                alt={crew.name}
              />
            ) : (
                <div className="no_image_holder w50_and_h50 profile" />
              )}

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

export default FullCastCrew;