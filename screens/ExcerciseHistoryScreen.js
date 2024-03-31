import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ExerciseHistoryScreen = ({ route }) => {
  const { weight, distance, duration, activity } = route.params || {};
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Update history when a new entry is received
    if (weight && distance && duration && activity) {
      setHistory([...history, { weight, distance, duration, activity }]);
    }
  }, [weight, distance, duration, activity]);

  // Limit the history to 4 latest entries
  const limitedHistory = history.slice(0, 10);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        {limitedHistory.map((entry, index) => (
          <View key={index} style={styles.entryContainer}>
            <Text style={styles.label}>Entry {index + 1}</Text>
            <Text style={styles.info}>Weight: {entry.weight}</Text>
            <Text style={styles.info}>Distance: {entry.distance}</Text>
            <Text style={styles.info}>Duration: {entry.duration} minutes</Text>
            <Text style={styles.info}>Activity: {entry.activity}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  entryContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 15
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 15
  },
});

export default ExerciseHistoryScreen;
