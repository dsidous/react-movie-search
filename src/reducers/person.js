const person = (
  state = {
    person: {},
    person_movies: []
  }, action) => {

  switch (action.type) {
    case 'GET_PERSON_TMDB_FULFILLED':
      return Object.assign({}, state, {
        person: action.person
    })

    case 'GET_PERSON_MOVIES_TMDB_FULFILLED':
      return Object.assign({}, state, {
        person_movies: action.person_movies
    })

    default:
      return state;
  }
}

export default person;
