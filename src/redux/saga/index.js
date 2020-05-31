import { all } from 'redux-saga/effects';
import watchHistoryAsync from './history.saga';

export default function* rootSaga() {
  yield all([watchHistoryAsync()]);
}
