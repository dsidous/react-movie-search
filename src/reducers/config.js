const config = (state = {config:{}}, action) => {

  switch (action.type) {
    case 'GET_CONFIG_FULFILLED':
      return Object.assign({}, state, {
        config: action.config
      })
    default:
      return state;
  }
}

export default config;
