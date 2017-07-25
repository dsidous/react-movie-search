import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import './index.css';

import configureStore from './store';
const store = configureStore();

store.subscribe(() => {
  //console.log("Store changed", store.getState());
})

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
