import * as React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import AbigailImage from '../../assets/villagers/Abigail.png'

export default function AllVillagers({ navigation }) {

    // const [villagers, setVillagers] = useState([])

    const image = {uri: 'https://reactjs.org/logo-og.png'};


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Villagers</Text>
            <ImageBackground source={image}></ImageBackground>
        </View>
    );
}