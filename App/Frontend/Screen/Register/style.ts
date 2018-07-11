import { StyleSheet } from 'react-native';

import { APPFONT, width, height } from '../../../General/globalStyles';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: width(30),
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
  logoLogin: {
    width: width(30),
    height: width(50),
    marginTop: -width(50),
    resizeMode: 'contain'
  },
  iconStyle: {
    position: 'absolute',
    top: width(4.5),
    left: width(3)
  },
  inputText: {
    height: height(20),
    paddingLeft: width(20)
  },
  btn: {
    alignItems: 'center',
    marginVertical: width(5)
  },
  btnLogin: {
    width: width(70),
    height: width(15),
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
    marginVertical: width(10)
  },
  borderOr: {
    height: width(0.5),
    width: width(25),
    backgroundColor: '#fff'
  },
  borderOrLeft: {},
  borderOrRight: {},
  textOr: {
    fontFamily: APPFONT.RALEWAYNORMAL,
    fontSize: width(7),
    color: '#fff', 
  },
  fbLogin: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: width(20),
    backgroundColor: '#3b5998'
  },
  btnLoginFb: {
    flexDirection: 'row',
    width: width(100),
  },
  iconFb: {
    marginTop: width(0.5)
  },
  textFb: {
    color: '#fff',
    fontFamily: APPFONT.RALEWAYBOLD,
    marginTop: width(2.5)
  },
  bottomScreen: {
    position: 'absolute',
    bottom: width(20),
    width: width(100),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBottom: {
    color: '#fff',
    fontSize: width(6),
    fontFamily: APPFONT.RALEWAYNORMAL
  },
  line: {
    color: '#fff',
    fontSize: width(6),
    marginHorizontal: 5
  }
});

export default style;
