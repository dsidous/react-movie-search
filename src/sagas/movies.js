import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import { APIKEY, GET_MOVIE_TMDB, GET_MOVIES_TMDB } from "./types";

function* getMovie(movieId) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?&api_key=${APIKEY}&append_to_response=videos,images,similar,credits,reviews`;
    const movie = yield call([axios, axios.get], url);

    yield put({ type: GET_MOVIE_TMDB + "_FULFILLED", movie });
  } catch (err) {
    dispatch({ type: GET_MOVIE_TMDB + "_REJECTED", movie: err });
  }
}

function* getDiscoverMovies(query) {
  try {
    const url = `https://api.themoviedb.org/3/discover/movie?&api_key=${APIKEY}${query}`;
    const data = yield call([axios, axios.get], url);

    yield put({ type: GET_MOVIES_TMDB + "_FULFILLED", movies: data });
  } catch (err) {
    yield put({ type: GET_MOVIES_TMDB + "_REJECTED", movies: err });
  }
}

export function* getDiscoverMoviesWatcher() {
  yield takeLatest(GET_MOVIES_TMDB, getDiscoverMovies);
}

export function* getMovieWatcher() {
  yield takeLatest(GET_MOVIE_TMDB, getMovie);
}
