import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import MainLayout from '../components/layouts/MainLayout';
import Movie from '../components/pages/Movie';
import Movies from '../components/pages/Movies';
import Tvs from '../components/pages/Tvs';
import Tv from '../components/pages/Tv';
import Seasons from '../components/pages/Seasons';
import Season from '../components/pages/Season';
import Person from '../components/pages/Person';
import PersonImages from '../components/pages/PersonImages';
import Home from '../components/pages/Home';
import MovieCastCrew from '../components/pages/MovieCastCrew';
import TvCastCrew from '../components/pages/TvCastCrew';
import TopPeople from '../components/pages/TopPeople';
import WatchList from '../components/pages/WatchList';
import SignUp from '../components/pages/SignUp';
import Login from '../components/pages/Login';
import FirebaseAuthProvider from '../firebase/FirebaseAuthProvider';

const routes = [
  { path: '/movie/:movieId', component: Movie },
  { path: '/person/:personId', component: Person },
  { path: '/person/:personId/images', component: PersonImages },
  { path: '/movie/:movieId/crew', component: MovieCastCrew },
  { path: '/person', component: TopPeople },
  { path: '/', component: Home },
  { path: '/movies', component: Movies },
  { path: '/login', component: Login },
  { path: '/signup', component: SignUp },
  { path: '/watchlist', component: WatchList },
  { path: '/tvs', component: Tvs },
  { path: '/tv/:tvId', component: Tv },
  { path: '/tv/:tvId/crew', component: TvCastCrew },
  { path: '/tv/:tvId/seasons', component: Seasons },
  { path: '/tv/:tvId/season/:season', component: Season },
];

const MatchWithMainLayout = ({ path, component: Component }) => (
  <Route
    exact
    path={path}
    render={props => (
      <MainLayout>
        <Component {...props} />
      </MainLayout>
    )}
  />
);

const Root = () => (
  <FirebaseAuthProvider>
    <Router>
      <ScrollToTop>
        {routes.map(({ path, component }) => (
          <MatchWithMainLayout
            key={path}
            path={path}
            component={component}
          />
        ))}
      </ScrollToTop>
    </Router>
  </FirebaseAuthProvider>
);

export default Root;
