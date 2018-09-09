import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import NoImage from "../images/noimage.jpg";
import NoBdImage from "../images/nobdimage.jpg";
import WatchlistBookmark from './WatchlistBookmark';

const MovieCard = ({
  history,
  img_base_path,
  movie,
  removeMovie
}) => {

  const goToMovie = movieId => (
    history.push(`/movie/${movieId}`)
  )

  return (
    <li className="movies-list__element">
      {movie.poster_path !== null ? (
        <picture
          className="movies-poster"
          onClick={() => goToMovie(movie.id)}
        >
          <source
            media="(min-width: 941px)"
            srcSet={img_base_path + movie.poster_path}
          />
          <source
            media="(max-width: 940px)"
            srcSet={img_base_path + movie.backdrop_path}
          />
          <img
            src={img_base_path + movie.poster_path}
            className="movies-poster"
            alt={movie.original_title}
          />
        </picture>
      ) : (
        <picture
          className="movies-poster"
          onClick={() => goToMovie(movie.id)}
        >
          <source media="(min-width: 941px)" srcSet={NoImage} />
          <source media="(max-width: 940px)" srcSet={NoBdImage} />
          <img src={NoBdImage} className="movies-poster" alt={movie.title} />
        </picture>
      )}

      <div className="clearfix">
        <div className="movies-title">
          {movie.title 
            ? movie.title
            : movie.name
          }
        </div>
        <div className="movies-rating">{movie.vote_average}</div>
      </div>
      <div className="clearfix">
        <div className="movies-year">
          {movie.release_date 
            ? movie.release_date.slice(0, 4)
            : movie.first_air_date.slice(0,4)
          }
        </div>
      </div>
      <div
        className={[
          "movies-overview ",
          movie.overview.length > 200 ? "long" : ""
        ].join(" ")}
      >
        {movie.overview.slice(0, movie.overview.indexOf(" ", 200))}
      </div>
      <WatchlistBookmark movie={movie}/>
    </li>
  );
};

MovieCard.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default withRouter(MovieCard);
