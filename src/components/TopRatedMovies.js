import React from "react";
import PropTypes from "prop-types";

TopRatedMovies.propTypes = {
  config: PropTypes.object.isRequired
};

function TopRatedMovies(props) {
  const img_base_path = props.config.images
    ? props.config.images.base_url + props.config.images.poster_sizes[3]
    : "";

  const MovieList = () =>
    props.topMovies.map((movie, i) => (
      <MovieListElement
        {...props}
        movie={movie}
        keys={i}
        key={i}
      />
    ));

  const MovieListElement = props => (
    <div
      className={"top-list__element " + (props.keys === 0 ? "featured" : "")}
      onClick={() => props.goToMovie(props.movie.id)}
    >
      {props.movie.poster_path !== null &&
        props.keys === 0 && (
          <img
            src={img_base_path + props.movie.poster_path}
            alt={props.movie.original_title}
          />
        )}
      {props.movie.backdrop_path !== null &&
        props.keys !== 0 && (
          <img
            src={img_base_path + props.movie.backdrop_path}
            alt={props.movie.original_title}
          />
        )}
      <div className="top-list__element-title">{props.movie.title}</div>
    </div>
  );

  return (
    <div>
      {props.topMovies && (
        <div>
          <h3 className="top-list-main-title">{props.title}</h3>
          <div className="top-list">
            <MovieList {...props}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default TopRatedMovies;
