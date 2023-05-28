import * as React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image,
    TouchableOpacity
} from 'react-native';
import SingleVillager from './SingleVillager';
import allVillagers from '../../Villagers/villager-data';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function AllVillagers({navigation}) {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            backgroundColor: `#0099D0`,
        },
        flatList: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: `space-around`
        },
        villagerCard: {
            backgroundColor: `#007aa6`,
            borderRadius: 5,
            justifyContent: `center`,
            marginTop: 5,
            alignItems: `center`,
        },
        villagerText: {
            padding: 5,
            fontSize: 18,
            fontWeight: `bold`
        }
    })

    const VillagerStack = createStackNavigator()

    // function MyStack() {
    //     return (
    //       <Stack.Navigator>
    //         <Stack.Screen name="Villager" component={} />
    //       </Stack.Navigator>
    //     );
    //   }

    const Item = ({ name, image }) => (
        <TouchableOpacity onPress={() => navigation.navigate('villager')}>
        <View 
            style={styles.villagerCard}
        >
            <Image source={image} 
                    onPress={() => console.log('Details')}
            />
            <Text style={styles.villagerText}>{name}</Text>
        </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                contentContainerStyle={styles.flatList}
                data={allVillagers}
                renderItem={({ item }) =>
                    <Item
                     name={item.name}
                    image={item.image}
                    />}
            />
        </SafeAreaView>
    );
}