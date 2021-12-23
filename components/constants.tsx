import React, {FC} from 'react';
import { Text, View } from 'react-native';
import tailwind from 'tailwind-rn';


type Topic = {
    headline: string,
}
const Constant: FC<Topic> = (props) => {
    return (
        <View> 
            <Text style={tailwind('p-2 text-white font-bold')}> Athlete {props.headline}</Text>
        </View>
    )
} 


export default Constant; 