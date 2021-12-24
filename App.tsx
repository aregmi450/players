// import { createStackNavigator } from "react-navigation-stack";
// import {createAppContainer} from "react-navigation";
// import AthleteProfile from "./screens/AthleteProfileScreen";
// import AthleteList from "./screens/AthleteListScreen";

// const navigator = createStackNavigator({
//   List: AthleteList,
//   Profile: AthleteProfile
// },
// {
//   initialRouteName: 'Profile',
//   defaultNavigationOptions: {
//     title: 'Player List'
//   }
// });
// export default createAppContainer(navigator);



import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AthleteProfile from './screens/AthleteProfileScreen';
import AthleteList from './screens/AthleteListScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//move the stack 
const Stack = createStackNavigator();

 function MainStackNavigator() {
  return (
    <Stack.Navigator headerMode={"none"} initialRouteName='AthleteList'>
      <Stack.Screen name={'AthleteProfile'} component={AthleteProfile} />
      <Stack.Screen name={'AthleteList'} component={AthleteList} />

    </Stack.Navigator>
  );
}

export default function App() {
  return <NavigationContainer>
    <MainStackNavigator/>
  </NavigationContainer>
}



