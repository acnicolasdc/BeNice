import { combineReducers } from 'redux';
import auth from './auth.duck';
import history from './history.duck';
import like from './like.duck';
import dislike from './dislike.duck';

const reducer = combineReducers({
  auth,
  history,
  like,
  dislike,
});

export default reducer;
