import React, { Component } from 'react';
import {
  Animated
} from 'react-native';

interface Props {
  onChange?: any;
  onBlur?: any;
  onFocus?: any;
  style?: any;
  styleicon?: any;
  placeHolder?: string;
  value?: string;
  secureTextEntry?: boolean;
  icon?: any;
}

interface State {
  focusAnimated: any;
}

class BaseInput extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange = (event: any, ref: string) => {
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