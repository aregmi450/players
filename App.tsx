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
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import AthleteProfile from './screens/AthleteProfileScreen';
import AthleteList from './screens/AthleteListScreen';


const navigator = createStackNavigator({
  AthleteProfile: AthleteProfile,
  AthleteList: AthleteList,
}, {
  initialRouteName: 'AthleteList',
  defaultNavigationOptions: {
    title: "Athlete List",
  }
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <AthleteList />
  )
};