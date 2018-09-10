import axios from "axios";
import { call, put, takeLatest } from 'react-saga/effects';

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


function* getDiscoverTvs(query) {
  try {
    const url = `https://api.themoviedb.org/3/discover/tv?&api_key=${APIKEY}${query}`;
    const tvs = yield call([axios, axios.get], url);

    yield put({ type: GET_TVS_TMDB + "_FULFILLED", tvs: tvs.data });
  }
  catch (err) {
    yield put({ type: GET_TVS_TMDB + "_REJECTED", tvs: err })
  }
}

export function* getDiscoverTvsWatcher() {
  yield takeLatest(GET_TVS_TMDB, getDiscoverTvs);
}

