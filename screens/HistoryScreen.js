import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HistoryScreen = ({ route }) => {
  const { weight, distance, duration, activity } = route.params || {};
  const [history, setHistory] = useState([]);

  useEffect(() => 
  {
    // update history when a new entry is received
    if (weight && distance && duration && activity) 
    {
      setHistory([...history, { weight, distance, duration, activity }]);
    }
  }, [weight, distance, duration, activity]);

  // limit the history to 10 latest entries
  const limitedHistory = history.slice(0, 10);

  // display the information on the screen 
  // use a scroll view 
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        {limitedHistory.map((entry, index) => (
          <View key={index} style={styles.entryContainer}>
            <Text style={styles.label}>Entry {index + 1}</Text>
            <Text style={styles.info}>Weight: {entry.weight}LB</Text>
            <Text style={styles.info}>Distance: {entry.distance}KM</Text>
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
    justifyContent: 'center'  
  },
  entryContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: 'orange',
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

export default HistoryScreen;
