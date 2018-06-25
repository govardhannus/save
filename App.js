/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,Text
} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


//Components
import {Root} from './Js/Config/route'
import allReducers from './Js/Reducers/combineReducers'

let store = createStore(allReducers);

export default class App extends Component<Props> {
  render() {
    return (
        <Provider store={store}>
          <Root/>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
