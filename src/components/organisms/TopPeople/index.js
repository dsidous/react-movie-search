import React from 'react';
import { Link } from 'react-router-dom';

import { propTypes } from './propTypes';
import MyPager from '../../atoms/Pager';
import MediaImage from '../../atoms/MediaImage';

const TopPeopleProfile = ({ toppeople, page, handlePageSelect }) => (
  <div className="top-people">
    <h2>POPULAR PEOPLE</h2>
    <div className="top-people__list">
      {
        toppeople.map(person => (
          <Link key={person.id} to={`/person/${person.id}`}>
            <figure className="top-people__list-element">
              <MediaImage
                mediaType="profile"
                size={1}
                filePath={person.profile_path}
                name={person.name}
                className="top-people__list-element__img"
              />
              <figcaption className="top-people__list-element__name">
                {person.name}
              </figcaption>
            </figure>
          </Link>
        ))
      }
    </div>
    <MyPager
      page={page}
      handlePageSelect={handlePageSelect}
    />
  </div>
);

TopPeopleProfile.propTypes = propTypes;

export default TopPeopleProfile;
