import {ADD_TODO, DELETE_TODO, CHANGE_STATUS} from './types';

export const addTodo = todoText => ({
  type: ADD_TODO,
  payload: todoText,
});

export const deleteTodo = todoId => ({
  type: DELETE_TODO,
  payload: todoId,
});

export const changeStatus = todoId => ({
  type: CHANGE_STATUS,
  payload: todoId,
});
