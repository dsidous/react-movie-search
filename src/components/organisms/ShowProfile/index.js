/* eslint-disable camelcase */
import React from 'react';
import Style from 'style-it';

import { propTypes } from './propTypes';
import PlayTrailer from '../../atoms/PlayTrailer';
import TopCast from '../../molecules/TopCast';
import Crew from '../../atoms/Crew';
import SimilarMovies from '../SimilarMovies';
import FullScreenBackdrop from '../../atoms/FullScreenBackdrop';
import Reviews from '../../molecules/Reviews';
import SEO from '../../atoms/SEO';
import WatchlistBookmark from '../../atoms/WatchlistBookmark';
import LastSeason from '../../molecules/LastSeason';

const ShowProfile = ({
  config: {
    images: { secure_base_url, poster_sizes, backdrop_sizes },
  },
  show: {
    id,
    backdrop_path,
    poster_path,
    genres,
    name,
    title,
    release_date,
    first_air_date,
    reviews,
    runtime,
    vote_average,
    tagline,
    overview,
    images: { backdrops },
    videos,
    similar,
    credits: { cast, crew },
    seasons,
  },
  dcolor,
  show,
  handleFullCrewClick,
  handleShowClick,
}) => {
  const showDate = first_air_date || release_date;
  const showTitle = title || name;
  let lastSeason = null;

  if (seasons) {
    [lastSeason] = seasons.sort((a, b) => b.season_number - a.season_number);
  }

  const posterURL = secure_base_url + poster_sizes[3] + poster_path;
  const backdropURL = secure_base_url + backdrop_sizes[1] + backdrop_path;
  const video = videos
    ? videos.filter(element => element.type === 'Trailer')[0]
    : [];

  const genres_html = genres.map(genre => (
    <li key={genre.id} className="movie-genres">
      {genre.name}
    </li>
  ));

  return (
    <div>
      <Style>
        {`
        .main-header:after {
          background-image: radial-gradient(at 10% 30%, rgb(${dcolor[0]},${dcolor[1]},${dcolor[2]}) 0%, #342931 100%);
        }
        .main-header:before {
          background-image: url(${backdropURL});
        }
      `}
      </Style>
      <SEO title={showTitle} />
      <div className="full-background">
        {backdrops[0] && (
          <FullScreenBackdrop
            backdrops={backdrops.map(
              image =>
                `${secure_base_url}${backdrop_sizes[2]}${image.file_path}`,
            )}
          />
        )}
      </div>

      <div className="main-header">
        <div className="main-header-inner">
          <div className="poster">
            {poster_path !== null ? (
              <img src={posterURL} alt="poster" />
            ) : (
              <div className="movie-no-image-holder" />
            )}
            <WatchlistBookmark movie={show} />
          </div>
          <div className="movie-data">
            <h1 className="movie-title">
              {showTitle}
              <span className="movie-rating">{vote_average}</span>
            </h1>

            <ul className="title-tags">
              <li>{showDate.slice(0, 4)}</li>
              {runtime && <li>{`${runtime} min`}</li>}
              <li>
                <ul className="title-tags__genres">{genres_html}</ul>
              </li>
            </ul>

            <h4 className="movie-tagline">{tagline}</h4>
          </div>

          <div className="overview">
            <h4>Overview</h4>
            {overview}
          </div>

          {video && <PlayTrailer video={video} />}

          {crew[0] && <Crew crew={crew.slice(0, 4)} />}
        </div>
      </div>
      {cast[0] && (
        <TopCast
          cast={cast.slice(0, 6)}
          handleFullCrewClick={handleFullCrewClick}
        />
      )}
      {lastSeason && <LastSeason tvId={id} season={lastSeason} />}

      {reviews && reviews[0] && <Reviews reviews={reviews} />}

      {similar.results[0] && (
        <SimilarMovies
          similar={similar.results}
          handleMovieClick={handleShowClick}
        />
      )}
    </div>
  );
};

ShowProfile.propTypes = propTypes;

export default ShowProfile;
