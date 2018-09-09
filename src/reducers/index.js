import {combineReducers} from 'redux';
import session from './session';
import user from './user';
import movie from './movie';
import movies from './movies';
import tvs from './tvs';
import config from './config';
import person from './person';
import homelists from './homelists';
import toppeople from './toppeople';

const reducers = combineReducers({
  config,
  movie,
  movies,
  tvs,
  person,
  homelists,
  toppeople,
  session,
  user
})

export default reducers;
