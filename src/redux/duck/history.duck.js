import { createActions, handleActions } from 'redux-actions';
const defaultState = {
  fetching: false,
  error: false,
  success: false,
  data: [],
};

export const { historyRequest, historySuccess, historyFailure } = createActions(
  {
    HISTORY_REQUEST: (data) => ({ ...defaultState, fetching: true, data }),
    HISTORY_SUCCESS: ({ data, message }) => ({
      data,
      message,
      fetching: false,
      success: true,
    }),
    HISTORY_FAILURE: (message) => ({
      message,
      fetching: false,
      error: true,
    }),
  }
);

const history = handleActions(
  {
    [historyRequest]: (
      draft,
      { payload: { message, fetching, success, error } }
    ) => ({
      ...draft,
      message,
      fetching,
      success,
      error,
    }),
    [historySuccess]: (
      draft,
      { payload: { message, fetching, success, data } }
    ) => ({
      ...draft,
      message,
      fetching,
      success,
      data,
    }),
    [historyFailure]: (draft, { payload: { message, fetching, error } }) => ({
      ...draft,
      message,
      fetching,
      error,
    }),
  },
  defaultState
);

export default history;
