import { takeLatest } from 'redux-saga/effects';
import { request } from '../duck/test.duck';

function* testRequest() {
  yield console.log('welcome');
}

function* watchTestAsync() {
  yield takeLatest(request, testRequest);
}

export default watchTestAsync;
