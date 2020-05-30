import { combineReducers } from 'redux';
import auth from './auth.duck';
import create from './create.duck';

const reducer = combineReducers({
  auth,
  create,
});

export default reducer;
