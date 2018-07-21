import React from 'react';

import {
  View,
  Image
} from 'react-native';
import Images from '../../../Assets/Images';
import CoreHeader from './CoreHeader';
import styles from './styles';

interface Props {
  bgColor?: any;
  bgScreen?: any;
  children?: any;
  titleScreen?: string;
  leftAction?: Function;
  rightAction?: Function;
  rightIcon?: any;
  headerStyle?: any;
  showHeader?: boolean;
}

interface State {}

class CoreLayoutContainer extends React.Component<Props, State> {
  static defaultProps = {
    bgColor: {
      backgroundColor: '#FFF'
    }
  } 
  render() {
    const { children, showHeader, leftAction, rightAction, titleScreen, headerStyle, bgScreen, bgColor } = this.props;
    return (
      <View style={bgColor}>
        {
          bgScreen && 
            <View style={[styles.viewBg]}>
              <Image 
                style={styles.bgDefault} 
                source={bgScreen} /> 
            </View>
        }
        
        <CoreHeader
          titleScreen={titleScreen} 
          leftAction={leftAction} 
          rightAction={rightAction} 
          headerStyle={headerStyle} 
          showHeader={showHeader}
        />

        <View style={styles.content}>
          {children}
        </View> 
    
      </View>
    );
  }
}
export default CoreLayoutContainer;