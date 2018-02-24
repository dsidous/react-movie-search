const INITIAL_STATE = {
  user: {},
};

const applySetUser = (state, action) => ({
  ...state,
  user: action.user
});

function user(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'USER_SET' : {
      return applySetUser(state, action);
    }
    default : return state;
  }
}

export default user;