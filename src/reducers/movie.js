const initial_state = {
  movie:{},  
  isFetching: false
}

const movie = (
  state = initial_state, action) => {

  switch (action.type) {
    case 'GET_MOVIE_TMDB':
      return Object.assign({}, initial_state, {
        isFetching: true
    })
    case 'GET_MOVIE_TMDB_FULFILLED':
      return Object.assign({}, state, {
        movie: action.movie
      })       
    default:
      return state;
  }
}

export default movie;
