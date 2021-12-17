import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';

export default function Profile() {
    return (
    <View>
            <Text style={tailwind('text-blue-800 font-bold m-5')}>Athelete Profile </Text>
            <View style={tailwind('bg-black px-3 py-3 rounded m-2')}>
                <Text style={tailwind('text-white pb-2')}>About Athlete</Text>
                <Text style={tailwind('text-white font-bold')}>Lionel Messi </Text>
                <Text style={tailwind('text-white')}>Miami State College</Text>
                <Ionicons name="person" size={24} color="white"></Ionicons>
                <Text style={tailwind('text-white')}>+977-95403232634</Text>
                {/* <Avatar avatarStyle={tailwind('content-end')} rounded source ={{
          uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', 
        }} /> */}
            </View>
    </View>
    
    );
}