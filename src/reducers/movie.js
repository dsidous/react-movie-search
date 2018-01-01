const initial_state = {
  movie:{},  
  isFetching: false
}

const movie = (
  state = initial_state, action) => {

  switch (action.type) {
    case 'GET_MOVIE_TMDB':
      return Object.assign({}, state, {
        isFetching: true
    })
    case 'GET_MOVIE_TMDB_FULFILLED':
      return Object.assign({}, state, {
        movie: action.movie
      })    
    case 'RESET_MOVIE_STATE':
      return initial_state
    default:
      return state;
  }
}

export default movie;
