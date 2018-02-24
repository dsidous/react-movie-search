import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MovieProfileContainer from "./containers/MovieProfileContainer";
import DiscoverContainer from "./containers/DiscoverContainer";
import PersonContainer from "./containers/PersonContainer";
import CastImagesContainer from "./containers/CastImagesContainer";
import HomepageContainer from "./containers/HomepageContainer";
import FullCastCrewContainer from "./containers/FullCastCrewContainer";
import TopPeopleContainer from "./containers/TopPeopleContainer";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import withAuthentication from './components/auth/WithAuthentication';

const MatchWithMainLayout = ({ exact, path, component: Component }: any) => {
  return (
    <Route exact={exact} path={path} render={(props: any) => (
      <MainLayout><Component {...props} /></MainLayout>
    )} />
  );
};

const Root = ({ store }) => (
    <Router onUpdate={() => window.scrollTo(0, 0)} basename="/movie-search">
      <Switch>
        <MatchWithMainLayout exact={true} path="/" component={HomepageContainer} />
        <MatchWithMainLayout exact={true} path="/movie/:movieId" component={MovieProfileContainer} />
        <MatchWithMainLayout
          exact={true}
          path="/movie/:movieId/crew"
          component={FullCastCrewContainer}
        />
        <MatchWithMainLayout exact={true} path="/person/:personId" component={PersonContainer} />
        <MatchWithMainLayout exact={true} path="/person/:personId/images" component={CastImagesContainer} />
        <MatchWithMainLayout exact={true} path="/person" component={TopPeopleContainer} />
        <MatchWithMainLayout path="/movies" component={DiscoverContainer} />
        <MatchWithMainLayout path="/signup" component={SignUp} />
        <MatchWithMainLayout path="/signin" component={SignIn} />
      </Switch>
    </Router>
);

export default withAuthentication(Root);
