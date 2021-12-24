import React , {FC} from "react";
import {Text, View} from 'react-native';
import tailwind from "tailwind-rn";
import {MaterialCommunityIcons } from '@expo/vector-icons';

type Attribute = {
    height: number,
    weight: number,
    posPrimary: string,
    posSecondary: string
}


const Stats: FC<Attribute> = ({height, weight, posPrimary, posSecondary}) => {
    return (
        <View style={tailwind('bg-black content-center m-2 p-2 rounded')}>
            
            <View style={tailwind('flex-row')} ></View>

            <View style={tailwind('flex-row')} >
            <Text style={tailwind('flex-row m-2 text-white')}>Height </Text>
            <Text style={tailwind(' text-white p-2')}><MaterialCommunityIcons name="human-male-height" size={16} color="grey"/> {height} </Text>

            <Text style={tailwind('flex-row m-2 text-white')}>Weight </Text>
            <Text style={tailwind(' text-white p-2')}><MaterialCommunityIcons name="weight-pound" size={16} color="grey" /> {weight} </Text>
            </View>

            <View style={tailwind('flex-row')} >
            <Text style={tailwind('flex-row m-2 text-white')}> Primary Position </Text>
            <Text style={tailwind('text-white m-2')}> <MaterialCommunityIcons name="podium-gold" size={16} color="grey"/> 
            {posPrimary}
            </Text>

            <Text style={tailwind('flex-row m-2 text-white')}> Secondary Position </Text>
            <Text style={tailwind('text-white m-2')}> <MaterialCommunityIcons name="podium-silver" size={16} color="grey" />
             {posSecondary}
            </Text>
            </View>
            
        </View>
    )
}


export default Stats;