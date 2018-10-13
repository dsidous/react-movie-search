import { all } from "redux-saga/effects";
import { getConfigWatcher, getGenresWatcher } from "./configs";
import { getMovieWatcher, getDiscoverMoviesWatcher } from "./movies";
import { getPersonWatcher, getTopPeopleWatcher } from "./persons";
import { getDiscoverMoviesWatcher } from "./tvs";
import { getHomelistsWatcher } from "./homelists";

export default function* rootSaga() {
  yield all([
    getConfigWatcher,
    getGenresWatcher,
    getMovieWatcher,
    getDiscoverMoviesWatcher,
    getPersonWatcher,
    getTopPeopleWatcher,
    getDiscoverMoviesWatcher,
    getHomelistsWatcher
  ]);
}
