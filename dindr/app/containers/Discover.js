import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { } from '../actions/';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

class Discover extends Component {

  render() {
    const {user} = this.props
    return (
      <View style={styles.container}>
        <Text>Some Discover page stuff goes here..</Text>
        <Text>Like: {user.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

Discover.propTypes = {
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
  };
  const actionMap = {
    actions: bindActionCreators(actions, dispatch)
  };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
