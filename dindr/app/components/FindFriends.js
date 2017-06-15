import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Tile, List, ListItem, Button} from 'react-native-elements';

class FindFriends extends Component {

  constructor(props) {
    super(props)

    this.requestContacts = this
      .requestContacts
      .bind(this)

  }

  requestContacts() {

    // Alert user with request
    Alert.alert('"Dindr" would like to access your contacts', 'So we can connect you with friends on Dindr.', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      }, {
        text: 'OK',
        onPress: () => {
          console.log('hit')
          this
            .props
            .actions
            .enableContacts();

          // Permissions   .requestPermission('contacts')   .then(response => {
          // console.log('done')     this.props.actions.enableContacts();   });
        }
      }
    ], {cancelable: false})

  }

  render() {
    const {user} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Add Friends</Text>
        <Text style={styles.instructions}>Dining is better together.</Text>
        <Text style={styles.instructions}>Connect your Facebook and Contacts to find friends currently on Dindr.</Text>
        <Button
          icon={{
          name: 'phone',
          color: pink
          }}
          iconRight={true}
          color={pink}
          fontSize={18}
          fontWeight='500'
          title='Find friends via '
          buttonStyle={styles.buttons}
          borderRadius={25}
          />
          <Button
          icon={{
          name: 'share',
          color: pink
          }}
          iconRight={true}
          color={pink}
          fontSize={18}
          fontWeight='500'
          title='Find friends via '
          buttonStyle={styles.buttons}
          borderRadius={25}
          />
      </View>
    )
  }
}
const pink = '#FF7769'
const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  heading: {
    fontSize: 33,
    marginBottom: 25,
    marginTop: 150,
    color: pink
  },
  instructions: {
    marginBottom: 0,
    fontSize: 16,
    width: 60 + '%',
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
    marginTop: 15,
    width: 90 + '%',
    alignSelf: 'center'
  },
  activeButtons: {
    backgroundColor: pink,
    borderWidth: 2,
    borderColor: pink,
    marginBottom: 10,
    width: 100 + '%'
  }
});

export default FindFriends;
