import React, {FC} from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import tailwind from "tailwind-rn";


type Props = {
    score1: number,
    score2: number,
    score3: number
}


const Games: FC<Props> = (props) =>   {
return (
    <View style={tailwind('bg-black px-3 py-3 rounded m-2 ')}>
        <View style={tailwind('flex-row')}>

            <Card containerStyle={tailwind('bg-black h-24 w-24')}>
                <Text style={tailwind('text-red-400 text-lg font-bold text-center')}>
                    {props.score1}
                    </Text>
                <Text style={tailwind('text-white text-base text-sm')}>
                    Succesful Reports 
                    </Text>
            </Card>

            <Card 
            containerStyle={tailwind('bg-black h-24 w-24 ')}>
            <Text 
            style={tailwind('text-red-400 text-lg font-bold text-center')}>
                {props.score2}
                </Text>
                <Text 
                style={tailwind('text-white text-sm text-center')}>
                    Events Played 
                    </Text>
            </Card>

            <Card containerStyle={tailwind('bg-black h-24 w-24')}>
            <Text style={tailwind('text-red-400 text-lg font-bold text-center')}>
                {props.score3}</Text>
            <Text style={tailwind('text-white text-sm text-center')}>
                Jersey Number </Text>
            </Card>

        </View>
    </View>
);
};


export default Games;