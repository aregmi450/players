import React, {FC} from "react";
import { Text,View } from "react-native";
import tailwind from "tailwind-rn";



export default function  Games()  {
return (
    <View style={tailwind('bg-red-400 px-3 py-3 rounded m-2 ')}>
        <Text> 6 Succesful Reports</Text>
        <Text> 12 Events Played </Text>
        <Text> 9 Jersey Number </Text>
    </View>

)
}