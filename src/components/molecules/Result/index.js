import React from "react";
import PropTypes from "prop-types";

import MovieCard from "../MovieCard";

Result.propTypes = {
  config: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired
};

function Result(props) {
  let img_base_path =
    props.config.images.base_url +
    props.config.images.poster_sizes[3];

  return (
    <ul className="movies-list">
      {props.movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} img_base_path={img_base_path} />
      ))}
    </ul>
  );
}

export default Result;
