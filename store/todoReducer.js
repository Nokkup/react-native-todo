import {ADD_TODO, DELETE_TODO} from './types';

const INITIAL_STATE = {
  todos: [],
};

export const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = {
        text: action.payload,
        completed: false,
        id: new Date().valueOf(),
      };
      return {todos: [...state.todos, newTodo]};
    }
    case DELETE_TODO: {
      return {
        todos: [...state.todos.filter(todo => todo.id !== action.payload)],
      };
    }
    default:
      return state;
  }
};
