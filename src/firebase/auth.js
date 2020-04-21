import { auth, facebookProvider } from './firebase';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign In With FB
export const doSignInWithFacebook = () =>
  auth.signInWithPopup(facebookProvider);

// Sign out
export const doSignOut = () => auth.signOut();
