import React from 'react';
import MediaImage from '../../atoms/MediaImage';

const FullCastCrew = (props) => {
  const { 
    movie: { 
      title, name, release_date, first_air_date, poster_path,
      credits: { crew, cast } 
    }, 
    handlePersonClick 
  } = props;

  const date = release_date || first_air_date;
  const media = release_date ? "movie" : "tv";

  return (
    <div>
      <div className="full-ca-cr__header">
        <h2>{title || name}
          <span> ({date.slice(0, 4)})</span>
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
              <MediaImage
                mediaType="miniProfile"
                filePath={cast.profile_path} 
                name={cast.name} 
                className="full-ca-cr__image"
              />
              
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
              <MediaImage
                mediaType="miniProfile"
                filePath={crew.profile_path} 
                name={crew.name} 
                className="full-ca-cr__image"
              />
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
};

export default FullCastCrew;