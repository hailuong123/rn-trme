import {
  StyleSheet
} from 'react-native';

import {
  APPFONT
} from '../../../General/globalStyles';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontTest: {
    fontFamily: APPFONT.RALEWAYBOLD,
    fontSize: 20
  },
  logoLogin: {
    width: 60,
    height: 100,
    marginTop: -100,
    resizeMode: 'contain'
  },
  inputText: {
    height: 30
  }
});

export default style;
