import axios from "axios";
import {
  APIKEY,
  GET_TOPMOVIES_TMDB,
  GET_NPMOVIES_TMDB,
  GET_UCMOVIES_TMDB
} from "./types";

export function getTopRatedMovies(query) {
  const url = `https://api.themoviedb.org/3/movie/popular?&api_key=${APIKEY}`;

  return function(dispatch) {
    dispatch({ type: GET_TOPMOVIES_TMDB });
    axios
      .get(url)
      .then(response => {
        dispatch({
          type: GET_TOPMOVIES_TMDB + "_FULFILLED",
          topmovies: response.data
        });
      })
      .catch(err => {
        dispatch({ type: GET_TOPMOVIES_TMDB + "_REJECTED", topmovies: err });
      });
  };
}

export function getNowPlayingMovies(query) {
  const url = `https://api.themoviedb.org/3/movie/now_playing?&api_key=${APIKEY}`;

  return function(dispatch) {
    dispatch({ type: GET_NPMOVIES_TMDB });
    axios
      .get(url)
      .then(response => {
        dispatch({
          type: GET_NPMOVIES_TMDB + "_FULFILLED",
          npmovies: response.data
        });
      })
      .catch(err => {
        dispatch({ type: GET_NPMOVIES_TMDB + "_REJECTED", npmovies: err });
      });
  };
}

export function getUpcomingMovies(query) {
  const url = `https://api.themoviedb.org/3/movie/upcoming?&api_key=${APIKEY}`;

  return function(dispatch) {
    dispatch({ type: GET_UCMOVIES_TMDB });
    axios
      .get(url)
      .then(response => {
        dispatch({
          type: GET_UCMOVIES_TMDB + "_FULFILLED",
          ucmovies: response.data
        });
      })
      .catch(err => {
        dispatch({ type: GET_UCMOVIES_TMDB + "_REJECTED", ucmovies: err });
      });
  };
}

export function getHomeLists() {
  return function(dispatch) {
    dispatch(getTopRatedMovies());
    dispatch(getNowPlayingMovies());
    dispatch(getUpcomingMovies());
  };
}
