import React from 'react';
import { propTypes, defaultProps, contextTypes } from './propTypes';
import MediaImage from '../MediaImage';

const Cast = ({ cast, type }, context) => {
  const mediaType = type === 'full' ? 'miniProfile' : 'profile';

  const handlePersonClick = personId => context.router.history.push(`/person/${personId}`);

  return (
    <div className={`cast__element ${type}`}>
      <MediaImage
        mediaType={mediaType}
        size={1}
        filePath={cast.profile_path}
        name={cast.name}
        onClick={() => handlePersonClick(cast.id)}
        className="cast__img"
      />
      <div className="cast__copy">
        <strong>{cast.name}</strong>
        <br />
        <small>{cast.character}</small>
      </div>
    </div>
  );
};


Cast.contextTypes = contextTypes;
Cast.propTypes = propTypes;
Cast.defaultProps = defaultProps;

export default Cast;
