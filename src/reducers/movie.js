const movie = (
  state = {
    movie:{},
    crew:{},
    similar:{}
  }, action) => {

  switch (action.type) {
    case 'GET_MOVIE_TMDB_FULFILLED':
      return Object.assign({}, state, {
        movie: action.movie
      })
    case 'GET_MOVIE_CREW_FULFILLED':
      return Object.assign({}, state, {
        crew: action.crew
      })
    case 'GET_SIMILAR_MOVIE_TMDB_FULFILLED':
      return Object.assign({}, state, {
        similar: action.similar
      })
    default:
      return state;
  }
}

export default movie;
