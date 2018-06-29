import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image
} from 'react-native';

import CoreLayoutContainer from '../../Containers/CoreLayoutContainer';
import style from './style';

interface Props {}

interface State {
  email: string,
  password: string
}

class Login extends React.Component<Props, State> {

  constructor (props: Props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange = (e: any) => {
    console.log(e.nativeEvent.text);
  }

  render() {
    const logo = require('../../../Assets/Images/logo.png');
    return ( 
      <CoreLayoutContainer titleScreen={'Login'}>
        <View style={style.container}>
          <View>
            <Image 
              source={logo}
              style={style.logoLogin}
            />
          </View> 
          <View>
            <Text style={style.fontTest}>Login Field</Text>
            <TextInput 
              ref={'email'}
              style={style.inputText}
              onChange={this.onChange}
              value={this.state.email}
            />
            
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