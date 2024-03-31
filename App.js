import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainPage from './screens/MainPage';
import PointsScreen from './screens/PointsScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HistoryScreen from './screens/HistoryScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


// create a bottom tab navigator with icons 
const MainScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Exercise') {
            iconName = focused ? 'fitness' : 'fitness-outline'; 
          } else if (route.name === 'Points') {
            iconName = focused ? 'star' : 'star-outline'; 
          } else if (route.name === 'History') {
            iconName = focused ? 'time' : 'time-outline'; 
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarActiveTintColor="blue"
      tabBarInactiveTintColor="gray"
      tabBarStyle={{
        display: 'flex',
      }}
    >
      <Tab.Screen name="Exercise" component={MainPage} />
      <Tab.Screen name="Points" component={PointsScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
};

// assign the main screens 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreens}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
