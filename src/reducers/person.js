const initial_state = {
  person: {},
  isFetching: false
};

const person = (state = initial_state, action) => {
  switch (action.type) {
    case "GET_PERSON_TMDB":
      return Object.assign({}, initial_state, {
        isFetching: true
      });
    case "GET_PERSON_TMDB_FULFILLED":
      return Object.assign({}, state, {
        person: action.person
      });
    default:
      return state;
  }
};

export default person;
