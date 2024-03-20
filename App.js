import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
        {/*Define our routes*/}
        <Stack.Screen 
        name="Home" 
        component={LoginScreen}
        options={{ headerShown: false }} />
        {/* <Stack.Screen name="About" component={AboutScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
