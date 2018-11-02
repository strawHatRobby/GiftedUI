import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home'
import Chat from './components/Chat'
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
    {
        First: Home,
        Second: Chat,

    },
    {
    initalRouteName: 'Second',
    }
);

export default class App extends React.Component {
  render() {
    return (

        <RootStack/>
    );
  }
}



