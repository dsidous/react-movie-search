import React from 'react';
import { Link } from 'react-router-dom';

import MediaImage from '../../atoms/MediaImage';

const PersonKnownFor = ({ combinedCredits }) => {
  const sorted = []
    .concat(combinedCredits.cast)
    .sort((a, b) => b.vote_count - a.vote_count)
    .slice(0, 8);

  return sorted.map(movie => (
    <div key={movie.id} className="person-movies-known">
      <Link to={`/${movie.media_type}/${movie.id}`}>
        <MediaImage
          mediaType="poster"
          size={1}
          filePath={movie.poster_path}
          name={movie.title || movie.name}
        />
      </Link>
      <p className="person-movie__title-known">{movie.title || movie.name}</p>
    </div>
  ));
};

export default PersonKnownFor;
