import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Platform } from 'react-native'
import colors from 'HSColors'
import socialColors from 'HSSocialColors'
import fonts from 'HSFonts'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Text,
  Button,
  List,
  ListItem
} from 'react-native-elements'

let styles = {}

class CardDeatil extends Component {
  constructor(props) {
    super(props)

    this.goBack = this.goBack.bind(this)

  }

  goBack () {
    const { navigator } = this.props.navigator
    if(navigator) {
      navigator.pop()
    }
  }

  render() {
    return (
      <ScrollView style={styles.mainContainer}>
        <List containerStyle={{marginBottom: 20}}>
          <ListItem
            onPress={() => console.log('something')}
            title={'香香鸡'}
          />
          <ListItem
            onPress={() => console.log('something')}
            title={'香香鸡'}
          />
          <ListItem
            onPress={() => console.log('something')}
            title={'香香鸡'}
          />
          <ListItem
            onPress={() => console.log('something')}
            title={'香香鸡'}
          />
          <ListItem
            onPress={() => console.log('something')}
            title={'香香鸡'}
          />
          <ListItem
            onPress={() => console.log('something')}
            title={'香香鸡'}
          />
        </List>
      </ScrollView>
    )
  }
}

styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ebedf1',
    flex: 1,
    paddingTop: 30,
    marginTop: 30,
  },
})
export default CardDeatil
