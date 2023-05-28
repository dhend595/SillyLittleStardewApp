import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainContainer from './Navigation/MainContainer';
import HomeScreen from './Navigation/Screens/Home';
import Saved from './Navigation/Screens/Saved';
import Search from './Search/Search'

// const Stack = createStackNavigator();

// function SillyLittleStardewApp() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Saved" component={Saved} />
//     </Stack.Navigator>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Screen
        name="home"
        component={MainContainer}
        options={{ headerShown: false}}
      /> */}
    <MainContainer/>
    </NavigationContainer>
  );
}