import React from "react";
import PropTypes from "prop-types";

import NoImage from "../../../images/noimage.jpg";
import NoBdImage from "../../../images/nobdimage.jpg";
import WatchlistBookmark from '../../atoms/WatchlistBookmark';

const MovieCard = ({ img_base_path, movie, media }, context) => {

  const goToMovie = movieId => (
    context.router.history.push(`/${media}/${movieId}`)
  )

  const { 
    id, title, overview, poster_path, 
    backdrop_path, vote_average, release_date,
    name, first_air_date
  } = movie;

  const mtitle = title || name;
  const date = release_date || first_air_date;

  return (
    <li className="movies-list__element">
      {poster_path !== null ? (
        <picture
          className="movies-poster"
          onClick={() => goToMovie(id)}
        >
          <source
            media="(min-width: 941px)"
            srcSet={img_base_path + poster_path}
          />
          <source
            media="(max-width: 940px)"
            srcSet={img_base_path + backdrop_path}
          />
          <img
            src={img_base_path + poster_path}
            className="movies-poster"
            alt={title}
          />
        </picture>
      ) : (
          <picture
            className="movies-poster"
            onClick={() => goToMovie(id)}
          >
            <source media="(min-width: 941px)" srcSet={NoImage} />
            <source media="(max-width: 940px)" srcSet={NoBdImage} />
            <img src={NoBdImage} className="movies-poster" alt={mtitle} />
          </picture>
        )}

      <div className="clearfix">
        <div className="movies-title">
          {mtitle}
        </div>
        <div className="movies-rating">{vote_average}</div>
      </div>
      <div className="clearfix">
        <div className="movies-year">
          {date.slice(0, 4)}
        </div>
      </div>
      <div
        className={[
          "movies-overview ",
          overview.length > 200 ? "long" : ""
        ].join(" ")}
      >
        {overview.slice(0, overview.indexOf(" ", 200))}
      </div>
      <WatchlistBookmark movie={movie} />
    </li>
  );
};

MovieCard.contextTypes = {
  router: PropTypes.object.isRequired
};

export default MovieCard;
