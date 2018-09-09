import { all } from "redux-saga/effects";
import { getConfigWatcher, getGenresWatcher } from "./configs";
import { getDiscoverMoviesWatcher } from "./movies";

export default function* rootSaga() {
  yield all([getConfigWatcher, getGenresWatcher, getDiscoverMoviesWatcher]);
}
