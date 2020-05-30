import { combineReducers } from 'redux-immutable';
import test from './test.duck';

const reducer = combineReducers({
  test,
});

export default reducer;
