import React from 'react'
import { Grid, Col, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'
import Style from 'style-it'
import Slider from 'react-slick'

import PlayTrailer from './PlayTrailer'
import Cast from './Cast'
import SimilarMovies from './SimilarMovies'

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
  dcolor: PropTypes.array.isRequired,
  handleMovieClick: PropTypes.func.isRequired
}

function MovieProfile(props) {
  const movie = props.movie;
  const img = props.config.images;

  let posterURL = img.base_url + img.poster_sizes[3] + movie.poster_path;
  let backdropURL = img.base_url + img.backdrop_sizes[1] + movie.backdrop_path;
  let video = (props.videos) ? props.videos.filter(video => video.type ==='Trailer')[0] : [];

  let genres = props.movie.genres.map(genre => (
    <li key={genre.id} className="movie-genres">{genre.name}</li>
  ));

  var backdrops_settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      fade: true,
      infinite: true,
      lazyLoad: true,
      pauseOnHover: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
  };

  // if (typeof props.images.backdrops !== 'undefined') {
  //   var backdrops = (
  //       <Slider {...backdrops_settings}>
  //         {props.images.backdrops.map((backdrop,i) => (
  //           <div key={i}>
  //             <div className="backdrop-element" style={{height: window.innerHeight,backgroundImage: 'url(' + img.base_url + img.backdrop_sizes[2] + backdrop.file_path + ')'}} ></div>
  //             {/* <img src={img.base_url + img.backdrop_sizes[2] + backdrop.file_path} alt="backdrop" /> */}
  //           </div>
  //         ))
  //       }
  //     </Slider>
  //   )
  // }

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

      {/* <div className="full-background">
        {backdrops}
      </div> */}

      <Grid className="main-header" fluid={true}>
        <div className="custom_bg">

          <Col sm={8} smOffset={2} className="main-col">

            <Row className="show-grid">
              <Col xs={4} className="poster-col">
                { movie.poster_path !== null
                  ? <img src={posterURL} className="img-responsive center-block" alt="poster" />
                  : <div className="movie-no-image-holder"></div>
                }
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
                    {video &&
                      <PlayTrailer video={video} />
                    }
                  </Col>
                </Row>

                <Row className="profile-row">
                  <Col xs={12}><h4>Overview</h4>{props.movie.overview}</Col>
                </Row>

                <Row className="profile-row profile-row--no-border">
                  <Col xs={12}>
                    <h4>Cast</h4>
                      {props.crew[0] &&
                        <Cast cast={props.crew.slice(0,9)}
                            profile_img_base_url={img.base_url + img.profile_sizes[1]}
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
                img_base_path={img.base_url + img.poster_sizes[1]}
              />
            }
          </Col>
        </Row>
      </Col>
    </div>
  )
}

export default MovieProfile;
