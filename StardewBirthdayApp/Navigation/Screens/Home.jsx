import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AllVillagers from '../../villagers/villagers';
import SingleVillager from '../../villagers/SingleVillager';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

export default function HomeScreen({ navigation}) {
    return (
        // <NavigationContainer independent={true}>
        //     <Stack.Navigator
        //         screenOptions={{
        //             headerShown: false
        //         }}>
        //         <Stack.Screen name="All Villagers" component={AllVillagers} />
        //         <Stack.Screen name="Villager" component={SingleVillager} />
        //     </Stack.Navigator>
        // </NavigationContainer>
        <SafeAreaView>
            <Text>Home Screen</Text>
        </SafeAreaView>
    )
}