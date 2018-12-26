import React from "react";
import ReactDOM from "react-dom";
import "font-awesome/css/font-awesome.min.css";
import { ApolloProvider } from "react-apollo";

import Root from "./Root";
import { client } from './apollo';
import "./css/main.css";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById("root")
);
