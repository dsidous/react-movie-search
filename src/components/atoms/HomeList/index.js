import React from 'react';
import { Link } from 'react-router-dom';

import { propTypes } from './propTypes';
import MediaImage from '../MediaImage';

const HomeList = ({ title, list }) => (
  <div className="home-list">
    <div className="home-list__title">{title}</div>
    <ul className="home-list__list">
      {list.map(show => (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <li className="home-list__list-element" key={show.id}>
          <Link to={`/movie/${show.id}`}>
            <MediaImage
              mediaType="poster"
              size={0}
              filePath={show.poster_path}
              name={show.title}
            />
            <div className="list-data">
              <div className="list-data__title">
                {`${show.title} (${show.vote_average})`}
              </div>
              <div className="list-data__genres">
                {show.genre_names.genre_name.map((genreName, i) =>
                  show.genre_names.length === i + 1
                    ? genreName
                    : `${genreName}, `,
                )}
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

HomeList.propTypes = propTypes;

export default HomeList;
