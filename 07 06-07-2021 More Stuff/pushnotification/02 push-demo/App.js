import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { Notifications } from 'expo';
import registerForPushNotificationsAsync from './registerForPushNotificationsAsync';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: {},
    };
  }

  componentDidMount() {
    registerForPushNotificationsAsync()
      .then((token) => {
        //console.log('token from app.js=', token);
        this.setState({ token });
        //console.log('state.token from app.js=', this.state.token);
      });


    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = (notification) => {
    this.setState({ notification: notification });
  };

  btnPushFromClient = () => {
    let per = {
      to: this.state.token,
      title: 'title from client',
      body: "body from client side",
      badge: 3,
      data: { name: "nir", seconds: new Date().getSeconds() }
    };

    // POST adds a random id to the object sent
    fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      body: JSON.stringify(per),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        if (json != null) {
          console.log(`
              returned from server\n
              json.data= ${JSON.stringify(json.data)}`);

        } else {
          alert('err json');
        }
      });
  }

  btnSendPushFromServer = () => {
    let pnd = {
      to: this.state.token,
      title: 'title from Ruppin Server',
      body: "body from server side",
      badge: 4,
      data: { name: "sivan", grade: new Date().getSeconds() }
    };

    // POST adds a random id to the object sent
    fetch('http://proj.ruppin.ac.il/igroup96/test1/sendpushnotification', {
      method: 'POST',
      body: JSON.stringify(pnd),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        if (json != null) {
          console.log(`
                returned from Ruppin server\n
                json= ${JSON.stringify(json)}`);
        } else {
          alert('err json');
        }
      });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ margin: 10 }}>
          <Button title="send push from client" onPress={this.btnPushFromClient} />
        </View>
        <View style={{ margin: 10 }}>
          <Button title="send push from server" onPress={this.btnSendPushFromServer} />
        </View>
        <Text style={{ fontSize: 17 }} >Origin: {this.state.notification.origin}</Text>
        <Text style={{ fontSize: 17 }}>Data: {JSON.stringify(this.state.notification.data)}</Text>
        <Text style={{ fontSize: 17 }}>{new Date().toLocaleTimeString()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: 'blue',
    fontSize: 20,
    margin: 50
  }
});
