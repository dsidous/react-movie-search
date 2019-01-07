import _ from 'lodash';
import React from 'react';

import { FirebaseAuthContext } from '../../../firebase/FirebaseAuthProvider';
import MovieCard from "../../molecules/MovieCard";

const WatchList = (props) => {

  if (props.configLoading) {
    return null
  }

  const { config } = props;

  const img_base_path = config.images.secure_base_url + config.images.poster_sizes[2];

  return (
    <FirebaseAuthContext.Consumer>
      {({ user }) => (
        <div>
          {_.size(user.watchlist) > 0
            ? (
              <ul className="movies-list movies-list--watchlist">
                {_.map(user.watchlist, movie => {
                  return (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                      img_base_path={img_base_path}
                    />
                  )
                })}
              </ul>)
            : (
              <div>
                EMPTY
          </div>
            )
          }</div>)

      }
    </FirebaseAuthContext.Consumer>
  )
}

export default WatchList;