import React from "react";
import {Text,View, FlatList} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import tailwind from "tailwind-rn";
import { withNavigation } from "react-navigation";


const  AthleteList = () => 
    <View style={tailwind('flex-1 pt-10 py-10')}>
    <FlatList
    showsHorizontalScrollIndicator={false}
    data={[
            {key: 'Lionel Messi'},
            {key: 'Cristiano Ronaldo'},
            {key: 'Kylian Mbappe'}
        ]}
        renderItem={({item}) => {
            return (
                <TouchableOpacity
                onPress={() => console.log('Hello World')}>
                    {/* onPress={() => navigation.navigate('AthleteProfile', { id: item.key })}> */}
                    <Text style={tailwind('p-2 text-xl h-20 mt-2 text-green-600')}>
                        {item.key}
                    </Text>
                </TouchableOpacity> 
            );
        }
    }
        />
       
</View>


export default withNavigation(AthleteList);