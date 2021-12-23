import React, {FC} from 'react';
import {Text, View } from 'react-native';
import tailwind from 'tailwind-rn';
import { Ionicons } from '@expo/vector-icons';
import Constant from './constants';
import Avatar from './Avatar';

type Info = {
    name: string,
    collegeName: string,
    cellno: string

}

const Profile: FC<Info> = (props) => {
    return (
        <View style={tailwind('')}>
            <Constant 
            headline='Profile' />
            <View style={tailwind('bg-black px-3 py-3 rounded m-2')}>
                <Constant 
                headline='Details'/>
                <Text style={tailwind('text-white font-bold')}>{props.name} </Text>
                <Text style={tailwind('text-white')}>{props.collegeName}</Text>
                <Text style={tailwind('text-white')}>
                <Ionicons name="call" size={20} color="red"/>{props.cellno}</Text>
                <Avatar/>
                
            </View>
        </View>

    );
}
    
export default Profile;