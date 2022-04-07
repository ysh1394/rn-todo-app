/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import AddTodo from './src/components/AddTodo';

import DateHead from './src/components/DateHead';
import Empty from './src/components/Empty';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container]} edges={['bottom']}>
        <KeyboardAvoidingView
          behavior={Platform.select({ ios: 'padding' })}
          // behavior={Platform.OS === 'ios' ? 'padding' : undefined} 동일한 기능
          style={[styles.avoid]}
        >
          <DateHead />
          <Empty />
          <AddTodo />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});

export default App;
