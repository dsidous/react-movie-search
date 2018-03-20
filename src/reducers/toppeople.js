const initial_state = {
  toppeople: [],
  isFetching: false
};

const toppeople = (state = initial_state, action) => {
  switch (action.type) {
    case "GET_TOPPEOPLE_TMDB":
      return Object.assign({}, initial_state, {
        isFetching: true
      });
    case "GET_TOPPEOPLE_TMDB_FULFILLED":
      return Object.assign({}, state, {
        toppeople: action.toppeople
      });
    default:
      return state;
  }
};

export default toppeople;
