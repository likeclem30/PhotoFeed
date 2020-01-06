import React from 'react';
import { TouchableOpacity, FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {f, auth, database, storage } from './config/config.js'

import feed from './app/screens/feed.js'
import upload from './app/screens/upload.js'
import profile from './app/screens/profile.js'
import userProfile from './app/screens/userProfile.js'
import comments from './app/screens/comments.js'



const TabStack = createBottomTabNavigator({
  Feed: feed,
  Upload: upload,
  Profile: profile
});

const BottomTabStack = createAppContainer(TabStack)

const MainStack = createStackNavigator(
  {
    Home: {screen: BottomTabStack },
    User: {screen: userProfile },
    Comments: {screen: comments }
  },
  {
    initialRouteName:'Home',
    mode: 'modal',
    headerMode:'none',
  }
)

const MainStackContainer = createAppContainer(MainStack)
export default class App extends React.Component{
  
  

  constructor(props){
    super(props);
  }

  render(){
    return(
      <MainStackContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//export default createAppContainer(TabNavigator);

