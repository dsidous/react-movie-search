import React, { Component } from "react";
import { FormattedDate } from "react-intl";
import Markdown from "markdown-to-jsx";
import { Link } from "react-router-dom";

import SEO from "./SEO";

import NoImage from "../images/noimage.jpg";

class CastProfile extends Component {
  render() {
    const {
      biography,
      birthday,
      deathday,
      name,
      place_of_birth,
      profile_path,
      movie_credits,
      id
    } = this.props.person;

    let firstName, lastName;

    if (name) {
      [firstName, ...lastName] = name.split(" ");

      lastName = lastName.join(" ");
    }

    const profileURL =
      this.props.config.images.base_url +
      this.props.config.images.profile_sizes[2] +
      profile_path;

    const posterBaseURL =
      this.props.config.images.base_url +
      this.props.config.images.poster_sizes[0];

    const person_movies = movie_credits
      ? movie_credits.cast
          .sort(
            (a, b) =>
              b.release_date ? b.release_date.localeCompare(a.release_date) : -1
          )
          .map(person_movie => (
            <div
              key={person_movie.id}
              className="person-movie"
              onClick={() => this.props.handlePersonMovieClick(person_movie.id)}
            >
              <p className="person-movie__poster">
                {person_movie.poster_path !== null ? (
                  <img
                    src={posterBaseURL + person_movie.poster_path}
                    alt={person_movie.title}
                  />
                ) : (
                  "-"
                )}
              </p>
              <p className="person-movie__release">
                {person_movie.release_date !== "" &&
                person_movie.release_date !== undefined
                  ? person_movie.release_date.substr(0, 4)
                  : ""}
              </p>
              <p className="person-movie__title">
                {person_movie.original_title}
                {person_movie.character && (
                  <span className="person-movie__character">
                    {" "}
                    as {person_movie.character}
                  </span>
                )}
              </p>
            </div>
          ))
      : "";

    const person_movies_known = movie_credits
      ? movie_credits.cast
          .sort((a, b) => b.vote_count - a.vote_count)
          .slice(0, 8)
          .map(person_movie => (
            <div key={person_movie.id} className="person-movies-known">
              <img
                src={
                  person_movie.poster_path !== null
                    ? this.props.config.images.base_url +
                      this.props.config.images.poster_sizes[1] +
                      person_movie.poster_path
                    : NoImage
                }
                alt={person_movie.original_title}
                onClick={() =>
                  this.props.handlePersonMovieClick(person_movie.id)
                }
              />
              <p className="person-movie__title-known">
                {person_movie.original_title}
              </p>
            </div>
          ))
      : "";

    return (
      <div>
        <SEO title={this.props.person.name} />
        <div className="person-wrapper">
          <div className="person-info-wrapper">
            <div className="person-poster">
              <Link to={`/person/${id}/images`}>
                {profile_path !== null ? (
                  <img
                    src={profileURL}
                    className="img-responsive center-block"
                    alt="poster"
                  />
                ) : (
                  <div className="movie-no-image-holder small" />
                )}
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
              {person_movies_known}
            </div>
            <h4>Acting</h4>
            <div className="person-movies-grid">{person_movies}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CastProfile;
