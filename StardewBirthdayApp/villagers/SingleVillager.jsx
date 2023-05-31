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

const matchingGifts = (gifts) => {
    console.log(gifts)
    let giftArray = [];
    gifts.forEach(gift => {
        console.log(gift)
        allGifts.forEach(item => {
            // console.log(item)
            if (gift === item.name) {
                giftArray.push(item.image)
            }
        })
    })
    return giftArray;
}

function SingleVillager({navigation, route}) {
    const giftArray = matchingGifts(route.params.gifts);
    console.log(giftArray)
    return(
    <View>
        <Image source={route.params.image} />
        <Text>{route.params.name}</Text>
        <View>
            <Text>Season: {route.params.birthSeason}</Text>
            <Text>Day: {route.params.birthDay}</Text>
        </View>
        <Text>{route.params.gifts}</Text>
        <FlatList
            data={giftArray}
            renderItem={({item}) => <Image source={item} />}
            keyExtractor={item => item.name}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    )
}

export default SingleVillager;