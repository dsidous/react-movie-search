import React from 'react';
import { compose, withProps } from 'recompose';

import { firebase, db as dba } from ".";
import { db } from "./firebase";

let User = db;

// const onSetAuthUser = () => {
//   firebase.auth.onAuthStateChanged(authUser => {
//     if (authUser) {
//       User = db.ref(`users/${authUser.uid}`);
//       User.once("value", snapshot => {
//         if (snapshot.val() === null) {
//           dba.doCreateUser(
//             authUser.uid,
//             authUser.displayName,
//             authUser.email
//           );
//         }
//       });
//       //.then(dispatch(onSetUser()));
//       //dispatch({ type: AUTH_USER_SET, authUser });
//     } else {
//       //REMOVE USER
//     }
//   });
// }

// const addMovieToWatchlist = movie => User.child(`watchlist/${movie.id}`).update(movie);

// const removeMovieFromWatchlist = movieId => User.child(`watchlist/${movieId}`).remove();

const enhance = withProps(props => {
  let UserWithDb = '';
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
        console.log("snapshot: ", snapshot.val());
      }).then((sh) => UserWithDb = sh);
    }
  });
  console.log("Here: ", UserWithDb);
  return { 'user': UserWithDb }
}
  // addMovieToWatchlist(),
  // removeMovieFromWatchlist(),
);

export default enhance;

// export function onSetUser(id) {
//   return function(dispatch) {
//     User.on("value", snapshot => {
//       dispatch({ type: USER_SET, user: snapshot.val() });
//     });
//   };
// }

