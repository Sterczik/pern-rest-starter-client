import axios from 'axios';
import { authHeader } from '../../helpers/auth-header';
import { todosConstants } from './constants';

export function getTodos() {
  const getTodosInProcess = () => ({
    type: todosConstants.GET_TODOS_IN_PROCESS
  });

  const getTodosSuccess = (todos) => ({
    type: todosConstants.GET_TODOS_SUCCESS,
    todos
  });

  const getTodosFailure = (error) => ({
    type: todosConstants.GET_TODOS_FAILURE,
    error
  });

  return (dispatch) => {
    dispatch(getTodosInProcess());

    const options = {
      headers: authHeader()
    };
    return axios.get('/api/todos/', options)
      .then((res) => {
        const todos = res.data;
        dispatch(getTodosSuccess(todos));
      })
      .catch((error) => {
        dispatch(getTodosFailure(error));
      });
  };
}

export function createTodo(name) {
  const createTodoInProcess = () => ({
    type: todosConstants.CREATE_TODO_IN_PROCESS
  });

  const createTodoSuccess = (todo) => ({
    type: todosConstants.CREATE_TODO_SUCCESS,
    todo
  });

  const createTodoFailure = (error) => ({
    type: todosConstants.CREATE_TODO_FAILURE,
    error
  });

  return (dispatch) => {
    dispatch(createTodoInProcess());

    const data = JSON.stringify({
      name
    });

    const options = {
      headers: authHeader(),
      body: {
        name
      }
    };

    return axios.post('/api/todos/', data, options)
      .then((res) => {
        const todo = res.data;
        dispatch(createTodoSuccess(todo));
      })
      .catch((error) => {
        dispatch(createTodoFailure(error));
      });
  };
}
