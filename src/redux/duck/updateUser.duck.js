import { createActions, handleActions } from 'redux-actions';
const defaultState = {
  fetching: false,
  error: false,
  success: false,
  data: [],
};

export const { updateUserRequest, updateUserSuccess, updateUserFailure } = createActions({
  UPDATE_USER_REQUEST: (data) => ({ ...defaultState, fetching: true, data }),
  UPDATE_USER_SUCCESS: ({ data, message }) => ({
    data,
    message,
    fetching: false,
    success: true,
  }),
  UPDATE_USER_FAILURE: (message) => ({
    message,
    fetching: false,
    error: true,
  }),
});

const auth = handleActions(
  {
    [updateUserRequest]: (
      draft,
      { payload: { message, fetching, success, error } }
    ) => ({
      ...draft,
      message,
      fetching,
      success,
      error,
    }),
    [updateUserSuccess]: (
      draft,
      { payload: { message, fetching, success, data } }
    ) => ({
      ...draft,
      message,
      fetching,
      success,
      data,
    }),
    [updateUserFailure]: (draft, { payload: { message, fetching, error } }) => ({
      ...draft,
      message,
      fetching,
      error,
    }),
  },
  defaultState
);

export default auth;
