import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView, Button, StyleSheet, TextInput } from 'react-native';
import allVillagers from '../dataObjects/villager-data';



const Calendar = () => {
    const [input, setInput] = useState('')
    const [villager, setVillager] = useState('')
    const [villagers, setVillagers] = useState(allVillagers)

    useEffect(() => {
        const filteredVillagers = allVillagers.filter(villager => {
            return villager.name.toLowerCase().includes(input.toLowerCase())
        })
        setVillagers(filteredVillagers)
    }, [input])

    console.log(villagers)

    const VillagerCard = ({ name, image, birthDay, birthSeason, gifts }) => (
        <View>
            <Text>{name}</Text>
            <Text>{birthDay}</Text>
            <Text>{birthSeason}</Text>
            <Text>{gifts}</Text>
        </View>
    )


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
        }
    })

    return (
        <SafeAreaView >
            <TextInput 
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder='Villager:'></TextInput>
            <Button 
                style={styles.button} 
                title='Search'
                onPress={() => setVillager(villagers[0])}
                ></Button>
            <VillagerCard
                name={villager.name}
                image={villager.image}
                birthDay={villager.birthDay}
                birthSeason={villager.birthSeason}
                gifts={villager.gifts}
            />
        </SafeAreaView>
    )
}



export default Calendar