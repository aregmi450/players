import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';
import { Avatar } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={tailwind('text-blue-800 font-bold m-5')}>Athelete Profile </Text>

      <View style={tailwind('bg-black px-3 py-3 rounded m-2')}>
        <Text style={tailwind('text-white')}>Lionel Messi </Text>
        <Text style={tailwind('text-white')}>Miami State College</Text>
        <Text style={tailwind('text-white')}>+977-95403232634</Text>
        {/* <Avatar avatarStyle={tailwind('content-end')} rounded source ={{
          uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', 
        }} /> */}
      </View>

      <View style={tailwind('bg-red-400 px-3 py-3 rounded m-2 ')}>
        <Text> 6 Succesful Reports</Text>
        <Text> 12 Events Played </Text>
        <Text> 9 Jersey Number </Text>
      </View>

      <Text>Athlete Stats</Text>

      <View style={styles.three}> 
        <Text>Height 5'11''</Text>
        <Text>Weight 170 </Text>
        <Text>Primary Position</Text>
        <Text>Secondary Position</Text>
      </View>

      


      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    flex: 1,
    marginTop: 35
  },
  one: {
    backgroundColor: 'teal',
    alignContent: 'center',
    marginBottom: 20,
    flex: 1
  },
  two:{
    backgroundColor: "red",
    alignContent: "center",
    marginBottom:20,
    flex: 1
  },
  three: {
    backgroundColor: "purple",
    alignContent: "center",
    marginTop: 15,
    flex:1
  },
});
