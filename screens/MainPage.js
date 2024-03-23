import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from '../components/Header';

const MainPage = ({ navigation, route }) => {
  // Extract username from route parameters
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <Header text="Welcome" username={username} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    //alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default MainPage;
