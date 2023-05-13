import React, {useState, useEffect} from 'react'
import { SafeAreaView, Button, StyleSheet, TextInput } from 'react-native';


const Calendar = () => {
    const [input, setInput] = useState('')

    return (
        <SafeAreaView >
            <TextInput 
            style={styles.input}
            value={input}
            placeholder='Villager:'></TextInput>
            <Button 
            style={styles.button}
            title='Submit'></Button>
        </SafeAreaView>
    )
}

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


export default Calendar