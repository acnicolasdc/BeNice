import { createActions, handleActions } from 'redux-actions';
const defaultState = {
  fetching: false,
  error: false,
  success: false,
  data: [],
};

export const { likeRequest, likeSuccess, likeFailure } = createActions({
  LIKE_REQUEST: (data) => ({ ...defaultState, fetching: true, data }),
  LIKE_SUCCESS: ({ message }) => ({
    message,
    fetching: false,
    success: true,
  }),
  LIKE_FAILURE: (message) => ({
    message,
    fetching: false,
    error: true,
  }),
});

const like = handleActions(
  {
    [likeRequest]: (
      draft,
      { payload: { message, fetching, success, error } }
    ) => ({
      ...draft,
      message,
      fetching,
      success,
      error,
    }),
    [likeSuccess]: (draft, { payload: { message, fetching, success } }) => ({
      ...draft,
      message,
      fetching,
      success,
    }),
    [likeFailure]: (draft, { payload: { message, fetching, error } }) => ({
      ...draft,
      message,
      fetching,
      error,
    }),
  },
  defaultState
);

export default like;
