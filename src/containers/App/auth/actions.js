import { authConstants } from './constants';
import { userService } from '../../../services/user';

function logout() {
    userService.logout();
    return { type: authConstants.LOGOUT };
}

export const authActions = {
    logout
};
