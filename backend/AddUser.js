import AsyncStorage from '@react-native-async-storage/async-storage';

export async function addUserCredentials(username, password) {
 try {
    let userData = [];
    
    // Attempt to read the data from AsyncStorage
    const storedData = await AsyncStorage.getItem('userData');
    if (storedData) {
      userData = JSON.parse(storedData);
    }

    const existingUser = userData.find(user => user.username === username);
    if (existingUser) {
      console.log('Username already exists.');
      return false;
    }

    // Add the new user to the userData array
    userData.push({ username, password });

    // Store the updated userData array back to AsyncStorage
    await AsyncStorage.setItem('userData', JSON.stringify(userData));
    
    console.log('User added successfully.');
    return true;
 } catch (error) {
    console.error('Error:', error);
    return false;
 }
}
