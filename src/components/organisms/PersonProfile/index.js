import React, { Component } from "react";
import { FormattedDate } from "react-intl";
import Markdown from "markdown-to-jsx";
import { Link } from "react-router-dom";

import SEO from "../../atoms/SEO";
import MediaImage from '../../atoms/MediaImage';
import PersonShows from '../../molecules/PersonShows';

class PersonProfile extends Component {
  render() {
    const {
      person: {
        biography,
        birthday,
        deathday,
        name,
        place_of_birth,
        profile_path,
        combined_credits,
        id
      }
    } = this.props;

    let firstName, lastName;

    if (name) {
      [firstName, ...lastName] = name.split(" ");
      lastName = lastName.join(" ");
    }


    const person_movies_known = () => {
      if (combined_credits) {
        const sorted = [].concat(combined_credits.cast)
          .sort((a, b) => b.vote_count - a.vote_count)
          .slice(0, 8);

        return sorted.map((person_movie, i) => (
          <div key={person_movie.id + i} className="person-movies-known">
            <MediaImage
              mediaType="poster"
              size={1}
              filePath={person_movie.poster_path}
              name={person_movie.title || person_movie.name}
              onClick={() =>
                this.props.handlePersonMovieClick(person_movie.id, person_movie.media_type)
              }
            />
            <p className="person-movie__title-known">
              {person_movie.title || person_movie.name}
            </p>
          </div>
        ));
      };

      return null;
    }

    return (
      <div>
        <SEO title={this.props.person.name} />
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
                    ,{" "}
                    <FormattedDate
                      value={birthday}
                      year="numeric"
                      month="long"
                      day="2-digit"
                    />
                  </span>
                )}
                {this.deathday && (
                  <span>
                    {" - "}
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
                    "person-bio",
                    biography.length > 500 ? "long" : ""
                  ].join(" ")}
                >
                  <Markdown options={{ forceInline: true }}>
                    {biography.slice(0, biography.indexOf(" ", 500))}
                  </Markdown>
                  <span className="person-bio__hidden">
                    <Markdown options={{ forceInline: true }}>
                      {biography.slice(biography.indexOf(" ", 500))}
                    </Markdown>
                  </span>
                  {biography.length > 500 && (
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
              {person_movies_known()}
            </div>
            <h4>Acting</h4>
            <div className="person-movies-grid">
              <PersonShows shows={combined_credits} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonProfile;
