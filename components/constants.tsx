import React, {FC} from 'react';
import { Text, View } from 'react-native';
import tailwind from 'tailwind-rn';


type Topic = {
    headline: string,
}
const Constant: FC<Topic> = ({headline}) => {
    return (
        <View> 
            <Text style={tailwind('p-2 text-white font-bold')}> Athlete {headline}</Text>
        </View>
    )
} 


export default Constant; 