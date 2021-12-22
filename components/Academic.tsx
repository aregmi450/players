import React, {FC} from "react";
import {Text, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import tailwind from "tailwind-rn";

type AcademicDetails = {
    schoolName: string,
    gpa: number
}

const Academic: FC<AcademicDetails> = (props) => {
    return (
        <View style={tailwind('bg-black px-3 py-3 rounded m-2')}>
            <Text style={tailwind('flex-row m-2 text-white') }> High School </Text>
            <Text style={tailwind('text-white m-2 ')}>
                <Ionicons name="school" size={20} color="grey" style={tailwind('p-2')} /> {props.schoolName}
            </Text>
            <Text style={tailwind('text-white m-2 ')}>
                <Ionicons name="document-text" size={20} color="grey"/>{props.gpa}
            </Text>

        
            {/* <Text style={tailwind('p-2 text-black flex-row ')}>J.J Thompson School</Text> */}
        </View>
    )
}

export default Academic; 