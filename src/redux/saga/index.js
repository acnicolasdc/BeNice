import { all } from 'redux-saga/effects';
import watchAuthAsync from './auth.saga';

export default function* rootSaga() {
  yield all([watchAuthAsync()]);
}
