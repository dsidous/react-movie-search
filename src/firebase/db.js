import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
    watchlist: []
  });

export const onceGetUser = (id) =>
  db.ref(`users/${id}`).once('value');

export const delUserWatchlist = (id, watchlist) => {
  const wref = db.ref(`users/${id}/watchlist`);
  wref.set(watchlist);
  //["284054","337167","401981","299536"]
}