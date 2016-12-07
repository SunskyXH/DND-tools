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

class More extends Component {
  render () {
    const list = [
      {
        name: 'Dice',
        icon: 'grain'
      }
    ]
    const { toggleSideMenu } = this.props
    return (
      <ScrollView style={styles.mainContainer}>
        <View style={styles.headingContainer}>
          <Icon color='white' name='looks' size={62} />
          <Text style={styles.heading}>More Tools</Text>
        </View>
        <List>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.name}
                subtitle = {item.subtitle}
                leftIcon={{name: item.icon}}
              />
            ))
          }
        </List>
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
  headingContainer: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.secondary2
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

export default More
