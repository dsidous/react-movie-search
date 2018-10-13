import { AUTH_USER_SET, USER_SET } from "./types";
import { firebase, db as dba } from "../firebase";
import { db } from "../firebase/firebase";
import { call, put, takeLatest } from 'redux-saga/effects';

let User = db;

export function onSetAuthUser() {
  return function(dispatch) {
    firebase.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        User = db.ref(`users/${authUser.uid}`);
        User.once("value", snapshot => {
          if (snapshot.val() === null) {
            dba.doCreateUser(
              authUser.uid,
              authUser.displayName,
              authUser.email
            );
          }
        }).then(dispatch(onSetUser()));
        dispatch({ type: AUTH_USER_SET, authUser });
      } else {
        dispatch({ type: AUTH_USER_SET, authUser: null });
        dispatch({ type: USER_SET, user: null });
      }
    });
  };
}

export function onSetUser(id) {
  return function(dispatch) {
    User.on("value", snapshot => {
      dispatch({ type: USER_SET, user: snapshot.val() });
    });
  };
}

export const addMovieToWatchlist = movie => User.child(`watchlist/${movie.id}`).update(movie);

export const removeMovieFromWatchlist = movieId => User.child(`watchlist/${movieId}`).remove();
