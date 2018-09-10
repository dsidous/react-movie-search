import { all } from "redux-saga/effects";
import { getConfigWatcher, getGenresWatcher } from "./configs";
import { getDiscoverMoviesWatcher } from "./movies";
import { getTopPeopleWatcher } from "./persons";
import { getDiscoverMoviesWatcher } from "./tvs";

export default function* rootSaga() {
  yield all([
    getConfigWatcher,
    getGenresWatcher,
    getDiscoverMoviesWatcher,
    getTopPeopleWatcher,
    getDiscoverMoviesWatcher
  ]);
}
