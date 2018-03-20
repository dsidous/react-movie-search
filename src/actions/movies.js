import axios from "axios";
import {
  APIKEY,
  GET_MOVIE_TMDB,
  GET_MOVIES_TMDB
} from "./types";

export function getMovie(movieId,callback = null){
  const url = `https://api.themoviedb.org/3/movie/${movieId}?&api_key=${APIKEY}&append_to_response=videos,images,similar,credits,reviews`;

  return (dispatch) => {
    dispatch({type: GET_MOVIE_TMDB});
    axios.get(url)
      .then(({data}) => {
        dispatch({type:GET_MOVIE_TMDB + "_FULFILLED",movie: data})
      })
      .then(() => callback ? callback() : null)
      .catch((err) => {
        dispatch({type: GET_MOVIE_TMDB + "_REJECTED", movie: err})
      })
  }
}


export function getDiscoverMovies(query){
  const url = `https://api.themoviedb.org/3/discover/movie?&api_key=${APIKEY}${query}`;

  return (dispatch) => {
    dispatch({type: GET_MOVIES_TMDB});
    axios.get(url)
      .then(({data}) => {
        dispatch({type: GET_MOVIES_TMDB + "_FULFILLED",movies: data})
      })
      .catch((err) => {
        dispatch({type: GET_MOVIES_TMDB + "_REJECTED",movies: err})
      })
  }
}