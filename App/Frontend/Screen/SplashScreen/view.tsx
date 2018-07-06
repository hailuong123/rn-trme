import React, { Component } from 'react';
import {
  View,
  Image,
  ActivityIndicator
} from 'react-native';

import CoreLayoutContainer from '../../Containers/CoreLayoutContainer';
import styles from './style';

interface Props {
  actionChangeRoute?: Function;
}

interface State {}

class SplashScreen extends Component<Props, State> {
  componentWillMount() {
    // this.props.actionLogin({ email: 'lal', password: 'gjgj' });
    console.log(123);
    const { actionChangeRoute } = this.props;
    if (actionChangeRoute) {
      actionChangeRoute();
    }
  }
  render() {
    // const bgSplashScreen = require('../../../Assets/Images/bgApp.jpg');
    return (
      <CoreLayoutContainer headerStyle={styles.headerStyle}>
        <ActivityIndicator color='#333' size={0} style={styles.loading} />
      </CoreLayoutContainer>
    );
  }
}

export default SplashScreen;