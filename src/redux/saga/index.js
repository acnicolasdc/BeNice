import { all } from 'redux-saga/effects';
import watchTestAsync from './test.saga';

export default function* rootSaga() {
  yield all([
    watchTestAsync(),
  ]);
}
