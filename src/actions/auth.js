import { AUTH_USER_SET, USER_SET } from './types';

export function onSetAuthUser(authUser){
  return function(dispatch) {
    dispatch({ type: AUTH_USER_SET, authUser })
  }
}

export function onSetUser(user){
  return function(dispatch){
    dispatch({ type: USER_SET, user })
  }
}