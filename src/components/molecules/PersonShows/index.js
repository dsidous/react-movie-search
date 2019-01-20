/* eslint-disable camelcase */
import React from 'react';

import { propTypes, contextTypes } from './propTypes';
import MediaImage from '../../atoms/MediaImage';

const PersonShows = ({ shows: { cast } }, context) => {
  const goToMovie = (id, showType) => {
    context.router.history.push(`/${showType}/${id}`);
  };

  if (cast.length > 0) {
    const sortedShow = [].concat(cast)
      .sort((a, b) => {
        const dataB = b.release_date || b.first_air_date;
        const dataA = a.release_date || a.first_air_date;
        return dataB ? dataB.localeCompare(dataA) : -1;
      });

    return sortedShow.map((show, i) => {
      const { id, poster_path, character } = show;
      const showAttr = show.release_date
        ? { title: 'title', releaseDate: 'release_date', showType: 'movie' }
        : { title: 'name', releaseDate: 'first_air_date', showType: 'tv' };

      const title = show[showAttr.title];
      const releaseDate = show[showAttr.releaseDate] || '';
      const { showType } = showAttr;
      const key = `${title}${id}-${i}`;
      return (
        <div
          key={key}
          className="person-movie"
          onClick={() => goToMovie(id, showType)}
          onKeyDown={() => goToMovie(id, showType)}
          role="link"
          tabIndex="-1"
        >
          <p className="person-movie__poster">
            <MediaImage
              mediaType="poster"
              size={1}
              filePath={poster_path}
              name={title}
            />
          </p>
          <p className="person-movie__release">
            {releaseDate !== ''
              && releaseDate !== undefined
              ? releaseDate.substr(0, 4)
              : ''
            }
          </p>
          <p className="person-movie__title">
            {title}
            {character && (
              <span className="person-movie__character">
                {` as ${character}`}
              </span>
            )}
          </p>
        </div>
      );
    });
  }

  return null;
};

PersonShows.contextTypes = contextTypes;
PersonShows.propTypes = propTypes;

export default PersonShows;
