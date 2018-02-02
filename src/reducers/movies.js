const initial_state = {
  movies: [],
  isFetching: false
};

const movies = (state = initial_state, action) => {
  switch (action.type) {
    case "GET_MOVIES_TMDB":
      return Object.assign({}, state, {
        isFetching: true
      });
    case "GET_MOVIES_TMDB_FULFILLED":
      return Object.assign({}, state, {
        movies: action.movies
      });
    case "RESET_MOVIES_STATE":
      return initial_state;
    default:
      return state;
  }
};

export default movies;
