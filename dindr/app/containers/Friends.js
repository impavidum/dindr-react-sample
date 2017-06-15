import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  StyleSheet,
  Modal,
  View
} from 'react-native';
import { enableContacts, enableLocation, enableNotifications } from '../actions/';

import { Icon } from 'react-native-elements';
import { List, ListItem, Avatar, Button } from 'react-native-elements';
import { users } from '../config/data';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import PermissionsWidget from '../components/Permissions'
import FindFriends from '../components/FindFriends'


class Friends extends Component {

  constructor(props) {
    super(props)

    this.showModal = this
      .showModal
      .bind(this)

    this.hideModal = this
      .hideModal
      .bind(this)

    this.next = this
      .next
      .bind(this)
  }

  showModal(visible) {
    this.setState({modalVisible: true});
  }

  hideModal() {
    this.setState({modalVisible: false});
  }

  next() {
    this.setState({permissionsSet: true});
  }

  state = {
    modalVisible: false,
    permissionsSet: false
  }

  componentDidMount() {

    const {user} = this.props
    const noneSet = !user.contactsEnabled && !user.notificationsEnabled && !user.locationEnabled
    if(noneSet) {
      this.showModal()
    }
  }

  render() {
    const {user,actions} = this.props
    const noneSet = !user.contactsEnabled && !user.notificationsEnabled && !user.locationEnabled
    return (
      <ScrollView>
        <List>
          {users.map((user) => (
            <ListItem
              key={user.id}
              roundAvatar
              avatar={{ uri: user.picture }}
              title={user.name}
              subtitle={`${user.distance} miles away & ${user.status}`}
              
            />
          ))}
        </List>
         <Modal
          animationType={"slide"}
          supportedOrientations={["portrait"]}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
          alert("Modal has been closed.")
        }}>
          <Icon
            type='ionicon'
            name='ios-close'
            size={35}
            color={'grey'}
            onPress={() => {
            this.hideModal()
          }}
            style={styles.closeButton}/>

          {!this.state.permissionsSet && <PermissionsWidget user={user} actions={actions}/>}
          {this.state.permissionsSet && <FindFriends user={user} actions={actions}/>}
          

          {noneSet && !this.state.permissionsSet && <Button
          color={'grey'}
          backgroundColor={ltgrey}
          fontSize={18}
          fontWeight='500'
          title='Next'
          borderRadius={25}
          style={styles.nextButtonDisabled}/>}

          {!noneSet && !this.state.permissionsSet && <Button
          color="white"
          backgroundColor={green}
          fontSize={18}
          fontWeight='500'
          title='Next'
          borderRadius={25}
          onPress={() => {
            this.next()
          }} style={styles.nextButton}/>}

          {this.state.permissionsSet && <Button
          color={"white"}
          backgroundColor={green}
          fontSize={18}
          fontWeight='500'
          title='Done'
          borderRadius={25}
          onPress={() => {
            this.hideModal()
          }} style={styles.doneButton}/>}

        </Modal>
      </ScrollView>
    );
  }
}

const pink = '#FF7769'
const ltgrey = '#F2F1EF'
const green = '#23DBB8'

const styles = StyleSheet.create({
  closeButton: {
    marginTop: 22,
    alignSelf: 'flex-end',
    marginRight: 11
  },
  nextButton: {
    width: 50 + '%',
    alignSelf: 'center',
  },
  nextButtonDisabled: {
    width: 50 + '%',
    alignSelf: 'center',
  },
  doneButton: {
    width: 50 + '%',
    alignSelf: 'center',
    marginTop: 100
  },
});

Friends.propTypes = {
  actions: PropTypes.shape({})
}

function mapStateToProps(state) {
  const props = {
    user: state.user,
  }
  return props
}

function mapDispatchToProps(dispatch) {
  const actions = { 
    enableContacts,
    enableLocation,
    enableNotifications
  };
  const actionMap = {
    actions: bindActionCreators(actions, dispatch)
  };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends);