import * as firebase from "firebase";
import config from './config';
 
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();
const facebookProvider = new firebase.auth.FacebookAuthProvider()

export { auth, db, facebookProvider };
