const INITIAL_STATE = {
  user: {},
};

const applySetUser = (state, action) => ({
  ...state,
  user: action.user
});

const removeMovie = (state, action) => {
  let watchlist = state.user.watchlist.filter( movieId => movieId !== action.movieId);
  let user = {...state.user, watchlist};
  
  return Object.assign({},state,user);    
}

const addMovie = (state, action) => {
  let watchlist = state.user.watchlist;
  watchlist.push(action.movieId);
  
  let user = {...state.user, watchlist};
  
  return Object.assign({},state,user)
}

function user(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'USER_SET' : {
      return applySetUser(state, action);
    }
    case 'REMOVE_USER_MOVIE':
      return removeMovie(state, action);
    case 'ADD_USER_MOVIE':
      return addMovie(state, action);
    default : return state;
  }
}

export default user;