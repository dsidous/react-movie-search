import _ from 'lodash';
import React from 'react';

import NoImage from "../images/noimage.jpg";

const WatchList = (props) => {
  
  const {
    movies,
    config
  } = props;

  const img_base_path = config.images.base_url + config.images.poster_sizes[2];

  return (
    <div>
      {_.size(movies) > 0 
      ? (
        <ul className="movies-list movies-list--watchlist">
        {_.map(movies, movie => (
        <li key={movie.id} className="movies-list__element">
        {movie.poster_path !== null ? (
          <picture
            className="movies-poster"
            onClick={() => props.goToMovie(movie.id)}
          >            
            <img
              src={img_base_path + movie.poster_path}
              className="movies-poster"
              alt={movie.title}
            />
          </picture>
        ) : (
          <picture
            className="movies-poster"
            onClick={() => props.goToMovie(movie.id)}
          >
            <img
              src={NoImage}
              className="movies-poster"
              alt={movie.title}
            />
          </picture>
        )}

        <div className="clearfix">
          <div className="movies-title">{movie.title}</div>
          <div className="movies-rating">{movie.vote_average}</div>
          <div className="movies-remove">
            <button onClick={() => props.removeMovie(movie.id)}>x</button>
          </div>
        </div>

        <div className="clearfix">
          <div className="movies-year">{movie.release_date.slice(0, 4)}</div>          
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
      </ul>)
      : (
        <div>
          EMPTY
        </div>
      )}
    </div>
  )
}

export default WatchList;