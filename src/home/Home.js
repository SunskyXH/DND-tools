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
        name: '香香鸡本体',
        icon: 'flare',
        subtitle: 'Paladin',
        level: '5'
      },{
        name: '香香鸡猛男形态',
        icon: 'polymer',
        subtitle: 'Warrior',
        level: '2'
      },{
        name: '香香鸡法术形态',
        icon: 'filter-tilt-shift',
        subtitle: 'Warlock',
        level: '1'
      }
    ]
    const { toggleSideMenu } = this.props
    return (
      <ScrollView style={styles.mainContainer}>
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
                subtitle = {item.subtitle+' '+'Lv'+item.level}
                leftIcon={{name: item.icon}}
              />
            ))
          }
        </List>
        <Button
          buttonStyle={[{marginBottom: 15, marginTop: 15}]}
          icon={{name: 'add'}}
          backgroundColor={socialColors.vimeo}
          title='Build a Card' />
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
