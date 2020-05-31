import { all } from 'redux-saga/effects';
import watchAuthAsync from './auth.saga';
import createUserAuthAsync from './createUser.saga';
import watchHistoryAsync from './history.saga';

export default function* rootSaga() {
  yield all([watchAuthAsync(),createUserAuthAsync(),watchHistoryAsync()]);
}
