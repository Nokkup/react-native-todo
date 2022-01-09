import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AddTodo from './AddTodo';
import Placeholder from './Placeholder';
import TodoItem from './TodoItem';
import {addTodo, deleteTodo, changeStatus} from '../store/todoActions';

export default function TodoApp() {
  const todos = useSelector(state => state.todosList.todos);
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

  return (
    <View style={styles.container}>
      <View>
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
