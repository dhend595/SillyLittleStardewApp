import * as React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import AbigailImage from '../../assets/villagers/Abigail.png'

export default function AllVillagers({ navigation }) {

    // const [villagers, setVillagers] = useState([])

    const image = {
        uri: 'StardewBirthdayApp/assets/villagers/Abigail.png',
        width: 64,
        height: 64,
    };


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Villagers</Text>
            {/* <Image source={{uri: `${AbigailImage}`}}/> */}
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 400, height: 400}} />
        </View>
    );
}