import { loginConstants } from './constants';
import { userService } from '../../services/user';
import { history } from '../../helpers/history';
// import { alertActions } from './';

function login(email, password) {
  function request(user) { return { type: loginConstants.LOGIN_REQUEST, user }; }
  function success(user) { return { type: loginConstants.LOGIN_SUCCESS, user }; }
  function failure(error) { return { type: loginConstants.LOGIN_FAILURE, error }; }

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
          // dispatch(alertActions.error(error));
        }
      );
  };
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

export const userActions = {
  login,
  logout
};
