import { combineReducers } from 'redux';
import auth from './auth.duck';
import createUser from './createUser.duck';
import history from './history.duck';
import publication from './publication.duck';
import like from './like.duck';
import dislike from './dislike.duck';
import updateUser from './updateUser.duck';

const reducer = combineReducers({
  auth,
  createUser,
  history,
  like,
  dislike,
  updateUser,
  publication
});

export default reducer;
