import { Actions, ActionConst } from 'react-native-router-flux';

export const actionRouteRegister = () => {
  Actions.register({ type: ActionConst.PUSH });
}
