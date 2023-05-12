import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/Home';
import Saved from './components/Saved';

const Stack = createStackNavigator();

function SillyLittleStardewApp() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Saved" component={Saved} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <SillyLittleStardewApp />
    </NavigationContainer>
  );
}