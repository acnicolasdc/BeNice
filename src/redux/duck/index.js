import { combineReducers } from 'redux';
import auth from './auth.duck';
import createUser from './createUser.duck';
const reducer = combineReducers({
  auth,createUser,
});

export default reducer;
