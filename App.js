import React from 'react';
import { TouchableOpacity, FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {f, auth, database, storage } from './config/config.js'

import feed from './app/screens/feed.js'
import upload from './app/screens/upload.js'
import profile from './app/screens/profile.js'



const TabNavigator = createBottomTabNavigator({
  Feed: feed,
  Upload: upload,
  Profile: profile
});

const MainStack = createAppContainer(TabNavigator)
export default class App extends React.Component{
  
  login = async() => {
    //force user to login
    try{
      let user = await auth.signInWithEmailAndPassword('test@user.com','password');

    }catch(error){
      console.log(error);
    }
  }

  constructor(props){
    super(props);
    this.login();
  }

  render(){
    return(
      <MainStack />
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

