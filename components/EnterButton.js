import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const EnterButton = ({ title, onPress }) => {
 return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
 );
};

const styles = StyleSheet.create({
button: {
    borderRadius: 25,
    paddingTop: 15,
    paddingBottom: 5,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: 'orange',
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 5,
    shadowOffset: { width: 4, height: 8 },
    height: 75,
    width: 200,
},
buttonText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 35,
},
   });

export default EnterButton;