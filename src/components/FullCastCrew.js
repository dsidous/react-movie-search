import React from "react";

function FullCastCrew(props) {
  const { base_url } = props.config.images;
  const profile_img_base_url = base_url + "w132_and_h132_face/";
  return (
    <div>
      <div className="full-ca-cr__header">
        <h2>{props.movieTitle}
          <span> ({props.movieRelease.slice(0, 4)})</span>
        </h2>
      </div>
      <div className="full-ca-cr">
        <div className="full-ca-cr__col">
          <h3>
            Cast
            <span> {props.cast.length} </span>
          </h3>
          {props.cast.map((cast, i) => (
            <div
              key={i}
              className="full-ca-cr__element"
              onClick={() => props.handlePersonClick(cast.id)}
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
            <span> {props.crew.length} </span>
          </h3>
          {props.crew.map((crew, i) => (
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
}

export default FullCastCrew;
