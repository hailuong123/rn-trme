import React from 'react';
import {
  View,
  Text
} from 'react-native';

import CoreLayoutContainer from '../../Containers/CoreLayoutContainer';
import style from './style';

class Login extends React.Component<{}, {}> {
  render() {
    return ( 
      <CoreLayoutContainer titleScreen={'Login'}>
        <View style={style.container}>
          <View>
            <Text style={style.fontTest}>Login Field</Text>
          </View>
          <View>
            <Text>Facebook Login</Text>
          </View>
        </View>
      </CoreLayoutContainer>
    );
  }
}   

export default Login;