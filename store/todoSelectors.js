export const selectTodos = state => {
  return state.todosList.todos;
};

export const selectTodosCount = state => {
  const all = state.todosList.todos.length;
  const completed = state.todosList.todos.filter(todo => todo.completed).length;
  const active = all - completed;
  return {all, completed, active};
};
