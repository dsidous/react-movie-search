const initial_state = []

const watchlist = (
  state = initial_state, action) => {

  switch (action.type) {
    case 'ADD_WATCHLIST_MOVIE_TMDB_FULFILLED':
      return [...state, action.movie]   
    case 'REMOVE_WATCHLIST_MOVIE':
      return state.filter(movie => movie.id !== action.movieId);
    case 'RESET_WATCHLIST_STATE':
      return initial_state
    default:
      return state;
  }
}

export default watchlist;
