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
            flexDirection: 'Column',
            backgroundColor: `#0099D0`,
            alignItems: `center`,
            justifyContent: `center`,
        },
        flatList: {
            // flexDirection: 'row',
            // numColumns: 5,
            justifyContent: `space-around`,
        },
        villagerCard: {
            width: 175,
            height: 175,
            backgroundColor: `#007aa6`,
            borderRadius: 5,
            justifyContent: `center`,
            margin: 10,
            alignItems: `center`,
        },
        villagerText: {
            paddingTop: 10,
            fontSize: 18,
            fontWeight: `bold`
        },
        headerText: {
            fontSize: 30,
            fontWeight: `bold`,
            textAlign: `center`
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
            <Text style={styles.headerText}>All Villagers</Text>
            <FlatList
                horizontal={false}
                numColumns={2}
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