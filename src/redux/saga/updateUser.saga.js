import { takeLatest, call, put } from 'redux-saga/effects';
import {
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
} from '../duck/updateUser.duck';
import { user } from '@/services';

function* updateUserRequestAsync({payload}) {
  try {
    const response = yield call(user.updateUser(payload.data));
    yield put(updateUserSuccess(response));
  } catch (error) {
    yield put(updateUserFailure(error));
  }
}

function* watchAuthAsync() {
  yield takeLatest(updateUserRequest, updateUserRequestAsync);
}

export default watchAuthAsync;
