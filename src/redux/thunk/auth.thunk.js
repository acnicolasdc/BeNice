import { loginFailure, loginRequest, loginSuccess } from '../duck/auth.duck';
import { auth } from '@/services';

export const loadUsers = (data) => (dispatch) => {
  dispatch(loginRequest());
  return auth
    .login(data)
    .then((response) => {
      dispatch(loginSuccess(response.data));
      return response.data;
    })
    .catch((error) => {
      dispatch(loginFailure(error));
      return Promise.error(error);
    });
};
