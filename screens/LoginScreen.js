import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput } from 'react-native';
import Button from "../components/LoginButton"

export default function LoginScreen() {
  const [text, setText] = useState(''); // Initialize state for TextInput value

  // Define onChangeText function to handle TextInput changes
  const onChangeText = (newText) => {
    setText(newText); // Update state with new TextInput value
  };

  return (
    <ImageBackground
      source={require('../images/login_background.jpeg')} // background image
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Log In</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Username"
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Password"
          placeholderTextColor="gray"
        />
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={() => console.log('Login button pressed')} />
        </View>
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
    marginTop: 375,
  },
});
