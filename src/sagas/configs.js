import axios from "axios";
import { call, put, takeLatest } from 'redux-saga/effects';

import { APIKEY, GET_CONFIG, GET_GENRES_TMDB } from "./types";

function* getConfig() {
  try {
    const url = `https://api.themoviedb.org/3/configuration?api_key=?&api_key=${APIKEY}`;
    const config = yield call([axios, axios.get], url);
    yield put({ type: GET_CONFIG + "_FULFILLED", config: config.data })
  
  } catch(err) {
    yield put({ type: GET_CONFIG + "_REJECTED", config: err })
  }
}

function* getGenres() {
  try {
    const url = `https://api.themoviedb.org/3/genre/movie/list?&api_key=${APIKEY}`;
    const genres = yield call([axios, axios.get], url);
    yield put({ type: GET_GENRES_TMDB + "_FULFILLED", genres: genres.data.genres });  

  } catch(err) {
    yield put({ type: GET_GENRES_TMDB + "_REJECTED", genres: genres.data.genres });  
  }
}

export function* getConfigWatcher() {
  yield takeLatest(GET_CONFIG, getConfig);
}

export function* getGenresWatcher() {
  yield takeLatest(GET_GENRES_TMDB, getGenres);
}
