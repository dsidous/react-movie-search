const firebase = {
  apps: [{}],
  auth: () => { },
  database: () => { },
};

firebase.auth.FacebookAuthProvider = jest.fn(() => { });
firebase.auth.signInWithEmailAndPassword = jest.fn(() => {
  return Promise.resolve('result of signInWithEmailAndPassword')
});
export default firebase;
