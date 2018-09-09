const initial_state = {
  tvs: [],
  isFetching: false
};

const tvs = (state = initial_state, action) => {
  switch (action.type) {
    case "GET_TVS_TMDB":
      return Object.assign({}, initial_state, {
        isFetching: true
      });
    case "GET_TVS_TMDB_FULFILLED":
      return Object.assign({}, state, {
        tvs: action.tvs
      });    
    default:
      return state;
  }
};

export default tvs;
