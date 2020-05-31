import { combineReducers } from 'redux';
import auth from './auth.duck';
import history from './history.duck';

const reducer = combineReducers({
  auth,
  history,
});

export default reducer;
