import React from "react";
import ReactDOM from "react-dom";
import "font-awesome/css/font-awesome.min.css";
import { Provider } from "react-redux";

import Root from "./Root";
import "./css/main.css";
import configureStore from "./store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Root store={store} />
  </Provider>,
  document.getElementById("root")
);
