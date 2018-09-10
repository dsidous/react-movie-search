import axios from "axios";
import { call, put, takeLatest } from 'react-saga/effects';

import {
  APIKEY,
  GET_PERSON_TMDB,
  GET_TOPPEOPLE_TMDB
} from "./types";

function getPerson(query, callback) {
  const url = `https://api.themoviedb.org/3/person/${query}?&api_key=${APIKEY}&append_to_response=movie_credits,images`

  return function (dispatch) {
    dispatch({ type: GET_PERSON_TMDB });
    axios.get(url)
      .then(({ data }) => {
        dispatch({ type: GET_PERSON_TMDB + "_FULFILLED", person: data })
      })
      .then(() => callback ? callback() : null)
      .catch((err) => {
        dispatch({ type: GET_PERSON_TMDB + "_REJECTED", person: err })
      })
  }
}

function* getTopPeople(query) {
  try {
    const url = `https://api.themoviedb.org/3/person/popular?&api_key=${APIKEY}${query}`
    const toppeople = yield call([axios, axios.get], url);

    yield put({ type: GET_TOPPEOPLE_TMDB + "_FULFILLED", toppeople: toppeople.data })
  }
  catch (err) {
    yield put({ type: GET_TOPPEOPLE_TMDB + "_REJECTED", toppeople: err })
  }
}

export function* getTopPeopleWatcher() {
  yield takeLatest(GET_TOPPEOPLE_TMDB, getTopPeople);
}
