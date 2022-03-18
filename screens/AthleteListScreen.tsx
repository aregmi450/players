import React from "react";
import {Text,View, FlatList} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import tailwind from "tailwind-rn";
import { useNavigation } from "@react-navigation/native";

// type Player = {
//     name: string
// }

const  AthleteList = () => {
const navigation = useNavigation();


    return (
        <View style={tailwind('flex-1 pt-10 py-10')}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={[
                    {
                        name: 'MESSI',
                    }
                ]}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                        onPress={() => navigation.navigate('AthleteProfile', {id: item.name})}>
                            <Text style={tailwind('p-2 text-xl h-20 mt-2 text-green-600')}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    );
                }
            }
            />
        </View>
    )
}

   

export default (AthleteList);