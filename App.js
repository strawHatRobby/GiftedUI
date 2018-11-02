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
      // msgType: '',
      // msgText: ''
    }
    this.socket = SocketIOClient("ws://54.172.50.207")
  }
  typingVal = ''

  
  render() {
  
    const msgData = {
      "user": "rob",
          "channel": "test",
          "text": "Hello",   "type": "message"
      }
    
    const msg = JSON.stringify(msgData);
    const ws = new WebSocket("ws://54.172.50.207")
    ws.onopen = () => {
      ws.send(msg)
    }
    ws.onmessage = (event) => {
      data = JSON.parse(event.data);
      console.log(data);
      // if(data.type==="message"){
      //   this.setState({
      //     msgText: data.text
      //   })
      //   console.log(this.state.msgText);
      }

    }

    ws.onerror = (event) => {
      console.log(event.message);
    }

    ws.onclose = (event) => {
      console.log(event.code, event.reason);
    }

      console.log(this.state.msgType);
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
