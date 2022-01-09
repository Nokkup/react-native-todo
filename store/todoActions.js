import {ADD_TODO, DELETE_TODO} from './types';

export const addTodo = todoText => ({
  type: ADD_TODO,
  payload: todoText,
});

export const deleteTodo = todoId => ({
  type: DELETE_TODO,
  payload: todoId,
});
