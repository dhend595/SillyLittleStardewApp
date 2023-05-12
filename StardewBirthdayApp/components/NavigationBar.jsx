import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home"/>
      <Tab.Screen name="Saved"/>
    </Tab.Navigator>
  );
}

export default MyTabs