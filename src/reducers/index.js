import {combineReducers} from 'redux';
import movie from './movie';
import config from './config';

const reducers = combineReducers({
  config,
  movie
})

export default reducers;
