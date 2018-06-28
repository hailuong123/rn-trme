import React from 'react';
import {
  View,
  Text
} from 'react-native';

import CoreLayoutContainer from '../../Containers/CoreLayoutContainer';

class Journey extends React.Component<{}, {}> {
  render() {
    return ( 
      <CoreLayoutContainer titleScreen={'Login'}>
        <Text>
          Journey Screen
        </Text>
      </CoreLayoutContainer>
    );
  }
}   

export default Journey;