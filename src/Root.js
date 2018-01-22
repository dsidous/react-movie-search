import React from "react";
import { Provider } from "react-redux";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import DiscoverContainer from "./containers/DiscoverContainer";
import PersonContainer from "./containers/PersonContainer";
import HomepageContainer from "./containers/HomepageContainer";
import FullCastCrewContainer from "./containers/FullCastCrewContainer";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} basename="/movie-search">
      <Switch>
        <Route exact={true} path="/" component={HomepageContainer} />
        <Route exact={true} path="/movie/:movieId" component={App} />
        <Route
          exact={true}
          path="/movie/:movieId/crew"
          component={FullCastCrewContainer}
        />
        <Route path="/person/:personId" component={PersonContainer} />
        <Route path="/discover" component={DiscoverContainer} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
