import React, { Component } from 'react'
import { View, Text } from 'react-native'
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
      toggled: false
    }
    this.toggleSideMenu = this.toggleSideMenu.bind(this)
  }
  toggleSideMenu () {
    this.setState({
      toggled: !this.state.toggled
    })
  }
  render () {
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
        name: 'About',
        icon: 'bubble-chart'
      }
    ]
    const MenuComponent = (
      <View style={{flex: 1, backgroundColor: '#ffffff', paddingTop: 50}}>
        <Text>DNDtools</Text>
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
        toggledContainerStyle={{borderLeftWidth: 1, borderLeftColor: '#ffffff'}}
        toggled={this.state.toggled}
        MenuComponent={MenuComponent}>
        <App toggleSideMenu={this.toggleSideMenu} />
      </SideMenu>
    )
  }
}

export default AppRootContainer
