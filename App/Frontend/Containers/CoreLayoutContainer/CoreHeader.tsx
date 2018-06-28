import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { iconAdd, iconBack } from '../../../General/globalIcon';
import styles from './styles';
import { heightResize } from '../../../General/globalStyles';
interface Props {
  titleScreen?: string;
  leftAction?: Function;
  rightAction?: Function;
  rightIcon?: any;
  headerStyle?: any;
}

interface State {}

class CoreHeader extends Component<Props, State> {

  leftActionHeader = (action: any) => action;
  rightActionHeader = (action: any) => action;

  render() {
    const { leftAction, rightAction, titleScreen, headerStyle } = this.props;
    return (
      <View style={[styles.container, headerStyle]}>
        {
          leftAction
            ? <TouchableOpacity onPress={() => this.leftActionHeader(leftAction)}>{iconBack}</TouchableOpacity>
            : <View style={{}} />
        }
        <View>
          <Text numberOfLines={1}>{titleScreen}</Text>
        </View>
        {
          rightAction
            && <TouchableOpacity onPress={() => this.rightActionHeader(rightAction)}>{iconAdd}</TouchableOpacity>
        }
      </View>
    );
  }
}

export default CoreHeader;