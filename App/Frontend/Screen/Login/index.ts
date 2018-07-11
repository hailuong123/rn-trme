import Login from './view';
import { connect } from 'react-redux';
import * as mapActionsToProps from './actions';

const mapStateToProps = (state: any) => ({
  ...state
});

export default connect(mapStateToProps, mapActionsToProps)(Login as any);
