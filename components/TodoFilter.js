import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {TODO_FILTER} from '../store/types';

export default function TodoFilter({filter}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => filter(TODO_FILTER.ALL)}>
        <Text>Все</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => filter(TODO_FILTER.COMPLETED)}>
        <Text>Выполненные</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => filter(TODO_FILTER.ACTIVE)}>
        <Text>Активные</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  button: {
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff9f1',
    padding: 5,
    marginBottom: 20,
    marginLeft: 10,
    borderRadius: 5,
  },
});
