import React from 'react';
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { _keyExtractor } from '../../../../General/globalFunctions';
import { icClose10, icLocation, icHome } from '../../../../General/globalIcon';
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

  const itemFilter = ({ item } : { item: any }) => (
    <View style={[styles.filterList]}>
      <View style={styles.filterInner}>
        <TouchableHighlight>
          <Text style={styles.filterItem}>{item.type === 'location' ? icLocation : icHome}{'   '}<Text style={styles.filterText}>{item.name}</Text></Text>
        </TouchableHighlight>
      </View>
    </View>
  )

  return (
    <Animated.View style={[styles.filterContainer, {height: pushUpFilter}]}>
      <View style={styles.searchBox}>
        <View style={[styles.searchInnerModalSearch]}>
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
      <View style={styles.filterResult}>
        {
          resultFilter && 
            <FlatList
              renderItem={itemFilter}
              data={resultFilter}
              keyExtractor={_keyExtractor}
            />
        }
      </View>
    </Animated.View>
  );
}
