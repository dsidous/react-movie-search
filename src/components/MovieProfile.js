import React from "react";
import PropTypes from "prop-types";
import Style from "style-it";

import PlayTrailer from "./PlayTrailer";
import Cast from "./Cast";
import Crew from "./Crew";
import SimilarMovies from "./SimilarMovies";
import FullScreenBackdrop from "./FullScreenBackdrop";
import Reviews from "./Reviews";
import SEO from "./SEO";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

MovieProfile.propTypes = {
  config: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired,
  handleMovieClick: PropTypes.func.isRequired
};

function MovieProfile(props) {
  const {
    base_url,
    poster_sizes,
    backdrop_sizes,
    profile_sizes
  } = props.config.images;

  const {
    backdrop_path,
    poster_path,
    genres,
    original_title,
    release_date,
    runtime,
    vote_average,
    tagline,
    overview
  } = props.movie;

  const posterURL = base_url + poster_sizes[3] + poster_path;
  let backdropURL = base_url + backdrop_sizes[1] + backdrop_path;
  const video = props.movie.videos.results
    ? props.movie.videos.results.filter(video => video.type === "Trailer")[0]
    : [];

  const genres_html = genres.map(genre => (
    <li key={genre.id} className="movie-genres">
      {genre.name}
    </li>
  ));

  return (
    <div>
      <Style>
        {`
        .main-header:after {
          background-image: radial-gradient(at 10% 30%, rgb(${
            props.dcolor[0]
          },${props.dcolor[1]},${props.dcolor[2]}) 0%, #342931 100%);
        }
        .main-header:before {
          background-image: url(${backdropURL});
        }
      `}
      </Style>
      <SEO title={props.movie.original_title} />
      <div className="full-background">
        {props.movie.images.backdrops[0] && (
          <FullScreenBackdrop
            backdrop_img_path={base_url + backdrop_sizes[2]}
            backdrops={props.movie.images.backdrops}
          />
        )}
      </div>

      <div className="main-header">
        <div className="main-header-inner">
          <div className="poster">
            {poster_path !== null ? (
              <img src={posterURL} alt="poster" />
            ) : (
              <div className="movie-no-image-holder" />
            )}
          </div>
          <div className="movie-data">
            <h1 className="movie-title">
              {original_title}
              <span className="movie-rating">{vote_average}</span>
            </h1>

            <ul className="title-tags">
              <li>{release_date.slice(0, 4)}</li>
              <li>{runtime} min</li>
              <li>
                <ul className="title-tags__genres">{genres_html}</ul>
              </li>
            </ul>

            <h4 className="movie-tagline">{tagline}</h4>
          </div>

          <div className="overview">
            <h4>Overview</h4>
            {overview}
          </div>

          {video && <PlayTrailer video={video} />}

          {props.movie.credits.crew[0] && (
            <Crew crew={props.movie.credits.crew.slice(0, 4)} />
          )}
        </div>
      </div>
      {props.movie.credits.cast[0] && (
        <Cast
          cast={props.movie.credits.cast.slice(0, 6)}
          profile_img_base_url={base_url + profile_sizes[1]}
          handlePersonClick={props.handlePersonClick}
          handleFullCrewClick={props.handleFullCrewClick}
        />
      )}     

      {props.movie.reviews.results[0] && (
        <Reviews reviews={props.movie.reviews.results.slice(0, 4)} />
      )}

      {props.movie.similar.results[0] && (
        <SimilarMovies
          similar={props.movie.similar.results}
          img_base_path={base_url + poster_sizes[1]}
          handleMovieClick={props.handleMovieClick}
        />
      )}
    </div>
  );
}

export default MovieProfile;
