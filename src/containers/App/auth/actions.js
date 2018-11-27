import { userService } from '../../../services/user';
import { history } from '../../../helpers/history';
import { authConstants } from './constants';

function register(email, name, password) {
  const registerInProcess = (user) => ({
    type: authConstants.REGISTER_IN_PROCESS,
    user
  });

  const registerSuccess = (user) => ({
    type: authConstants.REGISTER_SUCCESS,
    user
  });

  const registerFailure = (error) => ({
    type: authConstants.REGISTER_FAILURE,
    error
  });

  return (dispatch) => {
    dispatch(registerInProcess({ email }));

    userService.register(email, name, password)
      .then(
        (user) => {
          dispatch(registerSuccess(user));
          history.push('/todos');
        },
        (error) => {
          dispatch(registerFailure(error));
        }
      );
  };
}

function login(email, password) {
  const loginInProcess = (user) => ({
    type: authConstants.LOGIN_IN_PROCESS,
    user
  });

  const loginSuccess = (user) => ({
    type: authConstants.LOGIN_SUCCESS,
    user
  });

  const loginFailure = (error) => ({
    type: authConstants.LOGIN_FAILURE,
    error
  });

  return (dispatch) => {
    dispatch(loginInProcess({ email }));

    userService.login(email, password)
      .then(
        (user) => {
          dispatch(loginSuccess(user));
          history.push('/todos');
        },
        (error) => {
          dispatch(loginFailure(error));
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
  register,
  login,
  logout
};
