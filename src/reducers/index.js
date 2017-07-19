import {combineReducers} from 'redux';
import movie from './movie';
import movies from './movies';
import config from './config';

const reducers = combineReducers({
  config,
  movie,
  movies
})

export default reducers;
