import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Placeholder() {
  return (
    <View style={styles.container}>
      <Text style={styles.placeholderText}>To-Do App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    color: '#ffffff',
    marginTop: 30,
    fontSize: 30,
  },
});
