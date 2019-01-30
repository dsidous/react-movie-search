const firebase = jest.mock('firebase/app', () => ({
  apps: [{}],
  auth: () => ({
    FacebookAuthProvider: () => { },
  }),
  database: jest.fn(),
}));

module.exports = firebase;
