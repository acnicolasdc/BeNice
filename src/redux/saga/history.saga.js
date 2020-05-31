import { takeLatest, call, put } from 'redux-saga/effects';
import {
  historyRequest,
  historySuccess,
  historyFailure,
} from '../duck/history.duck';
import { history } from '@/services';

function* historyRequestAsync({ payload: { user } }) {
  try {
    console.log(user);
    const response = yield call(history.all, user.usuario_id);
    console.log(response);
    yield put(historySuccess(response));
  } catch (error) {
    yield put(historyFailure(error));
  }
}

function* watchAuthAsync() {
  yield takeLatest(historyRequest, historyRequestAsync);
}

export default watchAuthAsync;
