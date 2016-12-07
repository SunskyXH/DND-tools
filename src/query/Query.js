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

class Query extends Component {
  render () {
    const list = [
      {
        name: '香香鸡',
        icon: 'code',
        subtitle: 'Paladin'
      },{
        name: '香香鸡2',
        icon: 'code',
        subtitle: 'Warrior'
      }
    ]
    const { toggleSideMenu } = this.props
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.headerContainer}>
          <Icon color='white' name='code' size={62} />
          <Text style={styles.heading}>Query</Text>
        </View>

        <Button
          buttonStyle={[{marginBottom: 15, marginTop: 15}]}
          icon={{name: 'code'}}
          backgroundColor={socialColors.twitter}
          title='Serach' />
      </ScrollView>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  },
  headerContainer: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.secondary
  },
  titleContainer: {
  },
  button: {
    marginTop: 15
  },
  title: {
    textAlign: 'center',
    color: colors.grey2,
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black
      }
    })
  }
})

export default Query
