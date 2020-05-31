import { all } from 'redux-saga/effects';
import createUserAuthAsync from './createUser.saga';
import watchHistoryAsync from './history.saga';
import watchPublicationAsync from './publication.saga';
import watchUserAsync from './user.saga';
import watchAuthAsync from './auth.saga';

export default function* rootSaga() {
  yield all([watchAuthAsync(),createUserAuthAsync(),watchHistoryAsync(),watchPublicationAsync(),watchUserAsync()]);

}