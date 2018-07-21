import React from 'react';
import { 
  Scene, 
  Stack, 
  Router 
} from 'react-native-router-flux';

import Login from '../Frontend/Screen/Login';
import Register from '../Frontend/Screen/Register';
import Journey from '../Frontend/Screen/Journey';
import SplashScreen from '../Frontend/Screen/SplashScreen';

const scenes = () => (
  <Router>
    <Stack key="root" hideNavBar>
      <Scene key="slashscreen" component={SplashScreen} title="Slashscreen" initial={true} />
      <Scene key="login" component={Login} title="Login" />
      <Scene key="register" component={Register} title="Register" />
      <Scene key="journey" component={Journey} title="Journey" type="pop" />
    </Stack>
  </Router>
);

export default scenes;