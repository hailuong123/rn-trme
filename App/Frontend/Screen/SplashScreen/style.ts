import {
  StyleSheet,
  Dimensions
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  bgImage: {
    flex: 1,
    resizeMode: 'stretch',
    width: '100%'
  },
  loading: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center', 
    alignItems: 'center',
    zIndex: 1,
    top: 0, left: 0, right: 0, bottom: 0,
  }
});

export default styles;