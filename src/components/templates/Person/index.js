import React, { Component } from "react";
import { FormattedDate } from "react-intl";
import Markdown from "markdown-to-jsx";
import { Link } from "react-router-dom";

import SEO from "../../atoms/SEO";

import NoImage from "../../../images/noimage.jpg";

class CastProfile extends Component {
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
        id},
      config: { images: {
        secure_base_url,
        profile_sizes,
        poster_sizes
      }}
    } = this.props;

    let firstName, lastName;

    if (name) {
      [firstName, ...lastName] = name.split(" ");
      lastName = lastName.join(" ");
    }

    const profileURL = secure_base_url + profile_sizes[2] + profile_path;

    const posterBaseURL = secure_base_url + poster_sizes[0];

    const person_shows = (shows) => { 
      if(shows.cast.length>0) {
       
      return shows.cast
        .sort((a, b) => {
          const data_b = b.release_date || b.first_air_date;  
          const data_a = a.release_date || a.first_air_date;  
          return data_b ? data_b.localeCompare(data_a) : -1
        })
        .map((show,i) => {
          const {id,poster_path,character} = show;
          const show_attr = show.release_date 
            ? {title:"title",release_date:"release_date",show_type:"movie"}
            : {title:"name",release_date:"first_air_date",show_type:"tv"};
          
          const title = show[show_attr.title];
          const release_date = show[show_attr.release_date] || '';
          const { show_type } = show_attr;
          return (
            <div
              key={id + i}
              className="person-movie"
              onClick={() => this.props.handlePersonMovieClick(id,show_type)}
            >
              <p className="person-movie__poster">
                {poster_path !== null 
                  ? (
                    <img
                      src={posterBaseURL + poster_path}
                      alt={title}
                    />
                    ) 
                  : (
                      "-"
                    )}
              </p>
              <p className="person-movie__release">
                {release_date !== "" &&
                  release_date !== undefined
                  ? release_date.substr(0, 4)
                  : ""}
              </p>
              <p className="person-movie__title">
                {title}
                {character && (
                  <span className="person-movie__character">
                    {" "}
                    as {character}
                  </span>
                )}
              </p>
            </div>
          )
        })
      }
    }  
    const person_movies_known = combined_credits
      ? combined_credits.cast
        .sort((a, b) => b.vote_count - a.vote_count)
        .slice(0, 8)
        .map((person_movie,i) => (
          <div key={person_movie.id + i} className="person-movies-known">
            <img
              src={
                person_movie.poster_path !== null
                  ? secure_base_url + poster_sizes[1] + person_movie.poster_path
                  : NoImage
              }
              alt={person_movie.title || person_movie.name }
              onClick={() =>
                this.props.handlePersonMovieClick(person_movie.id,person_movie.media_type)
              }
            />
            <p className="person-movie__title-known">
              {person_movie.title || person_movie.name}
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
            <div className="person-movies-grid">{person_shows(combined_credits)}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CastProfile;
