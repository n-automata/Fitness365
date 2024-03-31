import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PointsScreen = ({ route }) => {
  // extracting the params passed from the navigation
  const { weight, distance, duration } = route.params || {};

  // state to hold total points
  const [points, setPoints] = useState(0);

  useEffect(() => {
    // load points from AsyncStorage when the component mounts
    loadPoints();
  }, []);

  useEffect(() => {
    // calculate points when weight, distance, or duration changes
    const newPoints = calculatePoints(weight, distance, duration);
    // update points state to accumulate points
    setPoints(prevPoints => prevPoints + newPoints);
  }, [weight, distance, duration]);

  // function to calculate points using simple formula that multiplies values 
  const calculatePoints = (weight, distance, duration) => {
    if (distance > 1) {
      return weight * distance * duration;
    } else {
      return weight * duration;
    }
  };

  // function to load points from AsyncStorage
  const loadPoints = async () => {
    try {
      const storedPoints = await AsyncStorage.getItem('points');
      if (storedPoints) {
        setPoints(parseInt(storedPoints));
      }
    } catch (error) {
      console.error('Error loading points:', error);
    }
  };

  // function to save points to AsyncStorage
  const savePoints = async (newPoints) => {
    try {
      await AsyncStorage.setItem('points', newPoints.toString());
    } catch (error) {
      console.error('Error saving points:', error);
    }
  };

  // define options for redeeming points
  const redeemOptions = [
    { title: 'Coffee', points: 3000 },
    { title: 'Movies', points: 7000 },
    { title: 'Food', points: 8000 },
    { title: 'Books', points: 10000 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.pointsText}>Points: {points}</Text>
      <Text style={styles.redeemText}>Redeem Points For:</Text>
      {/* Render redeem options */}
      {redeemOptions.map((option, index) => (
        <TouchableOpacity key={index} style={styles.optionContainer}>
          <Text style={styles.optionTitle}>{option.title}</Text>
          <Text style={styles.optionPoints}>{option.points} points</Text>
        </TouchableOpacity>
      ))}
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  redeemText: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionPoints: {
    fontSize: 16,
    color: 'green',
  },
});

export default PointsScreen;
