import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Movie from "../components/pages/Movie";
import Movies from "../components/pages/Movies";
import Tvs from "../components/pages/Tvs";
import Person from "../components/pages/Person";
import PersonImages from "../components/pages/PersonImages";
import Home from "../components/pages/Home";
import MovieCastCrew from "../components/pages/MovieCastCrew";
import TopPeople from "../components/pages/TopPeople";
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
        <MatchWithMainLayout exact={true} path="/movie/:movieId" component={Movie} />
        <MatchWithMainLayout exact={true} path="/person/:personId" component={Person} />
        <MatchWithMainLayout exact={true} path="/person/:personId/images" component={PersonImages} />
        <MatchWithMainLayout exact={true} path="/movie/:movieId/crew" component={MovieCastCrew} />
        <MatchWithMainLayout exact={true} path="/person" component={TopPeople} />
        <MatchWithMainLayout exact={true} path="/" component={Home} />
        <MatchWithMainLayout path="/movies" component={Movies} />
        <MatchWithMainLayout path="/login" component={Login} />
        <MatchWithMainLayout path="/signup" component={SignUp} />
        <MatchWithMainLayout path="/watchlist" component={WatchList} />
        <MatchWithMainLayout path="/tvs" component={Tvs} />
      </Switch>
    </Router>
  </FirebaseAuthProvider>
);

export default Root;
