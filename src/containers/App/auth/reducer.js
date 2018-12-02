import { authConstants } from './constants';

const user = JSON.parse(localStorage.getItem('token'));
const initialState = user ? { loggedIn: true, loggingIn: false, user } : {};

export default (state = initialState, action) => {
  switch (action.type) {
    case authConstants.REGISTER_IN_PROCESS:
      return {
      };
    case authConstants.REGISTER_SUCCESS:
      return {
      };
    case authConstants.REGISTER_FAILURE:
      return {};
    case authConstants.LOGIN_IN_PROCESS:
      return {
        loggingIn: true,
        loggedIn: false,
        user: action.user
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        loggingIn: false,
        loggedIn: true,
        user: action.user
      };
    case authConstants.LOGIN_FAILURE:
      return {};
    case authConstants.CHANGE_PASSWORD_IN_PROCESS:
      return {
      };
    case authConstants.CHANGE_PASSWORD_SUCCESS:
      return {
      };
    case authConstants.CHANGE_PASSWORD_FAILURE:
      return {
      };
    case authConstants.LOGOUT:
      return {};
    default:
      return state;
  }
};
