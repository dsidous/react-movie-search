import axios from "axios";
import {
  APIKEY,
  GET_TV_TMDB,
  GET_TVS_TMDB
} from "./types";

/*export function getMovie(movieId,callback = null){
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
}*/


export function getDiscoverTvs(query){
  const url = `https://api.themoviedb.org/3/discover/tv?&api_key=${APIKEY}${query}`;

  return (dispatch) => {
    dispatch({type: GET_TVS_TMDB});
    axios.get(url)
      .then(({data}) => {
        dispatch({type: GET_TVS_TMDB + "_FULFILLED",tvs: data})
      })
      .catch((err) => {
        dispatch({type: GET_TVS_TMDB + "_REJECTED",tvs: err})
      })
  }
}