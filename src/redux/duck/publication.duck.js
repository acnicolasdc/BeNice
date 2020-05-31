import { createActions, handleActions } from 'redux-actions';
const defaultState = {
  fetching: false,
  error: false,
  success: false,
  data: [],
};

export const { publicationRequest, publicationSuccess, publicationFailure } = createActions({
  PUBLICATION_REQUEST: (data) => ({ ...defaultState, fetching: true, data }),
  PUBLICATION_SUCCESS: ({ data, message }) => ({
    data,
    message,
    fetching: false,
    success: true,
  }),
  PUBLICATION_FAILURE: (message) => ({
    message,
    fetching: false,
    error: true,
  }),
});

const auth = handleActions(
  {
    [publicationRequest]: (
      draft,
      { payload: { message, fetching, success, error } }
    ) => ({
      ...draft,
      message,
      fetching,
      success,
      error,
    }),
    [publicationSuccess]: (
      draft,
      { payload: { message, fetching, success, data } }
    ) => ({
      ...draft,
      message,
      fetching,
      success,
      data,
    }),
    [publicationFailure]: (draft, { payload: { message, fetching, error } }) => ({
      ...draft,
      message,
      fetching,
      error,
    }),
  },
  defaultState
);

export default auth;
