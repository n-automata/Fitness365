import React, { useState } from 'react';
import { View, Text, StyleSheet, Button , TextInput, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Header from '../components/Header';
import EnterButton from '../components/EnterButton';

const MainPage = ({ navigation, route }) => {
  // Extract username from route parameters
  const { username } = route.params;
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activity, setActivity] = useState('Workout');
 
  return (
     <View style={styles.container}>
       <Header text="Welcome" username={username} />
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
           onChange={setWeight}
           placeholder='Enter weight'
           keyboardType="numeric"
         />
         <TextInput
           style={styles.textInput}
           value={height}
           onChange={setHeight}
           placeholder='Enter height'
           keyboardType="numeric"
         />
         <TextInput
           style={styles.textInput}
           placeholder='Duration'
         />
         <Picker
           style={styles.pickerMenu}
           selectedValue={activity}
           onValueChange={currentActivity => setActivity(currentActivity)}>
           <Picker.Item label="Workout" value="Workout" />
           <Picker.Item label="Sports" value="Sports" />
           <Picker.Item label="Light Jog" value="Light Jog" />
           <Picker.Item label="Indoor activity" value="Indoor activity" />
         </Picker>
       </View>
       {/* Wrap the EnterButton in a View with center alignment */}
       <View style={styles.buttonContainer}>
         <EnterButton title={'Enter'} onPress={() => {}}/>
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
     marginBottom: -250,
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
     width: 150,
     height: 50,
  },
  pickerMenu: {
     width: 300,
  },
  // Add a new style for the button container
  buttonContainer: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     marginTop: -15,
  },
 });
 
 export default MainPage;
 
