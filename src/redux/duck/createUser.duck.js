import { createActions, handleActions } from 'redux-actions';
const defaultState = {
  fetching: false,
  error: false,
  success: false,
};

export const { createUserRequest, createUserSuccess, createUserFailure } = createActions({
  CREATE_USER_REQUEST: (data) => ({ ...defaultState, fetching: true, data }),
  CREATE_USER_SUCCESS: ({ data, message }) => ({
    data,
    message,
    fetching: false,
    success: true,
  }),
  CREATE_USER_FAILURE: (message) => ({
    message,
    fetching: false,
    error: true,
  }),
});

const createUser = handleActions(
  {
    [createUserRequest]: (
      draft,
      { payload: { message, fetching, success, error } }
    ) => ({
      ...draft,
      message,
      fetching,
      success,
      error,
    }),
    [createUserSuccess]: (
      draft,
      { payload: { message, fetching, success, data } }
    ) => ({
      ...draft,
      message,
      fetching,
      success,
      data,
    }),
    [createUserFailure]: (draft, { payload: { message, fetching, error } }) => ({
      ...draft,
      message,
      fetching,
      error,
    }),
  },
  defaultState
);

export default createUser;
