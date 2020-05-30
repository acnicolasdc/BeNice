import { createActions, handleActions } from 'redux-actions';
const defaultState = {
  fetching: false,
  error: false,
  success: false,
};

export const { loginRequest, loginSuccess, loginFailure } = createActions({
  LOGIN_REQUEST: (data) => ({ ...defaultState, fetching: true, data }),
  LOGIN_SUCCESS: ({ data, message }) => ({
    data,
    message,
    fetching: false,
    success: true,
  }),
  LOGIN_FAILURE: (message) => ({
    message,
    fetching: false,
    error: true,
  }),
});

const auth = handleActions(
  {
    [loginRequest]: (
      draft,
      { payload: { message, fetching, success, error } }
    ) => ({
      ...draft,
      message,
      fetching,
      success,
      error,
    }),
    [loginSuccess]: (
      draft,
      { payload: { message, fetching, success, data } }
    ) => ({
      ...draft,
      message,
      fetching,
      success,
      data,
    }),
    [loginFailure]: (draft, { payload: { message, fetching, error } }) => ({
      ...draft,
      message,
      fetching,
      error,
    }),
  },
  defaultState
);

export default auth;
