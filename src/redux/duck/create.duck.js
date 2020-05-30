import { createActions, handleActions } from 'redux-actions';
const defaultState = {
  fetching: false,
  error: false,
  success: false,
};

export const { createRequest, createSuccess, createFailure } = createActions({
  CREATE_REQUEST: (data) => ({ ...defaultState, fetching: true, data }),
  CREATE_SUCCESS: ({ data, message }) => ({
    data,
    message,
    fetching: false,
    success: true,
  }),
  CREATE_FAILURE: (message) => ({
    message,
    fetching: false,
    error: true,
  }),
});

const create = handleActions(
  {
    [createRequest]: (
      draft,
      { payload: { message, fetching, success, error } }
    ) => ({
      ...draft,
      message,
      fetching,
      success,
      error,
    }),
    [createSuccess]: (
      draft,
      { payload: { message, fetching, success, data } }
    ) => ({
      ...draft,
      message,
      fetching,
      success,
      data,
    }),
    [createFailure]: (draft, { payload: { message, fetching, error } }) => ({
      ...draft,
      message,
      fetching,
      error,
    }),
  },
  defaultState
);

export default create;
