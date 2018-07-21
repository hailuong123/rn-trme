import { StyleSheet, Platform } from 'react-native';
import { width, APPFONT } from '../../../General/globalStyles';
const IOS = Platform.OS === 'ios';

const styles = StyleSheet.create({
  container: {
    height: width(IOS ? 17.5 : 11.5),
    width: width(100),
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    height: '100%', 
  },
  viewBg: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  titleStyle: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: width(0.3),
    borderColor: 'rgba(228, 228, 228, 1)'
  },
  textTitle: {
    fontFamily: APPFONT.RALEWAYBOLD,
    marginTop: width(IOS ? 5 : 0),
    color: '#333',
    fontSize: width(3.5)
  },
  bgDefault: {
    flex: 1,
    resizeMode: 'stretch',
    width: '100%'
  }
} as any);

export default styles;
