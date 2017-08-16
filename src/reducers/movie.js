const initial_state = {
  movie:{},
  crew:[],
  images:{},
  similar:[],
  videos:[],
  isFetching: false
}

const movie = (
  state = initial_state, action) => {

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
    case 'GET_MOVIE_IMAGES_FULFILLED':
      return Object.assign({}, state, {
        images: action.images
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
    case 'RESET_MOVIE_STATE':
      return initial_state
    default:
      return state;
  }
}

export default movie;
