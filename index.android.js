/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import AppRootContainer from './src/AppRootContainer'

export default class DNDtools_rn extends Component {
  render() {
    return (
      <AppRootContainer />
    );
  }
}

AppRegistry.registerComponent('DNDtools_rn', () => DNDtools_rn);
