import React, { Component } from 'react'
import { Navigator } from 'react-native'
import More from './More'
import navigationBar from 'HSNavBar'

const initialRoute = {component: More, name: 'More'}

class MoreNav extends Component {
  constructor () {
    super()
    this.renderScene = this.renderScene.bind(this)
  }
  renderScene (route, navigator) {
    const { toggleSideMenu } = this.props
    return (
      <route.component toggleSideMenu={toggleSideMenu} navigator={navigator} {...route.passProps} />
    )
  }
  render () {
    const { toggleSideMenu } = this.props
    return (
      <Navigator
        navigationBar={navigationBar(toggleSideMenu)}
        initialRoute={initialRoute}
        renderScene={this.renderScene.bind(this)} />
    )
  }
}

export default MoreNav
