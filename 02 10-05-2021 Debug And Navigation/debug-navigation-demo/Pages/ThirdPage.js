import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ThirdPage extends Component {

  componentDidMount() {
    this._unsubscribeFocus = this.props.navigation.addListener('focus', (payload) => {
      console.log('will focus', payload);
      this.setState({ stam: 'will focus ' + new Date().getSeconds() });
    });
  }

  componentWillUnmount() {
    this._unsubscribeFocus();
  }

  render() {
    return (
      <View  style={styles.container}>
        <Text> ThirdPage </Text>
        <Text> {this.state != null ? this.state.stam : '...'}</Text>
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