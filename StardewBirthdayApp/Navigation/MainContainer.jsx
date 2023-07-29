import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './Screens/Home'
import AllVillagersStack from './Screens/Villagers';
import SavedVillagers from './Screens/Saved';

//Screen names
const home = "Home";
const villagers = "Villagers";
const saved = "Saved";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
      <Tab.Navigator
        initialRouteName={home}
        screenOptions={
          ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let routeName = route.name;

            if (routeName === home) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (routeName === villagers) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (routeName === saved) {
              iconName = focused ? 'heart' : 'heart-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>

        <Tab.Screen name={home} component={HomeScreen} options={{
          headerShown: false,
        }}/>
        <Tab.Screen name={villagers} component={AllVillagersStack} options={{
          headerShown: false,
        }}
        />
        <Tab.Screen name={saved} component={SavedVillagers} options={{
          headerShown: false,
        }}/>

      </Tab.Navigator>
  );

}

export default MainContainer;