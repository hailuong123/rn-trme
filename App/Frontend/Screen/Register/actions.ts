import { Actions, ActionConst } from 'react-native-router-flux';

export const actionRouteLogin = () => {
  return Actions.login({ type: ActionConst.BACK });
}
