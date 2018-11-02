import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieLoader from './components/Loading';

import anim from './assets/soda_loader.json'
import quackLoad from './assets/duck_blue_style.json'
import iOSloading from './assets/ios_menu_'
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LottieLoader source={quackLoad} height={300} width={300} loop={true} flex={2}/>
      </View>
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
