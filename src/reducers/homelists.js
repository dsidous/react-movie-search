const homelists = (
  state = {
    topmovies: [],
    npmovies: [],
    ucmovies: []
  },
  action
) => {
  switch (action.type) {
    case "GET_TOPMOVIES_TMDB_FULFILLED":
      return Object.assign({}, state, {
        topmovies: action.topmovies
      });
    case "GET_NPMOVIES_TMDB_FULFILLED":
      return Object.assign({}, state, {
        npmovies: action.npmovies
      });
    case "GET_UCMOVIES_TMDB_FULFILLED":
      return Object.assign({}, state, {
        ucmovies: action.ucmovies
      });
    default:
      return state;
  }
};

export default homelists;
