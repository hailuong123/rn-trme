import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import Images from '../../../Assets/Images';
import { mail, unlock, arrowRightCircle } from '../../../General/globalIcon';
import CoreLayoutContainer from '../../Containers/CoreLayoutContainer';
import TMInput from '../../Components/TMInput';
import style from './style';

interface Props {}

interface State {
  value: FieldRegister;
}

type FieldRegister = {
  readonly email: string;
  readonly password: string;
}

class RegisterScreen extends React.Component<Props, State> {

  constructor (props: Props) {
    super(props);

    this.state = {
      value: {
        email: '',
        password: ''
      }
    }

    this.onChange = this.onChange.bind(this);
    this.routeLogin = this.routeLogin.bind(this);
  }

  onChange = (e: any, ref: string) => {
    const { value } = this.state;
    this.setState({
      value: {
        ...value,
        [ref]: e.nativeEvent.text
      }
    });
  }
  
  routeLogin = () => {
    Actions.login({ type: ActionConst.BACK });
  }

  render() {
    return (
      <CoreLayoutContainer bgScreen={Images.bgLoginDark} showHeader={false}>
        <View style={style.container}>
          <View style={style.posLogo}>
            <Image
              source={Images.logoWhite}
              style={style.logoLogin}
            />
          </View>
          <View style={style.formContainer}>
            <View style={[style.fieldGroup, style.fieldGroupEmail]}>
              <TMInput
                ref={'email'}
                onChange={(e: any) => this.onChange(e, 'email')}
                value={this.state.value.email}
                placeHolder={'E-MAIL'}
                icon={mail}
                style={style.inputText}
                styleicon={style.iconStyle}
              />
            </View>
            <View style={[style.fieldGroup, style.fieldGroupPassword]}>
              <TMInput 
                ref={'password'}
                onChange={(e: any) => this.onChange(e, 'password')}
                value={this.state.value.password}
                placeHolder={'PASSWORD'}
                icon={unlock}
                style={style.inputText}
                styleicon={style.iconStyle}
                secureTextEntry={true}
              />
            </View>
            <View style={[style.fieldGroup, style.fieldGroupCfmPassword]}>
              <TMInput 
                ref={'cfmpassword'}
                onChange={(e: any) => this.onChange(e, 'cfmpassword')}
                value={this.state.value.password}
                placeHolder={'CONFORM PASSWORD'}
                icon={unlock}
                style={style.inputText}
                styleicon={style.iconStyle}
                secureTextEntry={true}
              />
            </View>
            <View style={style.btn}>
              <TouchableOpacity style={style.btnLogin}>
                <Text style={style.textBtn}>REGISTER </Text>
                <Text style={style.iconBtn}>{arrowRightCircle}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.bottomScreen}>
            <TouchableOpacity onPress={this.routeLogin}>
              <Text style={style.textBottom}>Already have an account?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </CoreLayoutContainer>
    );
  }
}   

export default RegisterScreen;