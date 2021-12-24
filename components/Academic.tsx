import React, {FC} from "react";
import {Text, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import tailwind from "tailwind-rn";

type AcademicDetails = {
    schoolName: string,
    gpa: number,
    actScore: number,
    satScore: number,
    gradYear: number
}

const Academic: FC<AcademicDetails> = ({schoolName, actScore, satScore, gpa, gradYear}) => 
        <View style={tailwind('bg-black px-3 py-3 rounded m-2')}>
            
            <Text style={tailwind('flex-row m-2 text-white') }> High School </Text>
            <Text style={tailwind('text-white m-2')}>
                <Ionicons name="school" size={20} color="grey" style={tailwind('p-2')} /> {schoolName}
            </Text>


            <View style={tailwind('flex-row')} >
            <Text style={tailwind('flex-row m-2 text-white')}> ACT Score </Text>
            <Text style={tailwind('text-white m-2 ')}>
                <Ionicons name="document-text" size={20} color="grey"/>{actScore}
            </Text>

            <Text style={tailwind('flex-row m-2 text-white')}> SAT Score </Text>
            <Text style={tailwind('text-white m-2 ')}>
                <Ionicons name="document-text" size={20} color="grey" />{satScore}
            </Text>

            </View>

            <View style={tailwind('flex-row')} >
            <Text style={tailwind('flex-row m-2 text-white')}> GPA </Text>
            <Text style={tailwind('text-white m-2 ')}>
                <Ionicons name="document-text" size={20} color="grey" style={tailwind('')} />{gpa}
            </Text>

            <Text style={tailwind('flex-row m-2 text-white')}> Graduation Year </Text>
            <Text style={tailwind('text-white m-2 ')}>
                <Ionicons name="school" size={20} color="grey" />{gradYear}
            </Text>
            </View>
        
        </View>

export default Academic; 