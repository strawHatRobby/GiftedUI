import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import ChatWindow from './components/ChatWindow';
import WS from './components/WS';
import SocketIOClient from 'socket.io-client';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isTyping: false,
      isSocketOpen: false,
      msgType: '',
      msgText:''
    }
    this.socket = new WebSocket("ws://54.172.50.207");
    this.emit = this.emit.bind(this)
  }

  emit() {
    this.setState(prevState => ({isSocketOpen : !prevState.isSocketOpen}))
    this.socket.send(JSON.stringify(this.state.msgText))
  }

  componentDidMount() {
    msgData = {
      "user": "rob",
          "channel": "test",
          "text": "Hello",   "type": "message"
      }

    this.socket.onopen = () => {
      console.log("Sending data")
      this.socket.send(JSON.stringify(msgData))
    }
    this.socket.onmessage = (event) => {
      if(JSON.parse(event.data).type==="message" ){
      data = JSON.parse(event.data).text
      
      this.setState( {
        msgText: data
      })
      }

      if(JSON.parse(event.data).text){
      console.log(JSON.parse(event.data).type)
      console.log("The event type is " + this.state.msgText)
      }
    }
    this.socket.onerror = (event) => console.log(event.message)
  }

  
  render() {
    
    
    

    

    // ws.onerror = (event) => {
    //   console.log(event.message);
    // }

    // ws.onclose = (event) => {
    //   console.log(event.code, event.reason);
    // }


    changeText = () => {
      if(this.state.isTyping){
        return <Text>You can type</Text>
      }
      if(!this.state.isTyping){
        return <Text>Hey!</Text>
      }
    }
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>

        {/* <ChatWindow msg={this.state.msgText}/> */}
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
