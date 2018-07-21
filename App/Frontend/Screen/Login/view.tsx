import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import Images from '../../../Assets/Images';
import { mail, unlock, arrowRightCircle, icFacebook } from '../../../General/globalIcon';
import CoreLayoutContainer from '../../Containers/CoreLayoutContainer';
import TMInput from '../../Components/TMInput';
import style from './style';

interface Props {
  actionRouteRegister?: Function;
};

interface State {
  value: any;
};

type FieldLogin = {
  readonly email: string;
  readonly password: string;
};

class Login extends React.Component<Props, State> {

  constructor (props: Props) {
    super(props);

    this.state = {
      value: {
        email: '',
        password: ''
      }
    }

    this.onChange = this.onChange.bind(this);
    this.routeRegister = this.routeRegister.bind(this);
    this.routeJourney = this.routeJourney.bind(this);
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

  routeRegister = () => {
    Actions.register({ type: ActionConst.PUSH });
  }

  routeJourney = () => {
    Actions.journey({ type: ActionConst.JUMP });
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
            <View style={style.btn}>
              <TouchableOpacity style={style.btnLogin} onPress={this.routeJourney}>
                <Text style={style.textBtn}>LOGIN </Text>
                <Text style={style.iconBtn}>{arrowRightCircle}</Text>
              </TouchableOpacity>
            </View>

            <View style={style.alginOR}>
              <View style={[style.borderOr, style.borderOrLeft]}></View>
              <Text style={style.textOr}>OR CONNECT WITH</Text>
              <View style={[style.borderOr, style.borderOrRight]}></View>
            </View>
            

            <View style={style.fbLogin}>
              <TouchableOpacity style={style.btnLoginFb}>
                <Text style={style.iconFb}>{icFacebook}</Text>
                <Text style={style.textFb}>LOG IN WITH FACEBOOK</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.bottomScreen}>
            <TouchableOpacity>
              <Text style={style.textBottom}>Forgot password?</Text>
            </TouchableOpacity>
            <Text style={style.line}>/</Text>
            <TouchableOpacity onPress={this.routeRegister}>
              <Text style={style.textBottom}>Create an account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </CoreLayoutContainer>
    );
  }
}   

export default Login;