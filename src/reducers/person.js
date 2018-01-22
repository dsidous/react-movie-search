const initial_state = {
  person: {},
  isFetching: false
};

const person = (state = initial_state, action) => {
  switch (action.type) {
    case "GET_PERSON_TMDB":
      return Object.assign({}, state, {
        isFetching: true
      });
    case "GET_PERSON_TMDB_FULFILLED":
      return Object.assign({}, state, {
        person: action.person
      });

    case "RESET_PERSON":
      return initial_state;

    default:
      return state;
  }
};

export default person;
