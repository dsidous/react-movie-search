import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { firebase, db as dba } from './index';
import { db } from './firebase';

const defaultFirebaseContext = {
  authUser: false,
  user: {},
};

let User = db;

export const FirebaseAuthContext = React.createContext(defaultFirebaseContext);

const FirebaseAuthProvider = ({ children }) => {
  const [state, setState] = useState(defaultFirebaseContext);

  useEffect(() => {
    firebase.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        setState(s => ({ ...s, authUser: true }));
        User = db.ref(`users/${authUser.uid}`);
        User.once('value', snapshot => {
          if (snapshot.val() === null) {
            dba.doCreateUser(
              authUser.uid,
              authUser.displayName,
              authUser.email,
            );
          }
        }).then(
          User.on('value', snapshot => setState(s => ({ ...s, user: snapshot.val() }))),
        );
      } else {
        setState(defaultFirebaseContext);
      }
    });
  }, []);

  const { authUser, user } = state;
  return (
    <FirebaseAuthContext.Provider value={{ user, authUser }}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};

FirebaseAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FirebaseAuthProvider;

export const addMovieToWatchlist = movie => User.child(`watchlist/${movie.id}`).update(movie);

export const removeMovieFromWatchlist = movieId => User.child(`watchlist/${movieId}`).remove();
