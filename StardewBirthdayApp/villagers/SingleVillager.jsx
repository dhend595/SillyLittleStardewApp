import * as React from 'react'
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    Image,
    SafeAreaView,
    Pressable
} from 'react-native';
import allGifts from '../dataObjects/item-data';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: `#0099D0`,
        alignItems: `center`,    
        justifyContent: `center`,
    },
    flatList: {
        marginTop: 10,
        alignItems: `center`,
        flexDirection: 'column',
        justifyContent: `space-between`,
        backgroundColor: `#007aa6`,
        borderRadius: 5,
        padding: 5,
        margin: 5,
        width: 100,
    },
    villagerText: {
        padding: 5,
        fontSize: 16,
        fontWeight: `bold`
    },
    villagerImage: {
        marginTop: 10,
        width: 200,
        height: 200,
        backgroundColor: `#007aa6`,
        borderRadius: 5,
    },
    birthdayContainer: {
        alignItems: `center`,
        justifyContent: `space-between`,
        backgroundColor: `#007aa6`,
        borderRadius: 5,
        padding: 5,
        margin: 5,
        width: 200,
    }
})

const matchingGifts = (gifts) => {
    let giftArray = [];
    gifts.forEach(gift => {
        allGifts.forEach(item => {
            if (gift === item.name) {
                giftArray.push({
                    name: item.name, 
                    image: item.image
                    })
                }
        })
            }
    )
    return giftArray;
}

function SingleVillager({navigation, route}) {
    const giftArray = matchingGifts(route.params.gifts);
    return(
    <SafeAreaView style={styles.container}>
        <Image style={styles.villagerImage}source={route.params.image} />
        <Text style ={{fontSize:24, fontWeight:`bold`,}}>{route.params.name}</Text>
        <View style={styles.birthdayContainer}>
            <Text style ={styles.villagerText}>Birthday</Text>
            <Text style ={styles.villagerText}>Season: {route.params.birthSeason}</Text>
            <Text style ={styles.villagerText}>Day: {route.params.birthDay}</Text>
        </View>
        <Text style ={{fontSize:24, fontWeight:`bold`,}}>Gifts</Text>
        <FlatList
            data={giftArray}
            numColumns={3}
            renderItem={({item}) => 
            <View style={styles.flatList}>
            <Image source={item.image} />
            <Text style={{fontSize:14, fontWeight:`bold`}}>{item.name}</Text>
            </View>
        }
            keyExtractor={item => item.name}
        />
        <Pressable style={{backgroundColor:`#007aa6`, padding:10, borderRadius:5, marginTop:10}} onPress={() => navigation.goBack()}>
            <Text style={{fontSize:18, fontWeight:`bold`}}>Back to Villagers</Text>
        </Pressable>
    </SafeAreaView>
    )
}

export default SingleVillager;