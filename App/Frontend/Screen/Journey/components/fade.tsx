import React from 'react';
import {
  View,
  Image,
  Animated
} from 'react-native';

import styles from '../style';

interface Props {
  opacity: any;
  opacity1: any;
  frontImage: any;
  backImage: any;
}

export default function Fade (props: Props) {
  
  const {
    opacity,
    opacity1,
    frontImage,
    backImage
  } = props;
  
  return (
    <View style={styles.slideContainer}>
      <Animated.View
        style={[
          styles.slideItem,
          {
            opacity: opacity,
          }
      ]}>
        <Image source={frontImage} style={styles.slideImg} />
      </Animated.View>

      <Animated.View
        style={[
          styles.slideItem,
          {
            opacity: opacity1,
          }
      ]}>
        <Image source={backImage} style={styles.slideImg} />
      </Animated.View>

    </View>
  );
}