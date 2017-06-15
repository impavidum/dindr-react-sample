import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Tile, List, ListItem, Button, Avatar} from 'react-native-elements';
import {me} from '../config/data';

class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
        {/*<Avatar
          xlarge
          rounded
          source={{
          uri: this.props.picture
        }}
          activeOpacity={0.7}/>*/}

        {/*<Text>{this.props.name}</Text>*/}
        <Text>Some Profile page stuff goes here..</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

Profile.defaultProps = {
  ...me
};

export default Profile;
