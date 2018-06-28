import key from '../lib/constants';
import API from '../../Api';

export const login = (body: any) => {
  return (dispatch: any) => {
    dispatch(requestUser());
    API.getUser(body)
      .then(
        user => {
          console.log(user);
          dispatch(requestUserSuccess(user));
        },
        error => {
          dispatch(requestUserFailed(error));
        }
      );
  }; 

  function requestUser() { return { type: key.USER_REQUEST }; }
  function requestUserSuccess(user: any) { return { type: key.USER_REQUEST_SUCCESS, user }; }
  function requestUserFailed(error: any) { return { type: key.USER_REQUEST_FAILED, error }; }
}

export const setUser = (user: any) => {
  return {
    type: key.SETUSER,
    payload: user
  }
}
