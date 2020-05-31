import { createActions, handleActions } from 'redux-actions';
const defaultState = {
  fetching: false,
  error: false,
  success: false,
  data: [],
};

export const { dislikeRequest, dislikeSuccess, dislikeFailure } = createActions(
  {
    DISLIKE_REQUEST: (data) => ({ ...defaultState, fetching: true, data }),
    DISLIKE_SUCCESS: ({ message }) => ({
      message,
      fetching: false,
      success: true,
    }),
    DISLIKE_FAILURE: (message) => ({
      message,
      fetching: false,
      error: true,
    }),
  }
);

const dislike = handleActions(
  {
    [dislikeRequest]: (
      draft,
      { payload: { message, fetching, success, error } }
    ) => ({
      ...draft,
      message,
      fetching,
      success,
      error,
    }),
    [dislikeSuccess]: (draft, { payload: { message, fetching, success } }) => ({
      ...draft,
      message,
      fetching,
      success,
    }),
    [dislikeFailure]: (draft, { payload: { message, fetching, error } }) => ({
      ...draft,
      message,
      fetching,
      error,
    }),
  },
  defaultState
);

export default dislike;
