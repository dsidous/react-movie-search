import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
    watchlist: {},
  });

export const onceGetUser = id => db.ref(`users/${id}`).once('value');
