const movies = (
  state = {
    movies:{}
  }, action) => {

  switch (action.type) {
    case 'GET_MOVIES_TMDB_FULFILLED':
      return Object.assign({}, state, {
        movies: action.movies
      })
    default:
      return state;
  }
}

export default movies;
