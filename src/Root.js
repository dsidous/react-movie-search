import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MovieProfileContainer from "./pages/Movie";
import DiscoverContainer from "./containers/DiscoverContainer";
import PersonContainer from "./pages/Person";
import CastImagesContainer from "./pages/PersonImages";
import HomepageContainer from "./pages/Home";
import FullCastCrewContainer from "./pages/MovieCastCrew";
import TopPeopleContainer from "./pages/TopPeople";
import WatchListContainer from "./containers/WatchListContainer";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import withAuthentication from './components/auth/WithAuthentication';

const MatchWithMainLayout = ({ exact, path, component: Component }) => {
  return (
    <Route exact={exact} path={path} render={(props) => (
      <MainLayout><Component {...props} /></MainLayout>
    )} />
  );
};

const Root = () => (
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    <Switch>
      <Route exact={true} path="/movie/:movieId" component={MovieProfileContainer} />
      <Route exact={true} path="/person/:personId" component={PersonContainer} />
      <Route exact={true} path="/person/:personId/images" component={CastImagesContainer} />
      <Route exact={true} path="/movie/:movieId/crew" component={FullCastCrewContainer} />
      <Route exact={true} path="/person" component={TopPeopleContainer} />
      <Route path="/" component={HomepageContainer} />
      {/* 
      <MatchWithMainLayout path="/movies" component={DiscoverContainer} />
      <MatchWithMainLayout path="/tvs" component={DiscoverContainer} />
      <MatchWithMainLayout path="/signup" component={SignUp} />
      <MatchWithMainLayout path="/signin" component={SignIn} />
      <MatchWithMainLayout path="/watchlist" component={WatchListContainer} />
      */}
    </Switch>
  </Router>
);

export default Root;
