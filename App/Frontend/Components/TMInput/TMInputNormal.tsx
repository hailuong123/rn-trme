import React from 'react';

import {
  View,
  TextInput
} from 'react-native';

import BaseInput from './BaseInput';

class TMInputNormal extends BaseInput {
  render() {
    const { placeHolder, value, secureTextEntry, onChange, onBlur, onFocus, icon, style, styleicon } = this.props;
    return (
      <View>
        {
          icon && <View style={styleicon}>{icon}</View> 
        }

        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          style={style}
          underlineColorAndroid='transparent'
        />
      </View>
    );
  }
}

export default TMInputNormal;