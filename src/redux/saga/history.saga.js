import { takeLatest, call, put } from 'redux-saga/effects';
import {
  historyRequest,
  historySuccess,
  historyFailure,
} from '../duck/history.duck';
import { history } from '@/services';

function* historyRequestAsync() {
  try {
    console.log('hola');
    const response = yield call(history.all);
    yield put(historySuccess(response));
  } catch (error) {
    yield put(historyFailure(error));
  }
}

function* watchAuthAsync() {
  yield takeLatest(historyRequest, historyRequestAsync);
}

export default watchAuthAsync;
