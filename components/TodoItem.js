import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function TodoItem({item, deleteTodo, changeStatus}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => changeStatus(item.id)}>
        <View>
          <Text
            style={[
              styles.itemStatus,
              item.completed
                ? styles.itemStatus_completed
                : styles.itemStatus_active,
            ]}>
            {item.completed ? 'Выполнено' : 'Невыполненно'}
          </Text>
          <Text style={styles.itemText}>{item.text}</Text>
        </View>
        <TouchableOpacity onPress={() => deleteTodo(item.id)}>
          <Text style={styles.deleteButton}>x</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  item: {
    flex: 1,
    backgroundColor: '#fff9f1',
    padding: 5,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemText: {
    color: 'black',
    fontSize: 20,
  },
  itemStatus: {
    color: '#67a030',
    fontSize: 15,
  },
  itemStatus_completed: {
    color: '#67a030',
  },
  itemStatus_active: {
    color: '#eadd46',
  },
  deleteButton: {
    fontSize: 20,
  },
});
