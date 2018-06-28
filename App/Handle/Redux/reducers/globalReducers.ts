import { createReducer } from '../lib/reducerConfig';
import init from '../lib/initState';
import key from '../lib/constants';

export const setUser = createReducer(init.user, (state: any, action: any) => {
  switch (action.type) {
    case [key.SETUSER]: 
      return action.payload
  }
});

export const getUser = createReducer(init.user, (state: any, action: any) => {
  switch (action.type) {
    case [key.USER_REQUEST]:
      return {
        isLoading: true
      };

    case [key.USER_REQUEST_SUCCESS]:
      return {
        isLoading: false,
        user: action.user
      };

    case [key.USER_REQUEST_FAILED]:
      return {
        isLoading: false,
        error: action.error
      };
      
    default:
      return state;
  }
});