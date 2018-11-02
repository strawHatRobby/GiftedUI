import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home'
import Chat from './components/Chat'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';


const RootStack = createStackNavigator(
    {
        First: Home,
        Second: Chat,

    },
    {
    initialRouteName: 'First',
    }
);

export default class App extends React.Component {
  render() {
    return (

        <RootStack/>
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

