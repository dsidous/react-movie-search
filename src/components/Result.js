import React from "react";
import PropTypes from "prop-types";

import NoImage from "../images/noimage.jpg";
import NoBdImage from "../images/nobdimage.jpg";

Result.propTypes = {
  config: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
  goToMovie: PropTypes.func.isRequired
};

function Result(props) {
  let img_base_path =
    props.config.config.images.base_url +
    props.config.config.images.poster_sizes[3];

  return (
    <ul className="movies-list">
      {props.movies.map(movie => (
        <li key={movie.id} className="movies-list__element">
          {movie.poster_path !== null ? (
            <picture
              className="movies-poster"
              onClick={() => props.goToMovie(movie.id)}
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
              onClick={() => props.goToMovie(movie.id)}
            >
              <source media="(min-width: 941px)" srcSet={NoImage} />
              <source media="(max-width: 940px)" srcSet={NoBdImage} />
              <img
                src={NoBdImage}
                className="movies-poster"
                alt={movie.title}
              />
            </picture>
          )}

          <div className="clearfix">
            <div className="movies-title">{movie.title}</div>
            <div className="movies-rating">{movie.vote_average}</div>
          </div>

          <div className="clearfix">
            <div className="movies-year">{movie.release_date.slice(0, 4)}</div>
            <div className="movies-genres">
              {movie.genre_ids.map((genreId, i) =>
                props.config.genres
                  .filter(genre => genre.id === genreId)
                  .map(g => {
                    return movie.genre_ids.length === i + 1
                      ? g.name
                      : g.name + ", ";
                  })
              )}
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
        </li>
      ))}
    </ul>
  );
}

export default Result;
