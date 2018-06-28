import { StyleSheet, Platform } from 'react-native';
import { width, heightResize } from '../../../General/globalStyles';
const IOS = Platform.OS = 'ios';
const heightNavBar = heightResize(IOS ? 11.5 : 8.5);
const topNavBarIOS = heightResize(IOS ? 3 : 0);
const navBarFit = heightResize(IOS ? 5 : 2);

const styles = StyleSheet.create({
  container: {
    height: heightNavBar + heightResize(1),
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
  bgDefault: {
    flex: 1,
    resizeMode: 'stretch',
    width: '100%'
  }
});

export default styles;