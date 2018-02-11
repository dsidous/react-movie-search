import React from "react";
import { Provider } from "react-redux";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import DiscoverContainer from "./containers/DiscoverContainer";
import PersonContainer from "./containers/PersonContainer";
import CastImagesContainer from "./containers/CastImagesContainer";
import HomepageContainer from "./containers/HomepageContainer";
import FullCastCrewContainer from "./containers/FullCastCrewContainer";
import TopPeopleContainer from "./containers/TopPeopleContainer";

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
        <Route exact={true} path="/person/:personId" component={PersonContainer} />
        <Route exact={true} path="/person/:personId/images" component={CastImagesContainer} />
        <Route exact={true} path="/person" component={TopPeopleContainer} />
        <Route path="/movies" component={DiscoverContainer} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
