import key from '../../../Handle/Redux/lib/constants';
import { Actions, ActionConst } from 'react-native-router-flux';
import { login } from '../../../Handle/Redux/actions/globalActions';

const store = require('react-native-simple-store');

export const actionLogin = (body: any) => {
  return (dispatch: any) => {
    dispatch(login(body))
  }
}

export const actionChangeRoute = () => {
  return async () => {
    let getUser = await store.get(key.SETUSER);
    console.log(getUser);
    setTimeout(function () {
        getUser 
          ? Actions.journey({ type: ActionConst.RESET,  })
          : Actions.login({ type: ActionConst.RESET }); 
    }, 500);
  }
}

export const actionBackRoute = () => {
  return Actions.pop();
}
