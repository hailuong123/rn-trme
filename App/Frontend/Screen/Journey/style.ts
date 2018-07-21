import {
  StyleSheet,
  Platform
} from 'react-native';
import { width } from '../../../General/globalStyles';

const ISIOS = Platform.OS === 'ios';

const styles = StyleSheet.create({
  searchContainer: {
    paddingVertical: width(ISIOS ? 7 : 5),
    paddingHorizontal: width(5),
    position: 'absolute',
    width: width(100),
    zIndex: 1
  },
  searchInner: {
    paddingTop: width(0),
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(228, 228, 228, 0.7)',
    elevation: 10,
    shadowColor: 'rgba(228, 228, 228, 0)',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    width: '100%',
    height: width(13),
    borderRadius: 2,
    justifyContent: 'center',
  },
  searchText: {
    fontSize: width(3.5),
    paddingLeft: width(10)
  },
  searchIcon: {
    position: 'absolute',
    left: width(3)
  },
  slideContainer: {
    flex: 1,
    overflow: 'hidden'
  },
  slideItem: {
    position: 'absolute',
    opacity: 1,
    height: '100%'
  },
  slideImg: {
    resizeMode: 'cover',
    height: '100%'
  }
});

export default styles;