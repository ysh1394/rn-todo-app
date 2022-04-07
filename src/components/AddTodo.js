import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';

const AddTodo = () => {
  return (
    <View style={[styles.container]}>
      <TextInput placeholder="할일을 입력하세요." style={styles.input} />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  input: {
    fontSize: 16,
    paddingVertical: 16,
  },
});
