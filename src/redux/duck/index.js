import { combineReducers } from 'redux';
import auth from './auth.duck';
import createUser from './createUser.duck';
import history from './history.duck';
const reducer = combineReducers({
  auth,createUser,
  history,
});

export default reducer;
