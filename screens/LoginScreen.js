import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from "../components/LoginButton";
import { searchUserCredentials } from "../backend/SearchUser"; 
import SignUpLink from '../components/SignUpLink';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  };

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };

  const handleSubmit = async () => {
    try {
      const credentialsFound = await searchUserCredentials(username, password);
      if (credentialsFound) {
        navigation.navigate('Main', { username }); // pass username as a parameter
      } else {
        Alert.alert('Login Failed', 'Invalid username or password');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred while searching for user.');
    }
  };

  // include the background image and username/password fields for logging in 

  return (
    <ImageBackground
      source={require('../images/login_background.jpeg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Log In</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleUsernameChange}
          value={username}
          placeholder="Username"
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.input}
          onChangeText={handlePasswordChange}
          value={password}
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry={true}
        />
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={handleSubmit} />
        </View>
        <SignUpLink/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  input: {
    fontSize: 20,
    textAlign: 'center',
    height: 60,
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 30,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 270,
  },
});
