const toppeople = (
    state = {
      toppeople:[]
    }, action) => {
  
    switch (action.type) {
      case 'GET_TOPPEOPLE_TMDB_FULFILLED':
        return Object.assign({}, state, {
          toppeople: action.toppeople
        })
      default:
        return state;
    }
  }
  
  export default toppeople;
  