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
  }
});

export default style;
