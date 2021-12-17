import React from "react";
import {Text, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import tailwind from "tailwind-rn";

const Academic = () => {
    return (
        <View style={tailwind('bg-blue-400 px-3 py-3 rounded m-2')}>
            <Text style={tailwind('flex-row m-2') }> School </Text>
            <Text style={tailwind('text-black m-2 ')}>
                <Ionicons name="school" size={20} color="black" style={tailwind('flex-row')} /> J.J Thomas
            </Text>
            <Text style={tailwind('text-black m-2 ')}>
                <Ionicons name="document-text" size={20} color="black"/> 4.5 
            </Text>

        
            {/* <Text style={tailwind('p-2 text-black flex-row ')}>J.J Thompson School</Text> */}
        </View>
    )
}

export default Academic; 