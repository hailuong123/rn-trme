import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Keyboard
} from 'react-native';

import Fade from './components/fade';
import Filter from './components/search';
import { icSearch } from '../../../General/globalIcon';
import { height } from '../../../General/globalStyles';
import CoreLayoutContainer from '../../Containers/CoreLayoutContainer';
import Images from '../../../Assets/Images';

import styles from './style';

interface Props {
  resultFilter?: Array<any>
}
interface State {
  sourceImage: Array<any>;
  resFilter: Array<any>;
  frontImg: any;
  backImg: any;
}

let intervalSlide: NodeJS.Timer;

class Journey extends React.Component<Props, State> {
  private opacity: any;
  private opacity1: any;
  private height: any;

  static defaultProps = {
    resultFilter: []
  }

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
      backImg: '',
      resFilter: [
        {
          id: '001',
          type: 'location',
          name: 'Massachusetts, United States'
        }, {
          id: '002',
          type: 'home',
          name: 'Homes in Massachusetts, United States'
        }
      ]
    }
    this.opacity = new Animated.Value(0);
    this.opacity1 = new Animated.Value(1);
    this.height = new Animated.Value(0);
    this.filterAnimated = this.filterAnimated.bind(this);
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

  filterAnimated = () => {
    const toggleBoxFilter = this.height._value;
    if (toggleBoxFilter > 0) {
      Keyboard.dismiss();
    } else {
      // this.textSearch
    }

    Animated.timing(this.height, {
      toValue: toggleBoxFilter > 0 ? 0 : height(100),
      duration: 200,
    }).start()
  }

  render() {
    const { resFilter } = this.state;
    return ( 
      <CoreLayoutContainer showHeader={false}>
        <View style={styles.searchContainer}>
          <TouchableOpacity onPress={this.filterAnimated}>
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

        <Filter
          filterAnimated={this.filterAnimated}
          pushUpFilter={this.height}
          resultFilter={resFilter}
        />

      </CoreLayoutContainer>
    );
  }
} 

export default Journey;
