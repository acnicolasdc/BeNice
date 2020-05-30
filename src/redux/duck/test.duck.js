import { Map } from 'immutable';
import { createActions, handleActions } from 'redux-actions';
const defaultState = Map({
  fetching: false,
  error: false,
  success: false,
});

export const { request, success, failure } = createActions({
  REQUEST: () => ({ ...defaultState, fetching: true }),
  SUCCESS: () => ({
    fetching: false,
    success: true,
  }),
  FAILURE: () => ({
    fetching: false,
    error: true,
  }),
});

const test = handleActions(
  {
    [request]: (state, { payload: { message, fetching, success, error } }) => {
      console.log(state.get('error'));
    },
    [success]: (state, { payload: { fetching, success } }) => {
      console.log(state);
    },
    [failure]: (state, { payload: { fetching, error } }) => {
      console.log(state);
    },
  },
  defaultState
);

export default test;
