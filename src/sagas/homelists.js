import axios from "axios";
import {
  APIKEY,
  GET_TOPMOVIES_TMDB,
  GET_NPMOVIES_TMDB,
  GET_UCMOVIES_TMDB,
  GET_HOMELISTS
} from "./types";
import { call, put, takeLatest,all } from "redux-saga/effects";

function* getHomeLists() {
  try {
    const url1 = `https://api.themoviedb.org/3/movie/popular?&api_key=${APIKEY}`;
    const url2 = `https://api.themoviedb.org/3/movie/now_playing?&api_key=${APIKEY}`;
    const url3 = `https://api.themoviedb.org/3/movie/upcoming?&api_key=${APIKEY}`;

    const [topmovies, npmovies, ucmovies] = yield all([
      call([axios, axios.get], url1),
      call([axios, axios.get], url2),
      call([axios, axios.get], url3),
    ])
    yield all([
      put({
        type: GET_TOPMOVIES_TMDB + "_FULFILLED",
        topmovies: topmovies.data
      }),
      put({
        type: GET_NPMOVIES_TMDB + "_FULFILLED",
        npmovies: npmovies.data
      }),
      put({
        type: GET_UCMOVIES_TMDB + "_FULFILLED",
        ucmovies: ucmovies.data
      })
    ])
  } catch (err) {
    yield put({ type: GET_UCMOVIES_TMDB + "_REJECTED", ucmovies: err });
  }
}

export function* getHomeListsWatcher() {
  yield takeLatest(GET_HOMELISTS, getHomeLists);
}
