import { applyMiddleware,createStore } from 'redux';
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import reducers from "../reducers";

const middleware = applyMiddleware( thunk, createLogger());

const configureStore = () => {
  return createStore(reducers, middleware)
};

export default configureStore;
