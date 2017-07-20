const config = (state = {config:{}, genres:{}}, action) => {

  switch (action.type) {
    case 'GET_CONFIG_FULFILLED':
      return Object.assign({}, state, {
        config: action.config
      })
    case 'GET_GENRES_TMDB_FULFILLED':
      return Object.assign({}, state, {
        genres: action.genres
      })
    default:
      return state;
  }
}

export default config;
