import React, { Component } from 'react'
import { StyleSheet, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from 'HSColors'
import fonts from 'HSFonts'

import Home from './home/HomeNav'
import Query from './query/QueryNav'
import More from './more/MoreNav'

import { Tabs, Tab } from 'react-native-elements'

let styles = {}

class App extends Component {
  constructor () {
    super()
    this.state = {
      selectedTab: 'home'
    }
    this.changeTab = this.changeTab.bind(this)
  }
  changeTab (selectedTab) {
    this.setState({
      selectedTab
    })
  }
  render () {
    const { toggleSideMenu } = this.props
    const { selectedTab } = this.state
    return (
      <Tabs hidesTabTouch>
        <Tab
          titleStyle={[styles.titleStyle]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'home'}
          title={selectedTab === 'home' ? 'Card' : null}
          renderIcon={() => <Icon color={colors.grey2} name='change-history' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='change-history' size={26} />}
          onPress={() => this.changeTab('home')}>
          <Home toggleSideMenu={toggleSideMenu} />
        </Tab>
        <Tab
          titleStyle={[styles.titleStyle]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'query'}
          title={selectedTab === 'query' ? 'Query' : null}
          renderIcon={() => <Icon color={colors.grey2} name='code' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='code' size={26} />}
          onPress={() => this.changeTab('query')}>
          <Query toggleSideMenu={toggleSideMenu} />
        </Tab>
        <Tab
          titleStyle={[styles.titleStyle]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'more'}
          title={selectedTab === 'more' ? 'More' : null}
          renderIcon={() => <Icon color={colors.grey2} name='looks' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='looks' size={26} />}
          onPress={() => this.changeTab('more')}>
          <More toggleSideMenu={toggleSideMenu} />
        </Tab>
      </Tabs>
    )
  }
}

styles = StyleSheet.create({
  titleStyle: {
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black
      }
    })
  }
})

export default App
