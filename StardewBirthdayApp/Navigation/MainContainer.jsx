import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './Screens/Home'
import AllVillagers from './Screens/AllVillagers';
import SavedVillagers from './Screens/Saved';

//Screen names
const home = "Home";
const villagers = "All";
const saved = "Saved";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={home}
        screenOptions={({ route }) => ({
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

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#59C9F1',
          inactiveTintColor: '#B52121',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { paddingTop: 5, height: 80}
        }}>

        <Tab.Screen name={home} component={HomeScreen} />
        <Tab.Screen name={villagers} component={AllVillagers} />
        <Tab.Screen name={saved} component={SavedVillagers} />

      </Tab.Navigator>
    </NavigationContainer>
  );

  const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'row'
    },
})

}

export default MainContainer;