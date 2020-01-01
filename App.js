import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import feed from './app/screens/feed.js'
import upload from './app/screens/upload.js'
import profile from './app/screens/profile.js'



const TabNavigator = createBottomTabNavigator({
  Feed: feed,
  Upload: upload,
  Profile: profile
});
export default createAppContainer(TabNavigator);

