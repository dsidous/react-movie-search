import React from "react";
import PropTypes from "prop-types";

import MovieCard from "../MovieCard";

Result.propTypes = {
  config: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired
};

function Result({movies, config:{images:{base_url, poster_sizes}}, media}) {
  const img_base_path = base_url + poster_sizes[3];

  return (
    <ul className="movies-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} img_base_path={img_base_path} media={media}/>
      ))}
    </ul>
  );
}

export default Result;
