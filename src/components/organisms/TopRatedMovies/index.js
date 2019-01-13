import React, { Component } from "react";
import MediaImage from '../../atoms/MediaImage';

class TopRatedMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: -1
    };

  }

  selectGenre = (topGenreId) => {
    this.setState({active : topGenreId});
    this.props.filterTopMovies(topGenreId);
  }
  
  render() {
    const topGenres = [
      { id: -1, name: "All" },
      { id: 28, name: "Action" },
      { id: 35, name: "Comedy" },
      { id: 18, name: "Drama" },
      { id: 10751, name: "Family" },
      { id: 878, name: "Science Fiction" },
      { id: 53, name: "Thriller" }
    ];
  
    
    return (
      <div>
        {this.props.topMovies && (
          <div>
            <h3 className="top-list-main-title">Movies of the day</h3>
            <ul className="top-genres-list">
              {topGenres.map((topGenre, i) => (
                <li key={topGenre.id}
                  className={topGenre.id === this.state.active ? "active" : ""}
                  onClick={() => this.selectGenre(topGenre.id)}
                >
                  {topGenre.name}
                </li>
              ))}
            </ul>
            <div className="top-list">
              {this.props.topMovies.map((movie, i) => (
                <div key={movie.id}
                  className={[
                    "top-list__element",
                    i === 0 ? "featured" : ""
                  ].join(" ")}
                  onClick={() => this.props.goToMovie(movie.id)}
                >
                  {movie.poster_path !== null &&
                    i === 0 && (
                      <MediaImage
                        mediaType="poster"
                        size={5} 
                        filePath={movie.poster_path} 
                        name={movie.original_title} 
                      />
                    )}
                  {movie.backdrop_path !== null &&
                    i !== 0 && (
                      <MediaImage
                        mediaType="poster"
                        size={5} 
                        filePath={movie.backdrop_path} 
                        name={movie.original_title} 
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
