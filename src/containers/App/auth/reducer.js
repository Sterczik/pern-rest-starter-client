import { authConstants } from './constants';

const user = JSON.parse(localStorage.getItem('token'));
const initialState = user ? { loggedIn: true, user } : {};

export default (state = initialState, action) => {
  switch (action.type) {
    case authConstants.LOGOUT:
      return {};
    default:
      return state;
  }
};
