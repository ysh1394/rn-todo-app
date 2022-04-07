import { View, Text, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import dayjs from 'dayjs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DateHead = () => {
  const { top } = useSafeAreaInsets();
  return (
    <>
      <View style={[styles.statusBarPlaceholder, { height: top }]} />
      <StatusBar barStyle="light-content" backgroundColor="#26a69a" />
      <View style={styles.container}>
        <Text style={styles.dateText}>
          {dayjs().format('YYYY년 MM월 DD일')}
        </Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
  statusBarPlaceholder: {
    backgroundColor: '#26a69a',
  },
});

export default DateHead;
