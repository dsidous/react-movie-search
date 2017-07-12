import axios from 'axios';

export const GET_CONFIG = 'GET_CONFIG';
export const GET_MOVIE_TMDB = 'GET_MOVIE_TMDB';
export const GET_MOVIE_CREW = 'GET_MOVIE_CREW';

export function getConfig(){
  const url = `https://api.themoviedb.org/3/configuration?api_key=?&api_key=cfe422613b250f702980a3bbf9e90716`

  return function(dispatch) {
    dispatch({type: "GET_CONFIG"});
    axios.get(url)
      .then((response) => {
        dispatch({type:"GET_CONFIG_FULFILLED",config: response.data})
      })
      .catch((err) => {
        dispatch({type:"GET_CONFIG_REJECTED", config: err})
      })
  }
}

export function getMovie(movieId){
  const url = `https://api.themoviedb.org/3/movie/${movieId}?&api_key=cfe422613b250f702980a3bbf9e90716`

  return function(dispatch) {
    dispatch({type: "GET_MOVIE_TMDB"});
    axios.get(url)
      .then((response) => {
        dispatch({type:"GET_MOVIE_TMDB_FULFILLED",movie: response.data})
      })
      .catch((err) => {
        dispatch({type:"GET_MOVIE_TMDB_REJECTED", movie: err})
      })
  }
}

export function getCrew(movieId){
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?&api_key=cfe422613b250f702980a3bbf9e90716`

  return function(dispatch) {
    dispatch({type: "GET_MOVIE_CREW"});
    axios.get(url)
      .then((response) => {
        dispatch({type:"GET_MOVIE_CREW_FULFILLED",crew: response.data.cast})
      })
      .catch((err) => {
        dispatch({type:"GET_MOVIE_CREW_REJECTED",crew: err})
      })
  }
}
