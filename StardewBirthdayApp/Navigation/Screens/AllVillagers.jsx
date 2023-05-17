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

export default function AllVillagers() {

    const Item = ({ name, image }) => (
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
                    <Item
                     name={item.name}
                    image={item.image}    
                    />}
                // keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}