import React, { Component } from 'react';
import {
  Animated
} from 'react-native';

interface Props {
  inputRef?: string;
  onChange?: Function;
  onBlur?: Function;
  onFocus?: Function;
  style?: any;
  styleicon?: any;
  placeHolder?: string;
  value?: string;
  secureTextEntry?: boolean;
  icon?: any;
  autoFocus?: boolean;
}

interface State {
  focusAnimated: any;
}

class BaseInput extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  onChange = (event: any, ref?: string) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(event, ref);
    }
  }

  onBlur = (event: any) => {
    const { onBlur } = this.props;
    if (onBlur) {
      onBlur(event);
    }
  }

  onFocus = (event: any) => {
    const { onFocus } = this.props;
    if (onFocus) {
      onFocus(event);
    }
  }
}

export default BaseInput;