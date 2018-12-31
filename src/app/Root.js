import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import MovieProfileContainer from "../components/pages/Movie";
import DiscoverContainer from "../components/pages/Movies";
import PersonContainer from "../components/pages/Person";
import CastImagesContainer from "../components/pages/PersonImages";
import HomepageContainer from "../components/pages/Home";
import FullCastCrewContainer from "../components/pages/MovieCastCrew";
import TopPeopleContainer from "../components/pages/TopPeople";
import WatchList from "../components/pages/WatchList";
import SignUp from "../components/pages/SignUp";
import Login from "../components/pages/Login";
import FirebaseAuthProvider from '../firebase/FirebaseAuthProvider';

const MatchWithMainLayout = ({ exact, path, component: Component }) => {
  return (
    <Route exact={exact} path={path} render={(props) => (
      <MainLayout><Component {...props} /></MainLayout>
    )} />
  );
};

const Root = () => (
  <FirebaseAuthProvider>
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <Switch>
        <MatchWithMainLayout exact={true} path="/movie/:movieId" component={MovieProfileContainer} />
        <MatchWithMainLayout exact={true} path="/person/:personId" component={PersonContainer} />
        <MatchWithMainLayout exact={true} path="/person/:personId/images" component={CastImagesContainer} />
        <MatchWithMainLayout exact={true} path="/movie/:movieId/crew" component={FullCastCrewContainer} />
        <MatchWithMainLayout exact={true} path="/person" component={TopPeopleContainer} />
        <MatchWithMainLayout exact={true} path="/" component={HomepageContainer} />
        <MatchWithMainLayout path="/movies" component={DiscoverContainer} />
        <MatchWithMainLayout path="/login" component={Login} />
        <MatchWithMainLayout path="/signup" component={SignUp} />
        <MatchWithMainLayout path="/watchlist" component={WatchList} />
        {/* 
      <MatchWithMainLayout path="/tvs" component={DiscoverContainer} />
      */}
      </Switch>
    </Router>
  </FirebaseAuthProvider>
);

export default Root;
