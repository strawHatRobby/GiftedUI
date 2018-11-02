import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { GiftedChat  } from 'react-native-gifted-chat';


export default class ChatWindow extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages: []
        };


    }

    componentDidMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: "This is the first step of the tutorial",
                    // text: this.props.msg,
                    createdAt: new Date(),
                    user: {
                        _id: 1,
                        name: "Boto",
                        avatar: "https://cdn-images-1.medium.com/max/1200/0*oz2e-hQtsHOWzoB4."
                    }
                }
            ]
        });
    }

    onSend(messages = []){
        this.setState(prevState => ({
            messages: GiftedChat.append(prevState.messages, messages),
        }))
    }


	render(){
		return(

            <GiftedChat messages={this.state.messages} o
            onSend={messages=>this.onSend(messages)}
            user={{
                _id: 3,
                name: "Yash",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jon_Stewart_MFF_2016.jpg/220px-Jon_Stewart_MFF_2016.jpg"
            }}
            showUserAvatar={true} alwaysShowSend={true} messages={this.state.messages}
            />
			)
	}
}

