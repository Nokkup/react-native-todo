import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function TodoItem({item, deleteTodo}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item}>
        <View>
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
  deleteButton: {
    fontSize: 20,
  },
});
