import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Tile, List, ListItem, Button} from 'react-native-elements';

import Permissions from 'react-native-permissions'

class PermissionsWidget extends Component {

  constructor(props) {
    super(props)

    this.requestContacts = this
      .requestContacts
      .bind(this)

  }

  requestContacts() {

    // Works on both iOS and Android
    Alert.alert('"Dindr" would like to access your contacts', 'So we can connect you with friends on Dindr.', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      }, {
        text: 'OK',
        onPress: () => {
          console.log('hit')
          this.props.actions.enableContacts();
          
          // Permissions
          //   .requestPermission('contacts')
          //   .then(response => {
          //     console.log('done')
          //     this.props.actions.enableContacts();
          //   });
        }
      }
    ], {cancelable: false})

  }

  render() {
    const {user} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Dining is better together!</Text>
        <Text style={styles.instructions}>Hi there. Lets take care of a few things before finding people to eat with!</Text>
        <Text style={styles.instructions}>Tap the buttons below to proceed.</Text>

        {!user.contactsEnabled && <Button
          icon={{
          name: 'contacts',
          color: pink
        }}
          color={pink}
          fontSize={18}
          fontWeight='500'
          title='Allow Contacts'
          buttonStyle={styles.buttons}
          borderRadius={25}
          onPress={() => {
          this.requestContacts()
        }}/>}
        <Text style={styles.smallInstructions}>We’ll help find your hungry friends who are down to eat with you.</Text>

        <Button
          icon={{
          name: 'place',
          color: pink
        }}
          color={pink}
          fontSize={18}
          fontWeight='500'
          title='Enable Location'
          buttonStyle={styles.buttons}
          borderRadius={25}/>
        <Text style={styles.smallInstructions}>We’ll match you with great local restaurants and nearby dining groups.</Text>

        <Button
          icon={{
          name: 'notifications',
          color: pink
        }}
          color={pink}
          fontSize={18}
          fontWeight='500'
          title='Allow Notifications'
          buttonStyle={styles.buttons}
          borderRadius={25}/>
        <Text style={styles.smallInstructions}>We’ll send you important notifications so
          you’ll never miss an invitation to dine out.</Text>
      </View>

    );
  }
}
const pink = '#FF7769'
const styles = StyleSheet.create({
  container: {
    // flex: 1, justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  heading: {
    fontSize: 21,
    marginBottom: 25
  },
  instructions: {
    marginBottom: 25,
    fontSize: 16,
    width: 90 + '%',
    textAlign: 'center'
  },
  smallInstructions: {
    fontSize: 13,
    marginBottom: 20,
    width: 60 + '%',
    textAlign: 'center'
  },
  buttons: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: pink,
    marginBottom: 10,
    width: 100 + '%'
  }
});

export default PermissionsWidget;
