import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Platform} from 'react-native'
import colors from 'HSColors'
import socialColors from 'HSSocialColors'
import fonts from 'HSFonts'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
    Text,
    Button,
    List,
    ListItem,
} from 'react-native-elements'

let style = {}

class BuildCard extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 30}}>
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
      </View>
    )
  }
}
styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ebedf1'
  },
})

export default BuildCard
