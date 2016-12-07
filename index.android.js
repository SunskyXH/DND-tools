/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import AppRootContianer from './src/AppRootContianer'

export default class DNDtools_rn extends Component {
  render() {
    return (
      <AppRootContianer />
    );
  }
}

AppRegistry.registerComponent('DNDtools_rn', () => DNDtools_rn);
