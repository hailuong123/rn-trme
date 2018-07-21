import { StyleSheet } from 'react-native';

import { APPFONT, width, height } from '../../../General/globalStyles';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: width(15),
    position: 'absolute',
    top: width(70)
  },
  fieldGroup: {
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  fieldGroupEmail: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderColor: 'transparent',
    borderBottomColor: '#A7AAAC',
    borderBottomWidth: 1
  },
  fieldGroupPassword: {
    borderColor: 'transparent',
    borderBottomColor: '#A7AAAC',
    borderBottomWidth: 1
  },
  fieldGroupCfmPassword: {
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  fontTest: {
    fontFamily: APPFONT.RALEWAYBOLD,
    fontSize: width(10)
  },
  posLogo: {
    position: 'absolute',
    top: width(30),
  },
  logoLogin: {
    width: width(20),
    height: width(30),
    resizeMode: 'contain'
  },
  iconStyle: {
    position: 'absolute',
    top: width(3.5),
    left: width(2)
  },
  inputText: {
    height: height(7),
    paddingLeft: width(11.5)
  },
  btn: {
    alignItems: 'center',
    marginVertical: width(3)
  },
  btnLogin: {
    width: width(40),
    height: width(10),
    backgroundColor: '#427FBF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginTop: width(2.5)
  },
  textBtn: {
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    fontFamily: APPFONT.RALEWAYBOLD,
  },
  iconBtn: {
    position: 'absolute',
    right: width(0)
  },
  alginOR: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: width(3)
  },
  borderOr: {
    height: width(0.3),
    width: width(18),
    backgroundColor: '#fff'
  },
  borderOrLeft: {},
  borderOrRight: {},
  textOr: {
    fontFamily: APPFONT.RALEWAYNORMAL,
    fontSize: width(3),
    color: '#fff', 
  },
  bottomScreen: {
    position: 'absolute',
    width: '100%',
    bottom: width(5),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBottom: {
    color: '#fff',
    fontSize: width(4),
    fontFamily: APPFONT.RALEWAYNORMAL
  },
  line: {
    color: '#fff',
    fontSize: width(4),
    marginHorizontal: 5
  }
});

export default style;
