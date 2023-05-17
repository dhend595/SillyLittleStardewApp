import * as React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image
} from 'react-native';
import allVillagers from '../../Villagers/villager-data';
const AbigailImage = require('../../assets/villagers/Abigail.png')

export default function AllVillagers() {

    // const DATA = allVillagers;
    console.log(allVillagers);

    const Item = ({ name, image }) => (
        console.log(name),
        <View>
            <Image source={image} />
            <Text>{name}</Text>
        </View>
    );

    return (
        <SafeAreaView>
            <FlatList
                data={allVillagers}
                renderItem={({ item }) =>
                    <Item name={item.name}
                        image={item.image} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}