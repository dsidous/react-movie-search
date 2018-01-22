import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import 'font-awesome/css/font-awesome.min.css';


import Root from './Root';
import './css/main.css';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
   <IntlProvider locale={navigator.language}>
     <Root store={store} />
   </IntlProvider>,
  document.getElementById('root')
);
