import {
  StyleSheet,
  Dimensions
} from 'react-native';

const GENERAL_RATIO = 667 / 375;
export const WIDTH_DEVICE = Dimensions.get('window').width;
export const HEIGHT_DEVICE = Dimensions.get('window').height;
const MY_RESIZE = GENERAL_RATIO / (HEIGHT_DEVICE / WIDTH_DEVICE); 

export const width = (num: number) => WIDTH_DEVICE * (num / 100);
export const height = (num: number) => HEIGHT_DEVICE * (num / 100);
export const heightResize = (num: number) => GENERAL_RATIO * (num * MY_RESIZE / 100);

export const APPFONT = {
  ROBOTO: 'Roboto-Light',
  ROBOTOBOLD: 'Roboto-Bold',
  RALEWAYBOLD: 'Raleway-Bold',
  RALEWAYNORMAL: 'Raleway-Regular',
  RALEWAYTHIN: 'Raleway-Thin',
}

export const APPCOLOR = {
  DEFAULT: '#333',
  LINK: '#219AF1'
}

export const TEXTDEFAULT = {
  color: '#333',
  fontSize: width(4),
  fontFamily: APPFONT.ROBOTO
}

const styles = StyleSheet.create({
  backgroundDefault: {
    flex: 1,
    backgroundColor: APPCOLOR.DEFAULT
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
    width: '100%'
  }
});

export default styles;
