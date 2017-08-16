const initial_state = {
  person: {},
  person_movies: []
}

const person = (
  state = initial_state, action) => {

  switch (action.type) {
    case 'GET_PERSON_TMDB_FULFILLED':
      return Object.assign({}, state, {
        person: action.person
    })

    case 'GET_PERSON_MOVIES_TMDB_FULFILLED':
      return Object.assign({}, state, {
        person_movies: action.person_movies
    })

    case 'RESET_PERSON':
      return initial_state
      
    default:
      return state;
  }
}

export default person;
