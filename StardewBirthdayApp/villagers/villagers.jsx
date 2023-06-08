import * as React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import allVillagers from '../dataObjects/villager-data'


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


    const VillagerCard = ({ name, image, birthDay, birthSeason, gifts }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Villager', {
            name,
            image,
            birthDay,
            birthSeason,
            gifts
            })
        }>
        <View 
            style={styles.villagerCard}
        >
            <Image source={image} />
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
                    <VillagerCard
                     name={item.name}
                     image={item.image}
                     birthSeason={item.birthSeason}
                     birthDay={item.birthDay}
                     gifts={item.gifts}
                    />}
            />
        </SafeAreaView>
    );
}