import * as React from 'react';
import SingleVillager from '../../villagers/SingleVillager';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AllVillagers from '../../villagers/villagers';


const Stack = createStackNavigator();

export default function AllVillagersStack({navigation}) {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="All Villagers" component={AllVillagers} />
                <Stack.Screen name="Villager" component={SingleVillager} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}