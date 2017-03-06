import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Platform } from 'react-native'
import colors from 'HSColors'
import socialColors from 'HSSocialColors'
import fonts from 'HSFonts'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CardDetail from './CardDetail'
import BuildCard from './BuildCard'
import {
  Text,
  Button,
  List,
  ListItem,
  SocialIcon,
} from 'react-native-elements'



let styles = {}

class Card extends Component {

  constructor() {
    super()
    this.handleItemPress = this.handleItemPress.bind(this)
    this.handleBuildCardPress = this.handleBuildCardPress.bind(this)
  }


  handleItemPress() {
    const { navigator } = this.props
    if(navigator) {
      navigator.push({
        name: 'CardDetail',
        component: CardDetail
      })
    }
  }

  handleBuildCardPress(){
    const { navigator } = this.props
    if(navigator) {
      navigator.push({
        name: 'BuildCard',
        component: BuildCard
      })
    }
  }

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
      },
      {
        name: '香香鸡哲学形态',
        icon: 'spa',
        subtitle: 'Monk',
        level: '5'
      },{
        name: '香香鸡神圣形态',
        icon: 'details',
        subtitle: 'Priest',
        level: '2'
      },{
        name: '香香鸡敏捷形态',
        icon: 'adb',
        subtitle: 'Rouge',
        level: '1'
      },{
        name: '香香鸡智慧形态',
        icon: 'whatshot',
        subtitle: 'Mage',
        level: '5'
      }
    ]
    return (
      <ScrollView style={styles.mainContainer}>
        <View style={styles.hero}>
          <Icon color='white' name='change-history' size={62} />
          <Text style={styles.heading}>Cards</Text>
        </View>
        <List>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.name}
                subtitle = {'Lv'+item.level+'/'+item.subtitle+' '}
                leftIcon={{name: item.icon}}
                onPress={this.handleItemPress}
              />
            ))
          }
        </List>
        <Button
          raised
          buttonStyle={[{marginBottom: 15, marginTop: 15}]}
          icon={{name: 'add'}}
          backgroundColor={socialColors.vimeo}
          title='Build a Card'
          onPress={this.handleBuildCardPress}/>
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

export default Card
