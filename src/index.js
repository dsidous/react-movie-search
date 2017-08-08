import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import Root from './Root';
import './styles/index.css';

import configureStore from './store';
const store = configureStore();
console.log(navigator.language);
ReactDOM.render(
   <IntlProvider locale={navigator.language}>
     <Root store={store} />
   </IntlProvider>,
  document.getElementById('root')
);
