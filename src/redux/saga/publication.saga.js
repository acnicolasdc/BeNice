import { takeLatest, call, put } from 'redux-saga/effects';
import { publicationRequest, publicationSuccess, publicationFailure } from '../duck/publication.duck';
import { publication } from '@/services';

function* publicationRequestAsync(data) {
  try {
    data.payload.data.api = true;
    const response = yield call(publication.publication, data.payload.data);
    yield put(publicationSuccess(response));
  } catch (error) {
    yield put(publicationFailure(error));
  }
}

function* watchPublicationAsync() {
  yield takeLatest(publicationRequest, publicationRequestAsync);
}

export default watchPublicationAsync;