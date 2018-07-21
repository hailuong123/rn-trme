import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { iconAdd, iconBack } from '../../../General/globalIcon';
import styles from './styles';

interface Props {
  titleScreen?: string;
  leftAction?: Function;
  rightAction?: Function;
  rightIcon?: any;
  headerStyle?: any;
  showHeader?: boolean;
}

interface State {}

class CoreHeader extends Component<Props, State> {

  static defaultProps = {
    showHeader: true
  }

  leftActionHeader = (action: any) => action;
  rightActionHeader = (action: any) => action;
  
  render() {
    const { showHeader, leftAction, rightAction, titleScreen, headerStyle } = this.props;
    return (
      <>
        {
          showHeader &&
            <View style={[styles.container, styles.titleStyle, headerStyle]}>
              {
                leftAction
                  ? <TouchableOpacity onPress={() => this.leftActionHeader(leftAction)}>{iconBack}</TouchableOpacity>
                  : <View style={{}} />
              }
              <View>
                <Text numberOfLines={1} style={styles.textTitle}>{titleScreen && titleScreen.toUpperCase()}</Text>
              </View>
              {
                rightAction
                  && <TouchableOpacity onPress={() => this.rightActionHeader(rightAction)}>{iconAdd}</TouchableOpacity>
              }
            </View>
        }
      </>
    );
  }
}

export default CoreHeader;