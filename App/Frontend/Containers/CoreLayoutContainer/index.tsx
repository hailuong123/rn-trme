import React, { Component } from 'react';

import {
  View,
  Image
} from 'react-native';

import CoreHeader from './CoreHeader';
import styles from './styles';
interface Props {
  bgScreen?: any;
  children?: any;
  titleScreen?: string;
  leftAction?: Function;
  rightAction?: Function;
  rightIcon?: any;
  headerStyle?: any;
}

interface State {}

class CoreLayoutContainer extends Component<Props, State> {

  render() {
    const { children, leftAction, rightAction, titleScreen, headerStyle, bgScreen } = this.props;
    const bgApp = require('../../../Assets/Images/bgApp.jpg');
    return (
      <View>
        <View style={styles.viewBg}>
          <Image 
            style={styles.bgDefault} 
            source={bgApp} /> 
        </View>
        <CoreHeader 
          titleScreen={titleScreen} 
          leftAction={leftAction} 
          rightAction={rightAction} 
          headerStyle={headerStyle} 
        />

        <View style={styles.content}>
          {children}
        </View> 

        {
          /* All Alerts and Notify code here */
        }
        
      </View>
    );
  }
}

export default CoreLayoutContainer;