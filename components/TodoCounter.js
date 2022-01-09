import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TodoCounter({completed, active}) {
  return (
    <View style={styles.container}>
      <Text>Завершенные: {completed}</Text>
      <Text>Активные: {active}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
