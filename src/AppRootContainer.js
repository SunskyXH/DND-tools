import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import App from './App'
import {
  List,
  ListItem,
  SideMenu
} from 'react-native-elements'

class AppRootContainer extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.toggleSideMenu = this.toggleSideMenu.bind(this)
  }
  toggleSideMenu () {
    console.log('!!!!!!!!!!!')
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    const src = require('./images/logo.png')
    const list = [
      {
        name: 'Setting',
        icon: 'settings'
      },
      {
        name: 'Help us',
        icon: 'code'
      },
      {
        name: 'Feedback',
        icon: 'bubble-chart'
      }
    ]
    const MenuComponent = (
      <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 30}}>
        <View style={{backgroundColor: 'darkgrey', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', padding: 10,}}>
          <Image
            source={src}
            style={styles.logo} />
        </View>
        <List containerStyle={{marginBottom: 20}}>
          {
            list.map((l, i) => (
              <ListItem
                onPress={() => console.log('something')}
                key={i}
                title={l.name}
                leftIcon={{name: l.icon}}
              />
            ))
          }
        </List>
      </View>
    )
    return (
      <SideMenu
        isOpen={this.state.isOpen}
        menu={MenuComponent}>
        <App toggleSideMenu={this.toggleSideMenu.bind(this)} />
      </SideMenu>
    )
  }
}

export default AppRootContainer
