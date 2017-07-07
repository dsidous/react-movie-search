const repos = (state = {movie:{}}, action) => {

  switch (action.type) {
    case 'GET_MOVIE_TMDB_FULFILLED':
      return Object.assign({}, state, {
        movie: action.movie
      })
    default:
      return state;
  }
}

export default repos;
