import {
  ADD_TODO,
  DELETE_TODO,
  CHANGE_STATUS,
  CHANGE_FILTER,
  TODO_FILTER,
} from './types';

const INITIAL_STATE = {
  todos: [],
  filter: TODO_FILTER.ALL,
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
    case CHANGE_STATUS: {
      return {
        todos: [
          ...state.todos.map(todo =>
            todo.id === action.payload
              ? {...todo, completed: !todo.completed}
              : todo,
          ),
        ],
      };
    }
    case CHANGE_FILTER: {
      return {...state, filter: action.payload};
    }
    default:
      return state;
  }
};
