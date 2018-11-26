import { userService } from '../../../services/user';
import { history } from '../../../helpers/history';
import { authConstants } from './constants';

function login(email, password) {
  function request(user) {
    return {
      type: authConstants.LOGIN_REQUEST,
      user
    };
  }

  function success(user) {
    return {
      type: authConstants.LOGIN_SUCCESS,
      user
    };
  }

  function failure(error) {
    return {
      type: authConstants.LOGIN_FAILURE,
      error
    };
  }

  return (dispatch) => {
    dispatch(request({ email }));

    userService.login(email, password)
      .then(
        (user) => {
          dispatch(success(user));
          history.push('/');
        },
        (error) => {
          dispatch(failure(error));
        }
      );
  };
}

function logout() {
  userService.logout();
  
  return {
    type: authConstants.LOGOUT
  };
}

export const authActions = {
  login,
  logout
};
