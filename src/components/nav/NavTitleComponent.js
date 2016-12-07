/**
 * @providesModule HSNavTitleComponent
 */

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'


class NavTitleComponent extends Component {
  constructor () {
    super()
  }
  render () {
    const { title } = this.props
    return(
      <View>
        <Text style={styles.heading}>{ title }</Text>
      </View>
    )
  }
}

styles = StyleSheet.create({
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  }
})
export default NavTitleComponent
