import { combineReducers } from 'redux';
import auth from './auth.duck';
import createUser from './createUser.duck';
import history from './history.duck';
import publication from './publication.duck';
const reducer = combineReducers({
  auth,createUser,
  history,publication,
});

export default reducer;
