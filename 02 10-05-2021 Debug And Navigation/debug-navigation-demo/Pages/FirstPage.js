import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLbl: false
    };
  }

  btnSayHello = () => {
    debugger;
    let num = 7;
    console.log(1);
    num++;
    this.setState({
      showLbl: true,
      num
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>Debug and Navigation Demo!</Text>
        <Button title="Say Hello" onPress={this.btnSayHello} />
        <View style={{ margin: 20 }}>
          <Button title="go 2 SeconP" onPress={() => {
            //this.props.navigation.navigate('SecondPage');
            this.props.navigation.navigate('SecondPage', { user: 'Lucy ' + new Date().getSeconds() });
          }} />
        </View>
        <View style={{ margin: 10 }}>
          <Button title="go 2 TabP" onPress={() => { this.props.navigation.navigate('MaterialTabbedPageNavigator'); }} />
        </View>

        <TouchableOpacity onPress={this.btnSayHello}>
          <View style={{
            borderRadius: 55,
            backgroundColor: 'gray',
            borderWidth: 5,
            margin: 20,
            padding: 20
          }} >
            <Text style={{ color: 'green', fontSize: 30 }}>TO</Text>
          </View>
        </TouchableOpacity>
        <View style={{ margin: 10 }}>
          <Button title="open Drawer" onPress={() => { this.props.navigation.openDrawer(); }} />
        </View>
        <View style={{ margin: 10 }}>
          <Button title="focus listner" onPress={() => { this.props.navigation.navigate('ThirdPage'); }} />
        </View>
        {this.state.showLbl && <Text>Hello World {this.state.num}</Text>}
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
});
