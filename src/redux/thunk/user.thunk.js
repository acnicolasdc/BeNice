import {
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
} from '../duck/updateUser.duck';
import { user } from '@/services';

export const updateUser = (data) => (dispatch) => {
  dispatch(updateUserRequest());
  return user
    .updateUser(data)
    .then((response) => {
      dispatch(updateUserSuccess(response.data));
      return response.data;
    })
    .catch((error) => {
      dispatch(updateUserFailure(error));
      return Promise.error(error);
    });
};
