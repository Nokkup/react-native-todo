import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AddTodo from './AddTodo';
import Placeholder from './Placeholder';
import TodoItem from './TodoItem';
import {
  addTodo,
  deleteTodo,
  changeStatus,
  changeFilter,
} from '../store/todoActions';
import {selectFilteredTodos, selectTodosCount} from '../store/todoSelectors';
import TodoCounter from './TodoCounter';
import TodoFilter from './TodoFilter';

export default function TodoApp() {
  const todos = useSelector(selectFilteredTodos);
  const todosCounter = useSelector(selectTodosCount);
  const dispatch = useDispatch();

  const addItem = value => {
    dispatch(addTodo(value));
  };

  const deleteItem = id => {
    dispatch(deleteTodo(id));
  };

  const changeItemStatus = id => {
    dispatch(changeStatus(id));
  };

  const filterItems = filterType => {
    dispatch(changeFilter(filterType));
  };

  return (
    <View style={styles.container}>
      <View>
        {todosCounter.all ? <TodoFilter filter={filterItems} /> : null}
        {todosCounter.all ? (
          <TodoCounter
            completed={todosCounter.completed}
            active={todosCounter.active}
          />
        ) : null}
        <FlatList
          data={todos}
          ListEmptyComponent={() => <Placeholder />}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TodoItem
              item={item}
              deleteTodo={deleteItem}
              changeStatus={changeItemStatus}
            />
          )}
        />
        <AddTodo addTodo={addItem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#bacbd2',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
