import React from 'react';
import { Component } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

class Chat extends Component {
  constructor(props){
    super(props);
    this.state = {
        
    }
  }

    static navigationOptions  = {
        title: 'Chat',
    };

  render(){
    return (
        <View style={styles.container}>
        <Text>
            Chat view
        </Text>
        <Button 
            title="Take me Home"
        onPress={() => this.props.navigation.navigate('First', {
            itemId: 1,
            user: "Robin"
        })
        }
        />
        <Button 
            title="Lets Chat Some More"
            onPress={() => this.props.navigation.push('Second')}
        />
        <Button 
            title="Go Back"
            onPress={() => this.props.navigation.goBack()}
        />

        <Button 
            title="Go to First Page"
            onPress={() => this.props.navigation.popToTop()}
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
