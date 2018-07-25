import React from 'react';
import {
  View,
  Text,
  Animated,
  TouchableOpacity
} from 'react-native';
import { icClose10 } from '../../../../General/globalIcon';
import TMInput from '../../../Components/TMInput';
import styles from '../style';

interface Props {
  pushUpFilter?: any;
  resultFilter?: Array<any>;
  filterAnimated?: Function;
}

export default function Search (props: Props) {

  const {
    resultFilter,
    pushUpFilter,
    filterAnimated
  } = props;

  const closeBoxSearch = () => {
    if (filterAnimated) {
      filterAnimated()
    }
  }

  return (
    <Animated.View style={[styles.filterContainer, {height: pushUpFilter}]}>
      <View style={styles.searchBox}>
        <View style={[styles.searchInner, styles.searchInnerModalSearch]}>
          <TouchableOpacity onPress={closeBoxSearch} style={styles.btnClose}>
            {icClose10}
          </TouchableOpacity>
          <View style={styles.searchBorder}>
            <TMInput
              placeHolder={'Try "Paris"'}
              style={styles.textInput}
              autoFocus={true}
              inputRef={'textSearch'}
            />
          </View>
        </View>
      </View>
    </Animated.View>
  );
}
