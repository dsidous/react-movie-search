import React from 'react'
import { Grid, Col, Row } from 'react-bootstrap'
import {FormattedDate} from 'react-intl'

import '../styles/person.css'

function CastProfile(props){
  const { biography, birthday, deathday, name, place_of_birth, profile_path } = props.person;
  const profileURL = props.config.images.base_url + props.config.images.profile_sizes[2] + profile_path;
  const person_movies = props.person_movies.sort((a,b) => b.release_date.localeCompare(a.release_date)).map(person_movie => (
    <li key={person_movie.id} className="person-movies">
      { person_movie.poster_path !== null
        ? <img src={props.config.images.base_url + props.config.images.poster_sizes[1] + person_movie.poster_path}
           alt={person_movie.original_title}
           onClick={() => props.handlePersonMovieClick(person_movie.id)}
         />
        : <div className="movie-no-image-holder smaller"></div>
      }
      <p className="person-movie__release">
        {person_movie.release_date !== ''
         ? <FormattedDate value={person_movie.release_date}/>
         : ''
       }
      </p>
      <p className="person-movie__title">{person_movie.original_title}</p>
      <p className="person-movie__character">as {person_movie.character}</p>
    </li>
  ))

  return(
    <div>
      <Grid fluid={true}>

          <Col sm={8} smOffset={2} className="main-col">

            <Row className="show-grid">
              <Col xs={4} className="poster-col">
                { profile_path !== null
                  ? <img src={profileURL} className="img-responsive center-block" alt="poster" />
                  : <div className="movie-no-image-holder small"></div>
                }
              </Col>

              <Col xs={7}>

                <Row>
                  <Col xs={12}>
                    <h1>{name}</h1>
                    {place_of_birth}
                    {birthday &&
                      <span>, <FormattedDate value={birthday} /></span>
                    }
                    {deathday &&
                      <span> - <FormattedDate value={deathday} /></span>
                    }
                  </Col>
                </Row>

                <Row>
                  <Col xs={12}>
                    <h2>Biography</h2>
                    <div className="person-bio">
                      {biography}
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12}>
                    <h2>Credits</h2>
                    <ul className="list-inline">
                      {person_movies}
                    </ul>
                  </Col>
                </Row>

              </Col>

            </Row>

          </Col>

      </Grid>
    </div>
  )
}

export default CastProfile;
