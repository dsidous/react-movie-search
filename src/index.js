import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import { ApolloProvider } from 'react-apollo';

import Root from './app/Root';
import { client } from './app/apollo';
import './css/main.css';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById('root'),
);
