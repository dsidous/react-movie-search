import React, { Component } from "react";
import PropTypes from "prop-types";
import Style from "style-it";

import PlayTrailer from "../../atoms/PlayTrailer";
import Cast from "../../atoms/Cast";
import Crew from "../../atoms/Crew";
import SimilarMovies from "../../organisms/SimilarMovies";
import FullScreenBackdrop from "../../atoms/FullScreenBackdrop";
import Reviews from "../../molecules/Reviews";
import SEO from "../../atoms/SEO";
import WatchlistBookmark from '../../atoms/WatchlistBookmark';

class MovieProfile extends Component {

  static propTypes = {
    config: PropTypes.object.isRequired,
    movie: PropTypes.object.isRequired,
    dcolor: PropTypes.array.isRequired,
    handleMovieClick: PropTypes.func.isRequired
  };

  render() {
    const {
      config: {
        images: { secure_base_url, poster_sizes, backdrop_sizes, profile_sizes }
      },
      movie: { backdrop_path, poster_path, genres, title,
        release_date, reviews, runtime, vote_average,
        tagline, overview, images: { backdrops },
        videos, similar, credits: { cast, crew },
      },
      dcolor,
      movie,
    } = this.props;

    const posterURL = secure_base_url + poster_sizes[3] + poster_path;
    const backdropURL = secure_base_url + backdrop_sizes[1] + backdrop_path;
    const video = videos
      ? videos.filter(video => video.type === "Trailer")[0]
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
            background-image: radial-gradient(at 10% 30%, rgb(${dcolor[0]},${dcolor[1]},${dcolor[2]}) 0%, #342931 100%);
          }
          .main-header:before {
            background-image: url(${backdropURL});
          }
        `}
        </Style>
        <SEO title={title} />
        <div className="full-background">
          {backdrops[0] && (
            <FullScreenBackdrop
              backdrops={backdrops.map(image => `${secure_base_url}${backdrop_sizes[2]}${image.file_path}`)}
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
              <WatchlistBookmark movie={movie} />
            </div>
            <div className="movie-data">
              <h1 className="movie-title">
                {title}
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

            {crew[0] && <Crew crew={crew.slice(0, 4)} />}
          </div>
        </div>
        {cast[0] &&
          <Cast
            cast={cast.slice(0, 6)}
            handlePersonClick={this.props.handlePersonClick}
            handleFullCrewClick={this.props.handleFullCrewClick}
          />
        }

        {reviews[0] && <Reviews reviews={reviews.slice(0, 4)} />}

        {similar.results[0] &&
          <SimilarMovies
            similar={similar.results}
            img_base_path={secure_base_url + poster_sizes[1]}
            handleMovieClick={this.props.handleMovieClick}
          />
        }
      </div>
    );
  }
}

export default MovieProfile;
