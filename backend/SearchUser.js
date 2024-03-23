import AsyncStorage from '@react-native-async-storage/async-storage';

export async function searchUserCredentials(username, password) {
  try {
    // Retrieve the stored userData from AsyncStorage
    let userData = await AsyncStorage.getItem('userData');
    
    // If userData doesn't exist, return false
    if (!userData) {
      return false;
    }
    
    // Parse userData into an array
    userData = JSON.parse(userData);
    
    // Search for the user credentials in the userData array
    for (const user of userData) {
      if (user.username === username && user.password === password) {
        return true; // User credentials found
      }
    }
    
    return false; // User credentials not found
  } catch (error) {
    console.error('Error:', error);
    return false; // Return false in case of any errors
  }
}
