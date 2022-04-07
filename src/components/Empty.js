import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Empty = () => {
  return (
    <View style={[styles.container]}>
      <Image
        source={require('../../assets/images/young_and_happy.png')}
        style={styles.image}
      />
      <Text style={[styles.description]}>야호! 할 일이 없습니다!</Text>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
  image: {
    width: 240,
    height: 179,
    marginBottom: 16,
  },
});
