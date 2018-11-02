import React, { Component } from 'react';
import WS from 'react-native-websocket';
const msgData = {
  "user": "rob",
      "channel": "test",
      "text": "Hello",   "type": "message"
  }

  const msg = JSON.stringify(msgData)
class WebSock extends Component {
  constructor(props){
    super(props);
    this.state = {
    dataReturned : []      
    }
  }

  render(){
      this.state.dataReturned.map((data) => {
        console.log(`Data returned is ${ data.target}`)
      })

    return (
        <WS
          ref={ref => {this.ws = ref}}
          url="ws://54.172.50.207:3000"
          onOpen={() => {
            console.log('Websock Open!')
            this.ws.send(msg)
          }}
        // onMessage={console.log}
        onMessage={(data) => this.setState(prevState => ({
            dataReturned: [...prevState.dataReturned, data]
        }))
        }
          onError={console.log}
          onClose={console.log}
          reconnect // Will try to reconnect onClose
        />

    )
  }

}

export default WebSock;
