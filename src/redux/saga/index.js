import { all } from 'redux-saga/effects';
import watchAuthAsync from './auth.saga';
import createUserAuthAsync from './createUser.saga';
import watchHistoryAsync from './history.saga';
import watchPublicationAsync from './publication.saga';

export default function* rootSaga() {
  yield all([watchAuthAsync(),createUserAuthAsync(),watchHistoryAsync(),watchPublicationAsync()]);
}
