import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAwjfdzWFoOsHHX2VWKWBQmszurb7NifIk",
  authDomain: "movie-search-4e239.firebaseapp.com",
  databaseURL: "https://movie-search-4e239.firebaseio.com",
  projectId: "movie-search-4e239",
  storageBucket: "movie-search-4e239.appspot.com",
  messagingSenderId: "679577561174"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();

export { auth, db };
