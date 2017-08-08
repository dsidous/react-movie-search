import {combineReducers} from 'redux';
import movie from './movie';
import movies from './movies';
import config from './config';
import person from './person';

const reducers = combineReducers({
  config,
  movie,
  movies,
  person
})

export default reducers;
