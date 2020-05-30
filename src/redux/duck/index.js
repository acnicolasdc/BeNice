import { combineReducers } from 'redux';
import auth from './auth.duck';

const reducer = combineReducers({
  auth,
});

export default reducer;
