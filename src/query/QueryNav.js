import React, { Component } from 'react'
import { Navigator } from 'react-native'
import Query from './Query'
import navigationBar from 'HSNavBar'

const initialRoute = {component: Query, name: 'Query'}

class QueryNav extends Component {
  constructor () {
    super()
    this.renderScene = this.renderScene.bind(this)
  }
  renderScene (route, navigator) {
    const { toggleSideMenu, backgroundColor } = this.props
    return (
      <route.component
        toggleSideMenu={toggleSideMenu}
        backgroundColor={ backgroundColor }
        navigator={navigator}
        {...route.passProps} />
    )
  }
  render () {
    const { toggleSideMenu, backgroundColor } = this.props
    return (
      <Navigator
        navigationBar={navigationBar(toggleSideMenu, backgroundColor)}
        initialRoute={initialRoute}
        renderScene={this.renderScene.bind(this)} />
    )
  }
}

export default QueryNav
