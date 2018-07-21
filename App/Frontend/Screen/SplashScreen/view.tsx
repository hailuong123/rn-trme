import React, { Component } from 'react';
import {
  View,
  Image,
  ActivityIndicator
} from 'react-native';

import Images from '../../../Assets/Images';
import CoreLayoutContainer from '../../Containers/CoreLayoutContainer';
import styles from './style';

interface Props {
  actionChangeRoute?: Function;
}

interface State {}

class SplashScreen extends Component<Props, State> {
  componentWillMount() {
    // this.props.actionLogin({ email: 'lal', password: 'gjgj' });
    const { actionChangeRoute } = this.props;
    if (actionChangeRoute) {
      actionChangeRoute();
    }
  }
  render() {
    return (
      <CoreLayoutContainer bgScreen={Images.bgLoginDark} showHeader={false}>
        <ActivityIndicator color='#333' size={0} style={styles.loading} />
      </CoreLayoutContainer>
    );
  }
}

export default SplashScreen;