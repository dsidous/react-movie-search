const movie = (
  state = {
    movie:{},
    crew:{},
    similar:{},
    videos:[],
    isFetching: false
  }, action) => {

  switch (action.type) {
    case 'GET_MOVIE_TMDB':
      return Object.assign({}, state, {
        isFetching: true
    })
    case 'GET_MOVIE_TMDB_FULFILLED':
      return Object.assign({}, state, {
        movie: action.movie
      })
    case 'GET_MOVIE_CREW_FULFILLED':
      return Object.assign({}, state, {
        crew: action.crew
      })
    case 'GET_SIMILAR_MOVIE_TMDB_FULFILLED':
      return Object.assign({}, state, {
        similar: action.similar
      })
    case 'GET_VIDEOS_TMDB_FULFILLED':
      return Object.assign({}, state, {
        videos: action.videos,
        isFetching: false
      })
    default:
      return state;
  }
}

export default movie;
