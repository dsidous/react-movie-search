import React, { Component } from 'react';

import { propTypes } from './propTypes';
import MediaImage from '../../atoms/MediaImage';

class TopRatedMovies extends Component {
  static propTypes = propTypes;

  state = {
    active: -1,
    topGenres: [
      { id: -1, name: 'All' },
      { id: 28, name: 'Action' },
      { id: 35, name: 'Comedy' },
      { id: 18, name: 'Drama' },
      { id: 10751, name: 'Family' },
      { id: 878, name: 'Science Fiction' },
      { id: 53, name: 'Thriller' },
    ],
  };

  selectGenre = (topGenreId) => {
    const { filterTopMovies } = this.props;
    this.setState({ active: topGenreId });
    filterTopMovies(topGenreId);
  }

  genresList = () => {
    const { active, topGenres } = this.state;

    return topGenres.map(topGenre => (
      <li
        key={topGenre.id}
        className={topGenre.id === active ? 'active' : ''}
      >
        <span
          onClick={() => this.selectGenre(topGenre.id)}
          onKeyDown={() => this.selectGenre(topGenre.id)}
          role="button"
          tabIndex="-1"
        >
          {topGenre.name}
        </span>
      </li>
    ));
  };

  render() {
    const { topMovies, goToMovie } = this.props;
    return (
      <div>
        {topMovies && (
          <div>
            <h3 className="top-list-main-title">
              Movies of the day
            </h3>
            <ul className="top-genres-list">
              {this.genresList()}
            </ul>
            <div className="top-list">
              {topMovies.map((movie, i) => (
                <div
                  key={movie.id}
                  className={
                    ['top-list__element',
                      i === 0 ? 'featured' : '',
                    ].join(' ')
                  }
                  onClick={() => goToMovie(movie.id)}
                  onKeyDown={() => goToMovie(movie.id)}
                  role="link"
                  tabIndex="-1"
                >
                  {movie.poster_path !== null && i === 0 && (
                    <MediaImage
                      mediaType="poster"
                      size={5}
                      filePath={movie.poster_path}
                      name={movie.title}
                    />
                  )}
                  {movie.backdrop_path !== null && i !== 0 && (
                    <MediaImage
                      mediaType="poster"
                      size={5}
                      filePath={movie.backdrop_path}
                      name={movie.title}
                    />
                  )}
                  <div className="top-list__element-title">{movie.title}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default TopRatedMovies;
