import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { } from '../actions/';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  ScrollView
} from 'react-native';

class Discover extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      images: [
        {
          path: require('../images/rest1.jpg')
        },
        {
          path: require('../images/rest2.jpg')
        },
        {
          path: require('../images/rest3.jpg')
        },
        {
          path: require('../images/rest4.jpg')
        },
        {
          path: require('../images/rest5.jpg')
        },
        
      ]
    };
  }
  render() {
    const {user} = this.props
    return (
      <ScrollView style={styles.container}>
        {this.state.images.map((image, index)=>{
          return (
            <Image key={index} source={image.path} style={styles.image}/>
          )
        })}

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    paddingTop: 22,
    paddingBottom: 22,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  image: {
    flex: 1,
    width: null,
    height: 200,
    borderRadius: 5,
    marginLeft: 22,
    marginRight: 22,
    marginBottom: 22,
   alignSelf: 'stretch',

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
