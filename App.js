import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import ChatWindow from './components/ChatWindow';

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ChatWindow/>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
