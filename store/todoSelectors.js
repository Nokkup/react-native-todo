import {TODO_FILTER} from './types';

export const selectTodos = state => {
  return state.todosList.todos;
};

export const selectTodosCount = state => {
  const all = state.todosList.todos.length;
  const completed = state.todosList.todos.filter(todo => todo.completed).length;
  const active = all - completed;
  return {all, completed, active};
};

export const selectFilteredTodos = state => {
  switch (state.todosList.filter) {
    case TODO_FILTER.ALL: {
      return state.todosList.todos;
    }
    case TODO_FILTER.COMPLETED: {
      return state.todosList.todos.filter(todo => todo.completed);
    }
    case TODO_FILTER.ACTIVE: {
      return state.todosList.todos.filter(todo => !todo.completed);
    }
    default:
      return state.todosList.todos;
  }
};
