import React, { Component } from "react";
import PropTypes from "prop-types";
import Style from "style-it";

import PlayTrailer from "../../components/PlayTrailer";
import Cast from "../../components/Cast";
import Crew from "../../components/Crew";
import SimilarMovies from "../../components/SimilarMovies";
import FullScreenBackdrop from "../../components/FullScreenBackdrop";
import Reviews from "../../components/Reviews";
import SEO from "../../components/SEO";
import WatchlistBookmark from '../../components/WatchlistBookmark';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class MovieProfile extends Component {

  static propTypes = {
    config: PropTypes.object.isRequired,
    movie: PropTypes.object.isRequired,
    dcolor: PropTypes.array.isRequired,
    handleMovieClick: PropTypes.func.isRequired
  };

  componentDidMount = () => { window.scrollTo(0, 0) }

  render() {
    const {
      base_url,
      poster_sizes,
      backdrop_sizes,
      profile_sizes
    } = this.props.config.images;

    const {
      backdrop_path,
      poster_path,
      genres,
      title,
      release_date,
      runtime,
      vote_average,
      tagline,
      overview
    } = this.props.movie;

    const posterURL = base_url + poster_sizes[3] + poster_path;
    let backdropURL = base_url + backdrop_sizes[1] + backdrop_path;
    const video = this.props.movie.videos
      ? this.props.movie.videos.filter(video => video.type === "Trailer")[0]
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
            this.props.dcolor[0]
            },${this.props.dcolor[1]},${this.props.dcolor[2]}) 0%, #342931 100%);
        }
        .main-header:before {
          background-image: url(${backdropURL});
        }
      `}
        </Style>
        <SEO title={this.props.movie.title} />
        <div className="full-background">
          {this.props.movie.images.backdrops[0] && (
            <FullScreenBackdrop
              backdrop_img_path={base_url + backdrop_sizes[2]}
              backdrops={this.props.movie.images.backdrops}
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
              {/* <WatchlistBookmark movie={this.props.movie} /> */}
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

            {this.props.movie.credits.crew[0] && (
              <Crew crew={this.props.movie.credits.crew.slice(0, 4)} />
            )}
          </div>
        </div>
        {this.props.movie.credits.cast[0] && (
          <Cast
            cast={this.props.movie.credits.cast.slice(0, 6)}
            profile_img_base_url={base_url + profile_sizes[1]}
            handlePersonClick={this.props.handlePersonClick}
            handleFullCrewClick={this.props.handleFullCrewClick}
          />
        )}

        {this.props.movie.reviews[0] && (
          <Reviews reviews={this.props.movie.reviews.slice(0, 4)} />
        )}

        {this.props.movie.similar.results[0] && (
          <SimilarMovies
            similar={this.props.movie.similar.results}
            img_base_path={base_url + poster_sizes[1]}
            handleMovieClick={this.props.handleMovieClick}
          />
        )}
      </div>
    );
  }
}

export default MovieProfile;
