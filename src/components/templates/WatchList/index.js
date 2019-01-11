import _ from 'lodash';
import React from 'react';

import { FirebaseAuthContext } from '../../../firebase/FirebaseAuthProvider';
import MovieCard from "../../molecules/MovieCard";
import Spinner from '../../atoms/Spinner';
import PageTransition from '../../atoms/PageTransition';

const WatchList = (props) => {

  if (props.configLoading) {
    return <Spinner />
  }

  const { config } = props;
  const img_base_path = config.images.secure_base_url + config.images.poster_sizes[2];

  return (
    <PageTransition>
      <FirebaseAuthContext.Consumer>
        {({ user }) => (
          <div>
            {_.size(user.watchlist) > 0
              ? (
                <ul className="movies-list movies-list--watchlist">
                  {_.map(user.watchlist, movie => {
                    const media = movie.__typename === "Tv_detailed" || movie.__typename === "Tv" ? "tv" : "movie";
                    return (
                      <MovieCard 
                        key={movie.id} 
                        movie={movie} 
                        img_base_path={img_base_path} 
                        media={media}
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
    </PageTransition>
  )
}

export default WatchList;