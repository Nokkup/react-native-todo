import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Keyboard,
} from 'react-native';

export default function AddTodo({addTodo}) {
  const [todoText, setTodoText] = useState('');
  const MAX_TEXT_LEN = 50;
  const MIN_TEXT_LEN = 1;

  const onChangeText = text => {
    setTodoText(text);
  };

  const onSubmit = () => {
    if (todoText.length >= MIN_TEXT_LEN && todoText.length <= MAX_TEXT_LEN) {
      addTodo(todoText);
      setTodoText('');
      Keyboard.dismiss();
    } else {
      Alert.alert(
        ':(',
        `Ограничения длины записи: максимум ${MAX_TEXT_LEN} символов, минимум ${MIN_TEXT_LEN}`,
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          placeholder="Добавьте задачу"
          value={todoText}
          onChangeText={onChangeText}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 20,
    backgroundColor: '#fff9f1',
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff9f1',
    margin: 10,
    borderRadius: 5,
  },
});
