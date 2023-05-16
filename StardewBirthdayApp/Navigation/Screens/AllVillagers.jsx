import * as React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import allVillagers from '../../Villagers/villager-data';
const AbigailImage = require('../../assets/villagers/Abigail.png')

export default function AllVillagers({ navigation }) {

    console.log(allVillagers[0].image)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Villagers</Text>
            {/* <Image source={{uri: `${AbigailImage}`}}/> */}
            <Image source={AbigailImage}
                style={{width: 150, height: 150}} />
                <Image source={AbigailImage}
                style={{width: 400, height: 400}} />
        </View>
    );
}