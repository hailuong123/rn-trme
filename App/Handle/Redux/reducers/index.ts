import { combineReducers } from 'redux';

import * as globalReducers from './globalReducers';

const rootReducer = combineReducers({
  ...globalReducers
})

export default rootReducer;