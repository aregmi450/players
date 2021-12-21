import React, {FC} from "react";
import { Text, ToastAndroid, View } from "react-native";
import { Card } from "react-native-elements";
import tailwind from "tailwind-rn";


type Props = {
    score: number,
    statFor: string
}
    
export const  props : Props[]= [
    {
        score: 6,
        statFor: 'Successful Reports'
    },
    {
        score: 12,
        statFor: 'Events Played'
    },
    {
        score: 10,
        statFor: 'Jersey Number'
    }
]


const Games: FC<Props> = (props) =>   {
return (
    <View style={tailwind('bg-black px-3 py-3 rounded m-2 ')}>
        <View style={tailwind('flex-row')}>
            <Card containerStyle={tailwind('bg-black h-24 w-24')}>
                <Text style={tailwind('text-red-400 font-bold')}>{props.score}</Text>
                <Text style={tailwind('text-white')}>{props.statFor}</Text>
            </Card>
        </View>
    </View>
);
};




export default Games;