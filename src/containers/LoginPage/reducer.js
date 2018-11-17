import { loginConstants } from './constants';

const user = JSON.parse(localStorage.getItem('token'));
const initialState = user ? { loggedIn: true, user } : {};

export default (state = initialState, action) => {
  switch (action.type) {
    case loginConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case loginConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case loginConstants.LOGIN_FAILURE:
      return {};
    case loginConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
