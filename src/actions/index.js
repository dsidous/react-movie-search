import axios from 'axios';

export const GET_CONFIG = 'GET_CONFIG';
export const GET_MOVIE_TMDB = 'GET_MOVIE_TMDB';
export const GET_MOVIES_TMDB = 'GET_MOVIES_TMDB';
export const GET_VIDEOS_TMDB = 'GET_VIDEOS_TMDB';
export const GET_SIMILAR_MOVIE_TMDB = 'GET_SIMILAR_MOVIE_TMDB';
export const GET_MOVIE_CREW = 'GET_MOVIE_CREW';
export const GET_MOVIE_IMAGES = 'GET_MOVIE_IMAGES';
export const GET_GENRES_TMDB = 'GET_GENRES_TMDB';

export function getConfig(){
  const url = `https://api.themoviedb.org/3/configuration?api_key=?&api_key=cfe422613b250f702980a3bbf9e90716`

  return function(dispatch) {
    dispatch({type: GET_CONFIG});
    axios.get(url)
      .then((response) => {
        dispatch({type: GET_CONFIG + "_FULFILLED",config: response.data})
      })
      .catch((err) => {
        dispatch({type: GET_CONFIG + "_REJECTED", config: err})
      })
  }
}

export function getGenres(){
  const url = `https://api.themoviedb.org/3/genre/movie/list?&api_key=cfe422613b250f702980a3bbf9e90716`

  return function(dispatch) {
    dispatch({type: GET_GENRES_TMDB});
    axios.get(url)
      .then((response) => {
        dispatch({type: GET_GENRES_TMDB + "_FULFILLED", genres: response.data.genres})
      })
      .catch((err) => {
        dispatch({type: GET_GENRES_TMDB + "_REJECTED", genres: err})
      })
  }
}

export function getMovie(movieId){
  const url = `https://api.themoviedb.org/3/movie/${movieId}?&api_key=cfe422613b250f702980a3bbf9e90716`

  return function(dispatch) {
    dispatch({type: GET_MOVIE_TMDB});
    axios.get(url)
      .then((response) => {
        dispatch({type:GET_MOVIE_TMDB + "_FULFILLED",movie: response.data})
      })
      .catch((err) => {
        dispatch({type: GET_MOVIE_TMDB + "_REJECTED", movie: err})
      })
  }
}

export function getCrew(movieId){
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?&api_key=cfe422613b250f702980a3bbf9e90716`

  return function(dispatch) {
    dispatch({type: GET_MOVIE_CREW});
    axios.get(url)
      .then((response) => {
        dispatch({type:GET_MOVIE_CREW + "_FULFILLED",crew: response.data.cast})
      })
      .catch((err) => {
        dispatch({type: GET_MOVIE_CREW + "_REJECTED",crew: err})
      })
  }
}

export function getMovieImages(movieId){
  const url = `https://api.themoviedb.org/3/movie/${movieId}/images?&api_key=cfe422613b250f702980a3bbf9e90716`

  return function(dispatch) {
    dispatch({type: GET_MOVIE_IMAGES});
    axios.get(url)
      .then((response) => {
        dispatch({type:GET_MOVIE_IMAGES + "_FULFILLED",images: response.data})
      })
      .catch((err) => {
        dispatch({type: GET_MOVIE_IMAGES + "_REJECTED",images: err})
      })
  }
}

export function getSimilarMovie(movieId){
  const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?&api_key=cfe422613b250f702980a3bbf9e90716`

  return function(dispatch) {
    dispatch({type: GET_SIMILAR_MOVIE_TMDB});
    axios.get(url)
      .then((response) => {
        dispatch({type: GET_SIMILAR_MOVIE_TMDB + "_FULFILLED",similar: response.data.results})
      })
      .catch((err) => {
        dispatch({type: GET_SIMILAR_MOVIE_TMDB + "_REJECTED",similar: err})
      })
  }
}

export function getVideos(movieId){
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?&api_key=cfe422613b250f702980a3bbf9e90716`

  return function(dispatch) {
    dispatch({type: GET_VIDEOS_TMDB});
    axios.get(url)
      .then((response) => {
        dispatch({type: GET_VIDEOS_TMDB + "_FULFILLED",videos: response.data.results})
      })
      .catch((err) => {
        dispatch({type: GET_VIDEOS_TMDB + "_REJECTED",videos: err})
      })
  }
}

export function getDiscoverMovies(query){
  const url = `https://api.themoviedb.org/3/discover/movie?&api_key=cfe422613b250f702980a3bbf9e90716${query}`

  return function(dispatch) {
    dispatch({type: GET_MOVIES_TMDB});
    axios.get(url)
      .then((response) => {
        dispatch({type: GET_MOVIES_TMDB + "_FULFILLED",movies: response.data})
      })
      .catch((err) => {
        dispatch({type: GET_MOVIES_TMDB + "_REJECTED",movies: err})
      })
  }
}

export function updateMovie(movieId){
  return function(dispatch) {
    dispatch(getMovie(movieId));
    dispatch(getCrew(movieId));
    dispatch(getMovieImages(movieId));
    dispatch(getSimilarMovie(movieId));
    dispatch(getVideos(movieId));
  }
}
