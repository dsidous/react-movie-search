const INITIAL_STATE = {
  user: {},
};

const applySetUser = (state, action) => ({
  ...state,
  user: action.user
});

const removeMovie = (state, action) => {
  let watchlist = state.user.watchlist.filter( movieId => movieId !== String(action.movieId));
  let user = {...state.user, watchlist};
  return {
    ...state,
    user
  }
}

function user(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'USER_SET' : {
      return applySetUser(state, action);
    }
    case 'REMOVE_USER_MOVIE':
      return removeMovie(state, action);
    default : return state;
  }
}

export default user;