import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';
import { Ionicons } from '@expo/vector-icons';
import Profile from './components/Profile';
import Games from './components/Games';
import Stats from './components/Stats';
import Academic from './components/Academic';


export default function App() {
  return (
    <View style={styles.container}>
      <Profile
      name='Lionel Messi'
      collegeName='Miami State College'
      cellno='+977-9846503254'/>

      <Games
      score= {6}
      statFor='Succesful Reports'
      />

      <View style={tailwind('flex-row items-center pl-5')}>
        <Ionicons name="person" size={24} color="black" />
        <Text style={tailwind('p-2 text-blue-400 font-bold')}>Athlete Stats</Text>
      </View>

      <Stats />
      <View style={tailwind('flex-row items-center pl-5')}>
      <Ionicons name="newspaper" size={24} color="black" />
      <Text style={tailwind('p-2 text-blue-400 font-bold')}>Athlete Academics</Text>
      </View>
      <Academic
      schoolName='Ullens School'
      actScore={3}
      satScore={5.5}
      gpa={4.5} 
      gradYear={2021}
      />
      <StatusBar style="auto" />
    </View>

 
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
});
