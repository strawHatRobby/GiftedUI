import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Animation from 'lottie-react-native';

export default class LottieLoader extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.animation.play();
    }

	render(){
        {/* Style components can't take this.props.val */}
        widthVal = this.props.width;
        heightVal = this.props.height;
        flexVal = this.props.flex;
		return(
			<View style={styles.container}>
	            <Animation
            ref={animation => {
                this.animation = animation;
            }}

            style={{
                height: heightVal,
                width: widthVal,
            }}    

            loop={this.props.loop}
            source={this.props.source}
            />
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  }
});

