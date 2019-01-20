import * as React from 'react';
import PropTypes from 'prop-types';

import { firebase, db as dba } from './index';
import { db } from './firebase';

const defaultFirebaseContext = {
  authUser: false,
  user: {},
};

let User = db;

export const FirebaseAuthContext = React.createContext(defaultFirebaseContext);

export default class FirebaseAuthProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = defaultFirebaseContext;

  componentDidMount() {
    firebase.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        this.setState({ authUser: true });
        User = db.ref(`users/${authUser.uid}`);
        User.once('value', (snapshot) => {
          if (snapshot.val() === null) {
            dba.doCreateUser(
              authUser.uid,
              authUser.displayName,
              authUser.email,
            );
          }
        }).then(
          User.on('value', snapshot => this.setState({ user: snapshot.val() })),
        );
      } else {
        this.setState(defaultFirebaseContext);
      }
    });
  }

  render() {
    const { children } = this.props;
    const { authUser, user } = this.state;
    return (
      <FirebaseAuthContext.Provider value={{ user, authUser }}>
        {children}
      </FirebaseAuthContext.Provider>
    );
  }
}

export const addMovieToWatchlist = movie => User.child(`watchlist/${movie.id}`).update(movie);

export const removeMovieFromWatchlist = movieId => User.child(`watchlist/${movieId}`).remove();
