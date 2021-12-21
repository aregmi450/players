import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';
import { Ionicons } from '@expo/vector-icons';
import {Icon } from 'react-native-elements';
import Profile from './components/Profile';
import Games from './components/Games';
import Stats from './components/Stats';
import Academic from './components/Academic';
import {props} from './components/Games'

export default function App() {
  return (
    <View style={styles.container}>
      <Profile/>

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
      <Academic />
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
});
