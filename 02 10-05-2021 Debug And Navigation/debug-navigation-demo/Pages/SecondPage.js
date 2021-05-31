import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Image } from 'react-native'

export default function SecondPage(props) {
  return (
    <View style={styles.container}>
      <Text> Second Page! </Text>
      <Text>{props.route.params != undefined ?
        props.route.params.user + " seconds" : '...'}</Text>
      <View style={{ margin: 20 }}>
        <Button title="go 2 FirstP" onPress={() => { props.navigation.navigate('FirstPage'); }} />
      </View>
      <Image
        style={{ width: 200, height: 250 }}
        source={require('../assets/cp.jpg')}
      />
      <Image
        style={{ width: 150, height: 200 }}
        source={{ uri: 'https://miro.medium.com/max/471/0*_YcTdWCkDbiz2-yC.png' }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
