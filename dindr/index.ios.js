import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './app/store';


import { AppRegistry } from 'react-native';
import App from './app/index';

const store = configureStore();


const dindr = () => {
    return(
    <Provider store={store}>
   <App/>
  </Provider>
    )
  
}

AppRegistry.registerComponent('dindr', () => dindr);

