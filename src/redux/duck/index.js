import { combineReducers } from 'redux';
import auth from './auth.duck';
import createUser from './createUser.duck';
import history from './history.duck';
import like from './like.duck';
import dislike from './dislike.duck';

const reducer = combineReducers({
  auth,
  createUser,
  history,
  like,
  dislike,
});

export default reducer;
