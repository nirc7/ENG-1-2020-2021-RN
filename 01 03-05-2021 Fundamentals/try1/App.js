import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, Text, View } from 'react-native';

import { Button as ButtonElements } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showLabel: false };
  }

  btnLogin = () => {
    //alert(1);
    //console.log(1);
    if (this.state.num === '123') {
      this.setState({ showLabel: true });
    }
    else
      this.setState({ showLabel: false });
  }

  render() {
    console.log(this.state != null ? this.state.num : 'empty');
    return (
      <View style={styles.container}>
        <Text style={styles.Txt}>Hello World!</Text>
        <Text style={{ color: 'green' }}>nir</Text>

        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ num: text })}
          placeholder="enter ur number"
          keyboardType="numeric"
        />

        <View style={{ margin: 20 }}>
          <Button
            title="Login"
            onPress={this.btnLogin} />
        </View>

        {this.state.showLabel && <Text style={{ color: 'green', fontSize: 30 }}>logged in!</Text>}
        { !this.state.showLabel && <Text style={{ color: 'red', fontSize: 30 }}>not logged in!</Text>}

        <ButtonElements
          icon={
            <Icon
              name="arrow-left"
              size={17}
              color="green"
            />
          }
          iconRight
          title=" icon component "
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
    justifyContent: 'flex-start',
    marginTop: 20,
    marginRight: 10,
    padding: 10
  },
  Txt: {
    color: '#a3a'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
});
