import {combineReducers} from 'redux';
import movie from './movie';
import movies from './movies';
import config from './config';
import person from './person';
import homelists from './homelists';

const reducers = combineReducers({
  config,
  movie,
  movies,
  person,
  homelists
})

export default reducers;
