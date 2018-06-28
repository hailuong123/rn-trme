/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Component } from 'react';
import { Router } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { KEYSTORE } from './General/globalConstants'; 
import configStore from './Handle/Redux/store/configureStore';
import * as actions from './Handle/Redux/actions/globalActions';
import initState from './Handle/Redux/lib/initState';

import scenes from './General/globalRoute';
import { checkLocalStoreToRedux } from './Handle/Redux/lib/reducerConfig';

const store: any = configStore();

const RouteWithRedux = connect()(Router);

export default class App extends Component {
  render() {
    checkLocalStoreToRedux(store, KEYSTORE.USERDATA, actions.setUser, initState.user);
    return (
      <Provider store={store}>
        <RouteWithRedux scenes={scenes} />
      </Provider>
    );
  }
}
