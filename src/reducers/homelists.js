const homelists = (
    state = {
      topmovies:[]
    }, action) => {
  
    switch (action.type) {
      case 'GET_TOPMOVIES_TMDB_FULFILLED':
        return Object.assign({}, state, {
          topmovies: action.topmovies
        })
      default:
        return state;
    }
  }
  
  export default homelists;
  