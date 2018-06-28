import SplashScreen from './view';
import { connect } from 'react-redux';
import * as mapActionsToProps from './actions';

/* const mapsDispatchToProps = (dispatch: any) => {
  return {
    login: (body: any) => dispatch(login(body))
  }
} */

const mapStateToProps = (state: any) => ({
  ...state
});

export default connect(mapStateToProps, mapActionsToProps)(SplashScreen as any);
