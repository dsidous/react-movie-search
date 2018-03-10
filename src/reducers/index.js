import {combineReducers} from 'redux';
import session from './session';
import user from './user';
import movie from './movie';
import movies from './movies';
import config from './config';
import person from './person';
import homelists from './homelists';
import toppeople from './toppeople';
import watchlist from './watchlist';

const reducers = combineReducers({
  config,
  movie,
  movies,
  person,
  homelists,
  toppeople,
  session,
  user,
  watchlist
})

export default reducers;
