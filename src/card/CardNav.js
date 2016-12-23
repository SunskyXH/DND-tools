import React, { Component } from 'react'
import { Navigator } from 'react-native'
import Card from './Card'
import navigationBar from 'HSNavBar'

const initialRoute = {component: Card, name: 'Card'}

class CardNav extends Component {
  constructor () {
    super()
    this.renderScene = this.renderScene.bind(this)
  }
  renderScene (route, navigator) {
    const { toggleSideMenu} = this.props
    return (
      <route.component toggleSideMenu={toggleSideMenu} navigator={navigator} {...route.passProps} />
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

export default CardNav
