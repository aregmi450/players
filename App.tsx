import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';
import { Ionicons } from '@expo/vector-icons';
import {Icon } from 'react-native-elements';
import Profile from './Profile';
import Games from './Games';
import Stats from './Stats';

export default function App() {
  return (
    <View style={styles.container}>
      <Profile/>

      <Games/>

      <View style={tailwind('flex-row items-center pl-5')}>
        <Ionicons name="person" size={24} color="black" />
        <Text style={tailwind('p-2 text-blue-400 font-bold')}>Athlete Stats</Text>
      </View>

      <Stats />
      
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
