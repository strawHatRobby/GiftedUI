import React from 'react';
import { Component } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
        
    }
  }

  render(){
    return (
        <View style={styles.container}>
        <Text>
            Home view
        </Text>
        <Button 
            title="Lets Chat"
            onPress={() => this.props.navigation.navigate('Second')}
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

export default Home;
