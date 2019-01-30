const firebase = {
  apps: [{}],
  auth: () => { },
  database: () => { },
};

firebase.auth.FacebookAuthProvider = class {
  constructor() {
    this.s = () => console.log('s');
  }
};

export default firebase;
