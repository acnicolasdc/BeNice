import { takeLatest, call, put } from 'redux-saga/effects';
import { createUserRequest, createUserSuccess, createUserFailure } from '../duck/createUser.duck';
import { createUser } from '@/services';

function* createUserRequestAsync(data) {
  try {
    data.payload.data.api = true;
    const response = yield call(createUser.createUser, data.payload.data);
    yield put(createUserSuccess(response));
  } catch (error) {
    yield put(createUserFailure(error));
  }
}

function* createUserAuthAsync() {
  yield takeLatest(createUserRequest, createUserRequestAsync);
}

export default createUserAuthAsync;
