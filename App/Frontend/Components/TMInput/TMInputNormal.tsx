import React from 'react';

import {
  View,
  TextInput
} from 'react-native';

import BaseInput from './BaseInput';

class TMInputNormal extends BaseInput {
  render() {
    const { placeHolder, value, secureTextEntry, icon, style, styleicon, autoFocus, inputRef } = this.props;
    return (
      <View>
        {
          icon && <View style={styleicon}>{icon}</View> 
        }

        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeHolder}
          value={value}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          style={style}
          autoFocus={autoFocus}
          ref={inputRef}
          underlineColorAndroid='transparent'
        />
      </View>
    );
  }
}

export default TMInputNormal;