import React, { Component } from 'react';
import {
  Animated
} from 'react-native';

interface Props {
  onChange: Function;
  onBlur: Function;
  onFocus: Function;
}

interface State {
  value: any;
  focusAnimated: any;
}

class BaseInput extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange = (event: any) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(event);
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