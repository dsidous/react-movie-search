/* eslint-disable camelcase */
import React from 'react';
import { FormattedDate } from 'react-intl';
import Markdown from 'markdown-to-jsx';
import { Link } from 'react-router-dom';

import { propTypes } from './propTypes';
import SEO from '../../atoms/SEO';
import MediaImage from '../../atoms/MediaImage';
import PersonShows from '../../molecules/PersonShows';
import PersonKnownFor from '../../molecules/PersonKnownFor';

const PersonProfile = ({
  person: {
    biography,
    birthday,
    deathday,
    name,
    place_of_birth,
    profile_path,
    combined_credits,
    id,
  },
}) => {
  let firstName;
  let lastName;

  if (name) {
    [firstName, ...lastName] = name.split(' ');
    lastName = lastName.join(' ');
  }

  return (
    <div>
      <SEO title={name} />
      <div className="person-wrapper">
        <div className="person-info-wrapper">
          <div className="person-poster">
            <Link to={`/person/${id}/images`}>
              <MediaImage
                className="img-responsive center-block"
                mediaType="profile"
                size={2}
                filePath={profile_path}
                name="poster"
              />
            </Link>
          </div>
          <div className="person-info">
            <h3 className="person-name" data-name={lastName}>
              {firstName}
            </h3>
            <div>
              {`${lastName}, ${place_of_birth}`}
              {birthday && (
                <span>
                  ,&nbsp;
                  <FormattedDate
                    value={birthday}
                    year="numeric"
                    month="long"
                    day="2-digit"
                  />
                </span>
              )}
              {deathday && (
                <span>
                  &nbsp;-&nbsp;
                  <FormattedDate
                    value={deathday}
                    year="numeric"
                    month="long"
                    day="2-digit"
                  />
                </span>
              )}
            </div>
          </div>
          {biography && (
            <div className="person-bio-wrapper">
              <h4>Biography</h4>
              <input
                type="checkbox"
                className="person-bio__more"
                id="person-bio__more"
              />
              <div
                className={[
                  'person-bio',
                  biography.length > 500 ? 'long' : '',
                ].join(' ')}
              >
                <Markdown options={{ forceInline: true }}>
                  {biography.slice(0, biography.indexOf(' ', 500))}
                </Markdown>
                <span className="person-bio__hidden">
                  <Markdown options={{ forceInline: true }}>
                    {biography.slice(biography.indexOf(' ', 500))}
                  </Markdown>
                </span>
                {biography.length > 500 && (
                  // eslint-disable-next-line jsx-a11y/label-has-associated-control
                  <label
                    htmlFor="person-bio__more"
                    className="person-bio__more-label"
                  />
                )}
              </div>
            </div>
          )}
        </div>
        <div className="person-movies-wrapper">
          <h4>Knonw For</h4>
          <div className="person-movies-known-grid">
            <PersonKnownFor combinedCredits={combined_credits} />
          </div>
          <h4>Acting</h4>
          <div className="person-movies-grid">
            <PersonShows shows={combined_credits} />
          </div>
        </div>
      </div>
    </div>
  );
};

PersonProfile.propTypes = propTypes;

export default PersonProfile;
