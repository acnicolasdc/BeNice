import { takeLatest, call, put } from 'redux-saga/effects';
import { likeRequest, likeSuccess, likeFailure } from '../duck/like.duck';
import {
  dislikeRequest,
  dislikeSuccess,
  dislikeFailure,
} from '../duck/dislike.duck';
import { addLike, deleteLike } from '../duck/history.duck';
import { user } from '@/services';

function* likeRequestAsync({ payload: { data } }) {
  try {
    console.log(data);
    const response = yield call(user.like, data.like);
    yield put(likeSuccess(response));
    yield put(addLike(data.index));
  } catch (error) {
    yield put(likeFailure(error));
  }
}
function* dislikeRequestAsync({ payload: { data } }) {
  try {
    console.log('JODEr');
    console.log(data.like);
    console.log('JODEr');
    const response = yield call(user.disLike, data.like);
    yield put(dislikeSuccess(response));
    yield put(deleteLike(data.index));
  } catch (error) {
    yield put(dislikeFailure(error));
  }
}

function* watchUserAsync() {
  yield takeLatest(likeRequest, likeRequestAsync);
  yield takeLatest(dislikeRequest, dislikeRequestAsync);
}

export default watchUserAsync;
