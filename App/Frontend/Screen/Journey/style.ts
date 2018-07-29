import {
  StyleSheet,
  Platform
} from 'react-native';
import { width, APPFONT } from '../../../General/globalStyles';

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
  searchInnerModalSearch: {
    borderColor: '#FFF',
    marginTop: width(2),
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
  },
  filterContainer: {
    position: 'absolute',
    bottom: 0,
    width: width(100),
    zIndex: 2,
    backgroundColor: '#FFF'
  },
  filterResult: {

  },
  searchBox: {
    marginTop: width(5),
  },
  textInput: {
    height: width(15),
    fontSize: width(5),
    fontFamily: APPFONT.RALEWAYBOLD,
    textAlign: 'center'
  },
  searchBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(228, 228, 228, 1)',
  },
  btnClose: {
    marginLeft: width(2)
  },
  filterList: {
    paddingHorizontal: width(2)
  },
  filterInner: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(228, 228, 228, 1)',
    paddingVertical: width(4)
  },
  filterItem: {
    
  },
  filterText: {
    fontSize: width(3.5),
    color: '#333',
    paddingLeft: width(13)
  }
});

export default styles;