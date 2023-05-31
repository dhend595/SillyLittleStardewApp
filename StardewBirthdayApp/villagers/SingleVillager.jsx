import * as React from 'react'
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image,
    Button
} from 'react-native';
import allGifts from '../dataObjects/item-data';


export default function SingleVillager({navigation, villagerName, villagerImage}) {
    console.log(route.params.villagerImage)
    return(
    <View>
        <Text>Working</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    )
}