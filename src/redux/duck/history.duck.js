import { createActions, handleActions } from 'redux-actions';
const defaultState = {
  fetching: false,
  error: false,
  success: false,
  data: [],
};

export const {
  historyRequest,
  historySuccess,
  historyFailure,
  addLike,
  deleteLike,
} = createActions({
  HISTORY_REQUEST: (user) => ({ ...defaultState, fetching: true, user }),
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
  ADD_LIKE: (index) => ({ index }),
  DELETE_LIKE: (index) => ({ index }),
});

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
    [addLike]: (draft, { payload: { index } }) => {
      let data = [...draft.data];
      data[index].count_likes = data[index].count_likes + 1;
      data[index].like_estado = 'true';
      return { ...draft, data };
    },
    [deleteLike]: (draft, { payload: { index } }) => {
      let data = [...draft.data];
      data[index].count_likes = data[index].count_likes - 1;
      data[index].like_estado = 'false';
      return { ...draft, data };
    },
  },
  defaultState
);

export default history;
