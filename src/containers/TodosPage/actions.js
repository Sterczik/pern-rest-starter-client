import axios from 'axios';
import { authHeader } from '../../helpers/auth-header';
// import { todosConstants } from './constants';

// function getTodos() {
//   function request(user) {
//     return {
//       type: authConstants.LOGIN_REQUEST,
//       user
//     };
//   }

//   function success(user) {
//     return {
//       type: authConstants.LOGIN_SUCCESS,
//       user
//     };
//   }

//   function failure(error) {
//     return {
//       type: authConstants.LOGIN_FAILURE,
//       error
//     };
//   }

//   return (dispatch) => {

//   };
// }

export const setTodos = (todos) => ({
  type: 'SET_TODOS',
  todos
});

export const startSetTodos = () => {
  return (dispatch) => {
    const options = {
      headers: authHeader()
    };
    return axios.get('/api/todos/', options)
      .then((res) => {
        const todos = res.data;
        dispatch(setTodos(todos));
      });
  };
};
