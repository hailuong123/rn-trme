import React from 'react';

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

class CoreLayoutContainer extends React.Component<Props, State> {

  componentWillMount() {
    console.log(1)
  }
  render() {
    const { children, leftAction, rightAction, titleScreen, headerStyle, bgScreen } = this.props;
    const bgApp = require('../../../Assets/Images/bgApp.jpg');
    return (
      <View>
        <View style={[styles.viewBg, bgScreen]}>
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
    
      </View>
    );
  }
}
export default CoreLayoutContainer;