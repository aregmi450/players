import React from "react";
import {Text,View, FlatList} from "react-native";
import tailwind from "tailwind-rn";


const  AthleteList = () => 
    <View style={tailwind('flex-1 pt-10 py-10')}>
    <FlatList
        data={[
            {key: 'Lionel Messi'},
            {key: 'Cristiano Ronaldo'}
        ]}
        renderItem={({item}) => 
        <Text style={tailwind('p-2 text-xl h-20 mt-2')}>
        {item.key}
        </Text>}
        />
</View>


export default AthleteList;