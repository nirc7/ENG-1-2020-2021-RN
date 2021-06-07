import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, Vibration, View, Dimensions, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      picUri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
    };
  }

  async componentDidMount() {
    const { status } = await Camera.requestPermissionsAsync();
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  btnPic = async () => {
    debugger;
    let photo = await this.camera.takePictureAsync({quality :0.03});
    console.log(photo.uri);
    console.log(photo.width);
    console.log(photo.height);
    
    this.setState({ picUri: photo.uri });
    Vibration.vibrate();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Camera App!</Text>

        <Camera
          style={{ width: windowWidth * 0.9, height: windowHeight / 3 }}
          ref={ref => { this.camera = ref; }}
          type={this.state.type}>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.setState({
                  type: this.state.type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
                }, () => console.log('after', this.state.type));
              }}>
              <Text style={styles.text}> Flip </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={this.btnPic}>
              <Text style={styles.text}> Snap </Text>
            </TouchableOpacity>
          </View>

        </Camera>

        <Button title="take a picture" onPress={this.btnPic} />
        <Button title="swap" onPress={() => {
          console.log('before= ', this.state.type);
          this.setState({
            type: this.state.type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
          }, () => console.log('after', this.state.type));
        }} />

        <Image
          style={{ width: windowWidth * 0.7, height: windowHeight / 3 }}
          source={{ uri: this.state.picUri }}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 50,
    height: 50
  },
  button: {
    color: 'white'
  },
  text: { color: 'white' }
});
