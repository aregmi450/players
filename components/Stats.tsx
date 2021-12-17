import React from "react";
import {Text, View, StyleSheet} from 'react-native';
import tailwind from "tailwind-rn";
import { Ionicons } from '@expo/vector-icons';
const Stats = () => {
    return (
        <View style={tailwind('bg-red-400 content-center m-2 p-2 rounded')}>
            
            <Text>Height  5' <Ionicons name="person" size={14} color="black" /> 11''</Text>
            <Text>Weight 170 </Text>
            <Text>Primary Position ST </Text>
            <Text>Secondary Position CAM</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    three: {
        backgroundColor: "purple",
        alignContent: "center",
        marginTop: 15,
        flex: 1
    },
})

export default Stats;