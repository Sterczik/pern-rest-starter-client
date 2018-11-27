import { todosConstants } from './constants';

const todosReducerDefaultState = [];

export default (state = todosReducerDefaultState, action) => {
  switch (action.type) {
    case todosConstants.GET_TODOS_IN_PROCESS:
      return [];
    case todosConstants.GET_TODOS_SUCCESS:
      return action.todos;
    case todosConstants.GET_TODOS_FAILURE:
      return [];

    case todosConstants.CREATE_TODO_IN_PROCESS:
      return state;
    case todosConstants.CREATE_TODO_SUCCESS:
      return [...state, action.todo];
    case todosConstants.CREATE_TODO_FAILURE:
      return state;

    default:
      return state;
  }
};
