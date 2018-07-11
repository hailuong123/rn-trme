import RegisterScreen from './view';
import { connect } from 'react-redux';
import * as mapActionsToProps from './actions';

const mapStateToProps = (state: any) => ({
  ...state
});

export default connect(mapStateToProps, mapActionsToProps)(RegisterScreen as any);
