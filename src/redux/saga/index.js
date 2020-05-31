import { all } from 'redux-saga/effects';
import watchHistoryAsync from './history.saga';
import watchUserAsync from './user.saga';

export default function* rootSaga() {
  yield all([watchHistoryAsync(), watchUserAsync()]);
}
