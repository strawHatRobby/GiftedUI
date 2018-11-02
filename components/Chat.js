import React from 'react';
import { Component } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

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
        <Button 
            title="Take me Home"
            onPress={() => this.props.navigation.navigate('First')}
        />
        <Button 
            title="Lets Chat Some More"
            onPress={() => this.props.navigation.push('Second')}
        />
        <Button 
            title="Go Back"
            onPress={() => this.props.navigation.goBack()}
        />
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
