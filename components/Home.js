import React from 'react';
import { Component } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
        
    }

    this.loadText = this.loadText.bind(this);
  }
    
    static navigationOptions = {
        title: 'Home',
    }

    loadText = () => {
        let user = this.props.navigation.getParam('user':'');
        if(!user){
            return (<Text>Home view</Text>)
        }else{
            return (<Text>Welcome back {user}</Text>)
        }
    } 

  render(){

    return (
        <View style={styles.container}>
        {this.loadText()}
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
