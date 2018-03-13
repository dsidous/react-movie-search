import axios from "axios";
import {
  APIKEY,
  ADD_WATCHLIST_MOVIE_TMDB,
  ADD_USER_MOVIE,
  REMOVE_USER_MOVIE,
  REMOVE_WATCHLIST_MOVIE
} from "./types";

export function getWatchListMovie(movieId){
  const url = `https://api.themoviedb.org/3/movie/${movieId}?&api_key=${APIKEY}`
  return function(dispatch) {
    dispatch({type: ADD_WATCHLIST_MOVIE_TMDB});
    axios.get(url)
    .then((response) => {
        dispatch({type: ADD_WATCHLIST_MOVIE_TMDB + "_FULFILLED",movie: response.data})
      })
      .catch((err) => {
        dispatch({type: ADD_WATCHLIST_MOVIE_TMDB + "_REJECTED", movie: err})
      })
  }
}

export function addMovieToWatchlist(movie){
  return function(dispatch) {
    dispatch({type: ADD_WATCHLIST_MOVIE_TMDB + "_FULFILLED", movie});
    dispatch({type: ADD_USER_MOVIE, movieId: movie.id});
  }
}

export function removeMovieFromWatchlist(movieId){
  return function(dispatch){
    dispatch({ type: REMOVE_USER_MOVIE, movieId });
    dispatch({ type: REMOVE_WATCHLIST_MOVIE, movieId });
  }
}