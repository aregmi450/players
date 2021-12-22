import { StatusBar } from 'expo-status-bar';
import React, {FC} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';


type Info = {
    name: string,
    collegeName: string,
    cellno: string

}

const Profile: FC<Info> = (props) => {
    return (
        <View>
            <Text style={tailwind('text-blue-800 font-bold m-5')}>Athelete Profile </Text>
            <View style={tailwind('bg-black px-3 py-3 rounded m-2')}>
                <Text style={tailwind('text-white pb-2')}>About Athlete</Text>
                <Text style={tailwind('text-white font-bold')}>{props.name} </Text>
                <Text style={tailwind('text-white')}>{props.collegeName}</Text>
                <Text style={tailwind('text-white')}>
                    <Ionicons name="call" size={16} color="red" />{props.cellno}</Text>
                {/* <Avatar avatarStyle={tailwind('content-end')} rounded source ={{
          uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', 
        }} /> */}
            </View>
        </View>

    );
}
    
export default Profile;