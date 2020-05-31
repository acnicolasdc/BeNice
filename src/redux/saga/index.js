import { all } from 'redux-saga/effects';
import watchAuthAsync from './auth.saga';
import createUserAuthAsync from './createUser.saga';

export default function* rootSaga() {
  yield all([watchAuthAsync(),createUserAuthAsync()]);
}
