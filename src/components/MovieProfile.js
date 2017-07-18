import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

import Style from 'style-it';

const MovieProfile = (props) => {
  const movie = props.movie;
  const img = props.config.images;

  let posterURL = img.base_url + img.poster_sizes[3] + movie.poster_path;
  let backdropURL = img.base_url + img.backdrop_sizes[1] + movie.backdrop_path;

  let genres = props.movie.genres.map(genre => (
    <li key={genre.id} className="movie-genres">{genre.name}</li>
  ));

  if (typeof props.crew[0] !== 'undefined') {
    var crew = props.crew.slice(0,6)
          .map((cr,i) => (
            <li key={i} className="col-sm-2">
              <p className="crew-col text-center">
                <img src={img.base_url + img.profile_sizes[0] + cr.profile_path} alt={cr.name} /><br />
                <strong>{cr.name}</strong><br />
                <small>{cr.character}</small>
              </p>
            </li>
          ));
  }

  if (typeof props.similar[0] !== 'undefined') {
    var similar = props.similar.map((sim,i) => (
      <li key={i} className="col-sm-2 similar-movies__element"
          onClick={() => props.handleMovieClick(sim.id)}
        >
        <p className="crew-col text-center">
          <img src={img.base_url + img.poster_sizes[1] + sim.poster_path} alt={sim.original_title} /><br />
          <small>{sim.original_title}</small>
        </p>
      </li>
    ))
  }
  return (
  <div>
    <Style>
      {`
        div.custom_bg:before {
          background-image: radial-gradient(at 10% 30%, rgb(${props.dcolor[0]},${props.dcolor[1]},${props.dcolor[2]}) 0%, #342931 100%);
        }
        .main-header:before {
          background-image: url(${backdropURL});
        }
      `}
    </Style>

    <Grid className="main-header" fluid={true}>
      <div className="custom_bg">

        <Col sm={8} smOffset={2} className="main-col">

          <Row className="show-grid">
            <Col xs={4} className="poster-col">
              <img src={posterURL} className="img-responsive center-block" alt="poster" />
            </Col>

            <Col xs={7}>

              <Row className="profile-row">
                <Col xs={12}>
                  <h1 className="movie-title">{props.movie.original_title}</h1>
                    <ul className="list-inline title-tags">
                      <li>{props.movie.release_date.slice(0,4)}</li>
                      <li>{props.movie.runtime} min</li>
                      <li>
                        <ul className="list-inline title-tags__genres">
                          {genres}
                        </ul>
                      </li>
                      <li className="movie-rating">{props.movie.vote_average}</li>
                    </ul>
                  <h4>{props.movie.tagline}</h4>
                </Col>
              </Row>

              <Row className="profile-row">
                <Col xs={12}><h4>Overview</h4>{props.movie.overview}</Col>
              </Row>

              <Row className="profile-row profile-row--no-border">
                <Col xs={12}>
                  <h4>Cast</h4>
                  <ul className="list-inline">
                    {crew}
                  </ul>
                </Col>
              </Row>

            </Col>

          </Row>

        </Col>
      </div>

    </Grid>
    <Col sm={9} smOffset={2}>
      <h3>Similar movies</h3>
      <Row className="profile-row profile-row--no-border">
        <Col xs={12}>
          <ul className="list-inline">
            {similar}
          </ul>
        </Col>
      </Row>
    </Col>
  </div>
)
}

export default MovieProfile;
