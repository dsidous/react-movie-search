import React from 'react'
import { Grid, Col, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'
// import Style from 'style-it'

import PlayTrailer from './PlayTrailer'
import Cast from './Cast'
import SimilarMovies from './SimilarMovies'
import FullScreenBackdrop from './FullScreenBackdrop'

import '../styles/movie.css'
import '../styles/similar-movies.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

MovieProfile.propTypes = {
  config: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired,
  crew: PropTypes.array.isRequired,
  similar: PropTypes.array.isRequired,
  videos: PropTypes.array.isRequired,
  images: PropTypes.object.isRequired,
  // dcolor: PropTypes.array.isRequired,
  handleMovieClick: PropTypes.func.isRequired
}

function MovieProfile(props) {
  const { base_url,
          poster_sizes,
          backdrop_sizes,
          profile_sizes
        } = props.config.images;

  const { poster_path,
          genres,
          original_title,
          release_date,
          runtime,
          vote_average,
          tagline,
          overview
        } = props.movie;

  let posterURL = base_url + poster_sizes[3] + poster_path;
  // let backdropURL = base_url + backdrop_sizes[1] + backdrop_path;
  let video = (props.videos) ? props.videos.filter(video => video.type ==='Trailer')[0] : [];

  let genres_html = genres.map(genre => (
    <li key={genre.id} className="movie-genres">{genre.name}</li>
  ));

  return (
    <div>
      {/* <Style>
        {`
          div.custom_bg:before {
            background-image: radial-gradient(at 10% 30%, rgb(${props.dcolor[0]},${props.dcolor[1]},${props.dcolor[2]}) 0%, #342931 100%);
          }
          .main-header:before {
            background-image: url(${backdropURL});
          }
        `}
      </Style> */}

      <div className="full-background">
        <FullScreenBackdrop
          backdrop_img_path={base_url + backdrop_sizes[2]}
          backdrops={props.images.backdrops}
        />
      </div>

      <Grid className="main-header" fluid={true}>
        <div className="custom_bg">

          <Col sm={8} smOffset={2} className="main-col">

            <Row className="show-grid">
              <Col xs={4} className="poster-col">
                { poster_path !== null
                  ? <img src={posterURL} className="img-responsive center-block" alt="poster" />
                  : <div className="movie-no-image-holder"></div>
                }
              </Col>

              <Col xs={7}>

                <Row className="profile-row">
                  <Col xs={12}>
                    <h1 className="movie-title">
                      {original_title}
                      <span className="movie-rating">{vote_average}</span>
                    </h1>

                    <ul className="list-inline title-tags">
                      <li>{release_date.slice(0,4)}</li>
                      <li>{runtime} min</li>
                      <li>
                        <ul className="list-inline title-tags__genres">
                          {genres_html}
                        </ul>
                      </li>                      
                    </ul>
                    <h4>{tagline}</h4>
                    {video &&
                      <PlayTrailer video={video} />
                    }
                  </Col>
                </Row>

                <Row className="profile-row">
                  <Col xs={12}><h4>Overview</h4>{overview}</Col>
                </Row>

                <Row className="profile-row profile-row--no-border">
                  <Col xs={12}>
                    <h4>Cast</h4>
                      {props.crew[0] &&
                        <Cast cast={props.crew.slice(0,9)}
                            profile_img_base_url={base_url + profile_sizes[1]}
                            handlePersonClick={props.handlePersonClick}
                        />
                      }
                  </Col>
                </Row>

              </Col>

            </Row>

          </Col>
        </div>

      </Grid>
      <Col sm={8} smOffset={2}>
        <h3>Similar movies</h3>
        <Row className="profile-row profile-row--no-border">
          <Col xs={12}>
            {props.similar[0] &&
              <SimilarMovies
                similar={props.similar}
                img_base_path={base_url + poster_sizes[1]}
                handleMovieClick={props.handleMovieClick}
              />
            }
          </Col>
        </Row>
      </Col>
    </div>
  )
}

export default MovieProfile;
