import {combineReducers} from 'redux';
import movie from './movie';
import movies from './movies';
import config from './config';
import person from './person';
import homelists from './homelists';
import toppeople from './toppeople';

const reducers = combineReducers({
  config,
  movie,
  movies,
  person,
  homelists,
  toppeople
})

export default reducers;
