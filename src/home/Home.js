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

class Home extends Component {
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
        <View style={styles.hero}>
          <Icon color='white' name='change-history' size={62} />
          <Text style={styles.heading}>Card</Text>
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
        <Button
          buttonStyle={[{marginBottom: 15, marginTop: 15}]}
          icon={{name: 'change-history'}}
          backgroundColor={socialColors.twitter}
          title='Build a Card' />
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
  hero: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.primary2
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

export default Home
