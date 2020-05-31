import { takeLatest, call, put } from 'redux-saga/effects';
import { loginRequest, loginSuccess, loginFailure } from '../duck/auth.duck';
import { auth } from '@/services';

function* loginRequestAsync(data) {
  try {
    data.payload.data.api = true;
    const response = yield call(auth.login, data.payload.data);
    yield put(loginSuccess(response));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* watchAuthAsync() {
  yield takeLatest(loginRequest, loginRequestAsync);
}

export default watchAuthAsync;