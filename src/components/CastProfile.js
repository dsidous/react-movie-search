import React from 'react'
import { FormattedDate } from 'react-intl'

import '../styles/person.css'

function CastProfile(props) {
  const { biography, birthday, deathday, name, place_of_birth, profile_path, movie_credits } = props.person;
  const profileURL = props.config.images.base_url + props.config.images.profile_sizes[2] + profile_path;
  const person_movies = movie_credits 
        ? movie_credits.cast.sort((a, b) => (
            b.release_date ? b.release_date.localeCompare(a.release_date) : -1
          ))
          .map(person_movie => (
            <div key={person_movie.id} className="person-movies" onClick={() => props.handlePersonMovieClick(person_movie.id)}>        
              <p className="person-movie__release">
                {person_movie.release_date !== '' && person_movie.release_date !== undefined
                  ? person_movie.release_date.substr(0,4)
                  : ''
                }
              </p>
              <p className="person-movie__title">{person_movie.original_title}
                <span className="person-movie__character"> as {person_movie.character}</span>
              </p>  
            </div>
          )) 
          : '';

    const person_movies_known = movie_credits
          ? movie_credits.cast.sort((a, b) => (
            b.vote_average - a.vote_average
          )).slice(0,8)
            .map(person_movie => (
              <div key={person_movie.id} className="person-movies-known">
                {person_movie.poster_path !== null
                  ? <img src={props.config.images.base_url + props.config.images.poster_sizes[1] + person_movie.poster_path}
                    alt={person_movie.original_title}
                    onClick={() => props.handlePersonMovieClick(person_movie.id)}
                  />
                  : <div className="movie-no-image-holder smaller"></div>
                }
                <p className="person-movie__title-known">{person_movie.original_title}</p>
              </div>
            )) 
          : ''; 

  return (
    <div className="person-wrapper">
      <div className="person-info-wrapper">
        <div className="person-poster">
          {profile_path !== null
            ? <img src={profileURL} className="img-responsive center-block" alt="poster" />
            : <div className="movie-no-image-holder small"></div>
          }
        </div>
        <div className="person-info">
          <h3 className="person-name">{name}</h3>
          <div>
            {place_of_birth}
            {birthday &&
              <span>, <FormattedDate value={birthday} year='numeric' month='long' day='2-digit' /></span>
            }
            {deathday &&
              <span> - <FormattedDate value={deathday} year='numeric' month='long' day='2-digit' /></span>
            }
          </div>
        </div>
        <div className="person-bio-wrapper">
          <h4>Biography</h4>
          <div className="person-bio">
            {biography}
          </div>
        </div>
      </div>
      <div className="person-movies-wrapper">      
        <h4>Knonw For</h4>
        <div className="person-movies-known-grid">
          {person_movies_known}
        </div>
        <h4>Acting</h4>
        <div className="person-movies-grid">
          {person_movies}
        </div>
      </div>
    </div>
  )
}

export default CastProfile;
