import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Header from '../components/Header';
import EnterButton from '../components/EnterButton';

const MainPage = ({ navigation, route }) => {
  // extract username from route parameters
  const { username } = route.params || {};
  const [weight, setWeight] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [activity, setActivity] = useState('Workout');


  // send the data to the points and history screen 

  const handleEnterPress = () => 
  {
    if (weight && distance && duration) 
    {
      Alert.alert('Success', 'Your data has been submitted successfully.');
      navigation.navigate('Points', { weight, distance, duration });
      navigation.navigate('History', { weight, distance, duration, activity });
    } 
    else if (weight <= 0 ||  duration <= 0) 
    {
      Alert.alert('Error', 'Data submitted must be greater than zero.');
    }
    else 
    {
      Alert.alert('Error', 'Please enter all required information.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.mainLogoImage}
          source={require('../images/main_image_logo.jpeg')}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.textBody}>Please enter the information</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          value={weight}
          onChangeText={setWeight}
          placeholder="Weight(lbs)"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.textInput}
          value={distance}
          onChangeText={setDistance}
          placeholder="Distance(km)"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.textInput}
          value={duration}
          onChangeText={setDuration}
          placeholder="Duration(mins)"
          keyboardType="numeric"
        />
        <Picker
          style={styles.pickerMenu}
          selectedValue={activity}
          onValueChange={(currentActivity) => setActivity(currentActivity)}
        >
          <Picker.Item label="Workout" value="Workout" />
          <Picker.Item label="Sports" value="Sports" />
          <Picker.Item label="Light Jog" value="Light Jog" />
          <Picker.Item label="Indoor activity" value="Indoor activity" />
        </Picker>
      </View>
      <View style={styles.buttonContainer}>
        <EnterButton title={'Enter'} onPress={handleEnterPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    //alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: -170,
  },
  mainLogoImage: {
    height: '40%',
    width: '40%',
    resizeMode: 'contain',
  },
  textBody: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  formContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  textInput: {
    marginBottom: 10,
    fontSize: 20,
    padding: 15,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRadius: 30,
    width: 160,
    height: 50,
  },
  pickerMenu: {
    width: 300,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -15,
  },
});

export default MainPage;
