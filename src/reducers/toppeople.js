const initial_state = {
  toppeople: [],
  isFetching: false
};

const toppeople = (state = initial_state, action) => {
  switch (action.type) {
    case "GET_TOPPEOPLE_TMDB":
      return Object.assign({}, state, {
        isFetching: true
      });
    case "GET_TOPPEOPLE_TMDB_FULFILLED":
      return Object.assign({}, state, {
        toppeople: action.toppeople
      });
    case "RESET_TOPPEOPLE_STATE":
      return initial_state;
    default:
      return state;
  }
};

export default toppeople;
