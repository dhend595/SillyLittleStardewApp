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


const CalanderDropDown = () => {

    const [day, setDay] = React.useState(0);
    const [month, setMonth] = React.useState(0);

return (
    <View>
        <Text>Day</Text>
        <Text>Month</Text>
    </View>
)
}