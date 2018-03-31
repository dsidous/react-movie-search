import _ from 'lodash';
import React from 'react';

import MovieCard from "./MovieCard";

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
        {_.map(movies, movie => 
          <MovieCard 
            key={movie.id}
            movie={movie} 
            img_base_path={img_base_path} 
          />
        )}
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