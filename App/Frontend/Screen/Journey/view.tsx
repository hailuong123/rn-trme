import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated
} from 'react-native';

import Fade from './components/fade';
import { icSearch } from '../../../General/globalIcon';
import CoreLayoutContainer from '../../Containers/CoreLayoutContainer';
import Images from '../../../Assets/Images';

import styles from './style';

interface Props {}
interface State {
  sourceImage: Array<any>;
  frontImg: any;
  backImg: any;
}

let intervalSlide: NodeJS.Timer;

class Journey extends React.Component<Props, State> {
  public opacity: any;
  public opacity1: any;
  constructor (props: Props) {
    super(props);
    this.state = {
      sourceImage: [
        Images.imgVietnam,
        Images.imgBhutan,
        Images.imgItaly,
        Images.imgParis,
        Images.imgchina
      ],
      frontImg: '',
      backImg: ''
    }
    this.opacity = new Animated.Value(0);
    this.opacity1 = new Animated.Value(1);
  }
  
  componentWillMount() {
    const { sourceImage } = this.state;
    this.setState({
      frontImg: sourceImage[1],
      backImg: sourceImage[0]
    })
  }

  componentDidMount() {
    let index: number = 0;
    const { sourceImage } = this.state;

    intervalSlide = setInterval(() => {
      if (index >= sourceImage.length - 1) {
        index = 0;
      } else {
        index++;
      }
      this.slideOpacity(index);
    }, 5000)

  }

  componentWillUnmount() {
    clearInterval(intervalSlide);
  }

  slideOpacity = (index: number) => {
    const { sourceImage } = this.state;
    const value = this.opacity._value;
    const value1 = this.opacity1._value;

    Animated.parallel([
      Animated.timing(this.opacity, {
        toValue: value === 1 ? 0 : 1,
        duration: 3000,
      }),
      Animated.timing(this.opacity1, {
        toValue: value1 === 1 ? 0 : 1,
        duration: 3000,
      })
    ]).start((eventFront: any) => {
      if (eventFront.finished) {
        const imgIndex = index >= sourceImage.length - 1 ? 0 : index + 1;
        
        if (value1 === 0) {
          this.setState({
            frontImg: sourceImage[imgIndex]
          });
        } else {
          this.setState({
            backImg: sourceImage[imgIndex],
          });
        }
      }
    });
  };
  
  resetAnimate = () => {
    this.opacity.setValue(0);
    this.opacity1.setValue(1);
  }

  render() {
    return ( 
      <CoreLayoutContainer showHeader={false}>
        <View style={styles.searchContainer}>
          <TouchableOpacity>
            <View style={styles.searchInner}>
              <Text style={styles.searchIcon}>{icSearch}</Text>
              <Text style={styles.searchText}> Try "Paris"</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <Fade
          opacity={this.opacity}
          opacity1={this.opacity1}
          frontImage={this.state.frontImg}
          backImage={this.state.backImg}
        />

      </CoreLayoutContainer>
    );
  }
} 

export default Journey;
