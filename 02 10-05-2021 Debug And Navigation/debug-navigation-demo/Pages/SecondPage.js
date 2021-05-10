import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Image } from 'react-native'

export default function SecondPage(props) {
  return (
    <View style={styles.container}>
      <Text> Second Page! </Text>
      <View style={{ margin: 20 }}>
        <Button title="go 2 FirstP" onPress={() => { props.navigation.navigate('FirstPage'); }} />
      </View>
      <Image
          style={{width:250, height:300}}
          source={require('../assets/cp.jpg')}
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
