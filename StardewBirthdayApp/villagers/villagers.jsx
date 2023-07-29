import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    Button,
    TextInput
} from 'react-native';
import allVillagers from '../dataObjects/villager-data'
// import VillagerSearch from './VillagerSearch';


export default function AllVillagers({navigation}) {

    const styles = StyleSheet.create({
        searchView: {
            display: 'flex',
            flexDirection: 'row'
        },
        input: {
            backgroundColor: 'white',
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10, 
        },
        button: {
            backgroundColor: 'white' ,
            color: 'black'
        },
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

    const VillagerSearch = () => {
        const [input, setInput] = useState('')
        const [villager, setVillager] = useState({})
        const [villagers, setVillagers] = useState(allVillagers)
        
        console.log(villager)

        useEffect(() => {
            const filteredVillagers = allVillagers.filter(villager => {
                return villager.name.toLowerCase().includes(input.toLowerCase())
            })
            setVillagers(filteredVillagers)
        }, [input])

        return (
            <View style={styles.searchView}>
                <TextInput
                    style={styles.input}
                    onChangeText={setInput}
                    value={input}
                    placeholder="Search Villagers"
                />
                <Button
                    style={styles.button}
                    title="Search"
                    onPress={() => {
                        setVillager(villagers.find(villager => villager.name === input))
                        setInput('')
                    }}
                />
                <VillagerCard 
                    name={villager.name}
                    image={villager.image}
                    birthDay={villager.birthDay}
                    birthSeason={villager.birthSeason}
                    gifts={villager.gifts}
                />
            </View>
        )
    }


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
            <VillagerSearch />
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