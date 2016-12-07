/**
 * @providesModule HSNavBar
 */

import React from 'react'
import { Platform, Navigator, StyleSheet, TouchableHighlight } from 'react-native'
import NavTitleComponent from 'HSNavTitleComponent'
import NavTitleIcon from 'HSNavTitleIcon'
import colors from 'HSColors'
import Icon from 'react-native-vector-icons/MaterialIcons'

let styles = {}
const NavigationBar = (toggleSideMenu, backgroundColor) => {
  const src = require('image!logo')
  console.warn(toggleSideMenu)
  const LeftButton = (route, navigator, index, navState) => {
    if (index > 0) {
      const leftAction = navigator.pop
      const leftIcon = 'chevron-left'
      return (
        <Icon
          onPress={leftAction}
          name={leftIcon} size={28} />
      )
    }
    return (
      <TouchableHighlight
        style={{marginTop: 7, marginLeft: 9}}
        onPress={toggleSideMenu}
        underlayColor='transparent'>
        <Icon
          color='white'
          name='menu'
          size={28}
        />
      </TouchableHighlight>
    )
  }
  const RightButton = (/* route, navigator, index, navState */) => {
    return null
  }
  const Title = (route, navigator, index, navState) => {
    if (route.name) {
      return (
        <NavTitleComponent title={route.name} />
      )
    }
    return (
      <NavTitleIcon src={src} />
    )
  }
  return (
    <Navigator.NavigationBar
      routeMapper={{
        LeftButton,
        RightButton,
        Title
      }}
      style={[styles.navBar,
      backgroundColor && {backgroundColor: backgroundColor}
    ]}
    />
  )
}

styles = StyleSheet.create({
  navBar: {
    height: 65,
    backgroundColor: colors.primary2,
    ...Platform.select({
      android: {
        height: 55
      }
    })
  },
  backIcon: {
    marginLeft: 10,
    marginTop: 10,
    ...Platform.select({
      android: {
        marginTop: 15
      }
    })
  }
})

export default NavigationBar
