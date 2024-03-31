import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PointsScreen = ({ points }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.pointsText}>{points} Points</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointsText: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PointsScreen;
