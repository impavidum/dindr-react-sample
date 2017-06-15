import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements'

import Discover from '../containers/Discover';
import Friends from '../containers/Friends';
import Profile from '../containers/Profile';

export const FeedStack = StackNavigator({
  Friends: {
    screen: Friends,
    navigationOptions: ({ navigation }) => ({
      title: 'Friends',
    }),
  },
  Discover: {
    screen: Discover,
    navigationOptions: {
      title: 'Discover',
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
    }),
  }
});

export const Tabs = TabNavigator({
  Friends: {
    screen: Friends,
    navigationOptions: {
      tabBarLabel: 'Friends',
      tabBarIcon: ({ tintColor }) => <Icon type='ionicon' name='ios-people-outline' size={35} color={tintColor} />
    },
  },
  Discover: {
    screen: Discover,
    navigationOptions: {
      tabBarLabel: 'Discover',
      tabBarIcon: ({ tintColor }) => <Icon type='ionicon' name='ios-heart-outline' size={35} color={tintColor} />,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon type='ionicon' name='ios-person-outline' size={35} color={tintColor} />
    },
  }
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  }
}, {
  mode: 'modal',
  headerMode: 'none',
});
