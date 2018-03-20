import { applyMiddleware, createStore, compose } from 'redux';
import thunk from "redux-thunk";

import reducers from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware( thunk );

const configureStore = () => {
  return createStore(
    reducers,
    composeEnhancers(middleware)         
  )
};

export default configureStore;