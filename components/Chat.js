import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Chat extends Component {
  constructor(props){
    super(props);
    this.state = {
        
    }
  }

  render(){
    return (
        <View style={styles.container}>
        <Text>
            Chat view
        </Text>
        </View>
    )
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

export default Chat;
