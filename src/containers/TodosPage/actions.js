import axios from 'axios';
import { authHeader } from '../../helpers/auth-header';

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
