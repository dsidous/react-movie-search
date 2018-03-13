import axios from "axios";
import { APIKEY, GET_CONFIG, GET_GENRES_TMDB } from "./types";

export function getConfig() {
  const url = `https://api.themoviedb.org/3/configuration?api_key=?&api_key=${APIKEY}`;

  return function(dispatch) {
    dispatch({ type: GET_CONFIG });
    axios
      .get(url)
      .then(response => {
        dispatch({ type: GET_CONFIG + "_FULFILLED", config: response.data });
      })
      .catch(err => {
        dispatch({ type: GET_CONFIG + "_REJECTED", config: err });
      });
  };
}

export function getGenres() {
  const url = `https://api.themoviedb.org/3/genre/movie/list?&api_key=${APIKEY}`;

  return function(dispatch) {
    dispatch({ type: GET_GENRES_TMDB });
    axios
      .get(url)
      .then(response => {
        dispatch({
          type: GET_GENRES_TMDB + "_FULFILLED",
          genres: response.data.genres
        });
      })
      .catch(err => {
        dispatch({ type: GET_GENRES_TMDB + "_REJECTED", genres: err });
      });
  };
}
