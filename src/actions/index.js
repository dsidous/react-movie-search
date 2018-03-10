import axios from 'axios';

export const GET_CONFIG = 'GET_CONFIG';
export const GET_MOVIE_TMDB = 'GET_MOVIE_TMDB';
export const GET_MOVIES_TMDB = 'GET_MOVIES_TMDB';
export const GET_GENRES_TMDB = 'GET_GENRES_TMDB';

export const GET_PERSON_TMDB = 'GET_PERSON_TMDB';
export const GET_TOPMOVIES_TMDB = 'GET_TOPMOVIES_TMDB';
export const GET_NPMOVIES_TMDB = 'GET_NPMOVIES_TMDB';
export const GET_UCMOVIES_TMDB = 'GET_UCMOVIES_TMDB';
export const GET_TOPPEOPLE_TMDB = 'GET_TOPPEOPLE_TMDB';

export const ADD_WATCHLIST_MOVIE_TMDB = 'ADD_WATCHLIST_MOVIE_TMDB';

const APIKEY = 'cfe422613b250f702980a3bbf9e90716';

export function getConfig(){
  const url = `https://api.themoviedb.org/3/configuration?api_key=?&api_key=${APIKEY}`;

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
  const url = `https://api.themoviedb.org/3/genre/movie/list?&api_key=${APIKEY}`

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
  const url = `https://api.themoviedb.org/3/movie/${movieId}?&api_key=${APIKEY}&append_to_response=videos,images,similar,credits,reviews`

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


export function getDiscoverMovies(query){
  const url = `https://api.themoviedb.org/3/discover/movie?&api_key=${APIKEY}${query}`

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
    dispatch(getMovie(movieId))   
  }
}

export function getPerson(query){
  const url = `https://api.themoviedb.org/3/person/${query}?&api_key=${APIKEY}&append_to_response=movie_credits,images`

  return function(dispatch) {
    dispatch({type: GET_PERSON_TMDB});
    axios.get(url)
      .then((response) => {
        dispatch({type: GET_PERSON_TMDB + "_FULFILLED",person: response.data})
      })
      .catch((err) => {
        dispatch({type: GET_PERSON_TMDB + "_REJECTED",person: err})
      })
  }
}

export function updatePerson(personId){
  return function(dispatch) {
    dispatch(getPerson(personId));
  }
}

export function getTopPeople(query){
  const url = `https://api.themoviedb.org/3/person/popular?&api_key=${APIKEY}${query}`
  
  return function(dispatch) {
    dispatch({type: GET_TOPPEOPLE_TMDB});
    axios.get(url)
      .then((response) => {
        dispatch({type: GET_TOPPEOPLE_TMDB + "_FULFILLED",toppeople: response.data})
      })
      .catch((err) => {
        dispatch({type: GET_TOPPEOPLE_TMDB + "_REJECTED",toppeople: err})
      })
    }
  }
  
  export function getTopRatedMovies(query){
    const url = `https://api.themoviedb.org/3/movie/popular?&api_key=${APIKEY}`
    
    return function(dispatch) {
      dispatch({type: GET_TOPMOVIES_TMDB});
      axios.get(url)
      .then((response) => {
        dispatch({type: GET_TOPMOVIES_TMDB + "_FULFILLED",topmovies: response.data})
      })
      .catch((err) => {
        dispatch({type: GET_TOPMOVIES_TMDB + "_REJECTED",topmovies: err})
      })
    }
  }
  
  export function getNowPlayingMovies(query){
    const url = `https://api.themoviedb.org/3/movie/now_playing?&api_key=${APIKEY}`
    
    return function(dispatch) {
      dispatch({type: GET_NPMOVIES_TMDB});
      axios.get(url)
      .then((response) => {
        dispatch({type: GET_NPMOVIES_TMDB + "_FULFILLED",npmovies: response.data})
      })
      .catch((err) => {
        dispatch({type: GET_NPMOVIES_TMDB + "_REJECTED",npmovies: err})
      })
    }
  }
  
  export function getUpcomingMovies(query){
    const url = `https://api.themoviedb.org/3/movie/upcoming?&api_key=${APIKEY}`
    
    return function(dispatch) {
      dispatch({type: GET_UCMOVIES_TMDB});
      axios.get(url)
      .then((response) => {
        dispatch({type: GET_UCMOVIES_TMDB + "_FULFILLED",ucmovies: response.data})
      })
      .catch((err) => {
        dispatch({type: GET_UCMOVIES_TMDB + "_REJECTED",ucmovies: err})
      })
    }
  }

  export function getHomeLists(){
    return function(dispatch) {
      dispatch(getTopRatedMovies());
      dispatch(getNowPlayingMovies());
      dispatch(getUpcomingMovies());
    }
  }

  export function onSetAuthUser(authUser){
    return function(dispatch) {
      dispatch({ type: 'AUTH_USER_SET', authUser })
    }
  }

  export function onSetUser(user){
    return function(dispatch){
      dispatch({ type: 'USER_SET', user })
    }
  }

  export function removeUserMovie(movieId){
    return function(dispatch){
      dispatch({ type: 'REMOVE_USER_MOVIE', movieId })
    }
  }

  export function removeWatchlistMovie(movieId){
    return function(dispatch){
      dispatch({ type: 'REMOVE_WATCHLIST_MOVIE', movieId })
    }
  }

  export function getWatchListMovie(movieId){
    const url = `https://api.themoviedb.org/3/movie/${movieId}?&api_key=${APIKEY}`
    return function(dispatch) {
      dispatch({type: ADD_WATCHLIST_MOVIE_TMDB});
      axios.get(url)
        .then((response) => {
          dispatch({type:ADD_WATCHLIST_MOVIE_TMDB + "_FULFILLED",movie: response.data})
        })
        .catch((err) => {
          dispatch({type: ADD_WATCHLIST_MOVIE_TMDB + "_REJECTED", movie: err})
        })
    }
  }
  