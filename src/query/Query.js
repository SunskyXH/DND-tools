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
  ListItem,
  SearchBar,
} from 'react-native-elements'

let styles = {}

class Query extends Component {
  constructor () {
    super()
    this.state = {
    }
    this.serach = this.serach.bind(this)
  }
  serach () {
    console.log('1')
  }
  render () {
    return (
      <ScrollView keyboardShouldPersistTaps style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Icon color='white' name='code' size={62} />
          <Text style={styles.heading}>Query</Text>
        </View>
        <SearchBar
          round
          lightTheme
          onChangeText={this.serach}
          placeholder='Type Here...' />
        <Button
          buttonStyle={[{marginBottom: 15, marginTop: 15}]}
          icon={{name: 'search'}}
          backgroundColor={socialColors.stumbleupon}
          title='Search' />
      </ScrollView>
    )
  }
}

styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ebedf1'
  },
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
    backgroundColor: '#aad450'
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
