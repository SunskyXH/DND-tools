import React, { Component } from 'react'
import { StyleSheet, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from 'HSColors'
import socialColors from 'HSSocialColors'
import fonts from 'HSFonts'

import Card from './card/CardNav'
import Query from './query/QueryNav'
import More from './more/MoreNav'

import { Tabs, Tab } from 'react-native-elements'

let styles = {}

class App extends Component {
  constructor () {
    super()
    this.state = {
      selectedTab: 'Card',
      hideTabBar: false,
    }
    this.changeTab = this.changeTab.bind(this)
    this.hideTabBar = this.hideTabBar.bind(this)
  }

  changeTab (selectedTab) {
    this.setState({
      selectedTab
    })
  }

  hideTabBar(value) {
    this.setState({
      hideTabBar: value,
    })
  }

  
  render () {
    let tabBarStyle = {};
    let sceneStyle = {};
    if (this.state.hideTabBar) {
      tabBarStyle.height = 0;
      tabBarStyle.overflow = 'hidden';
      sceneStyle.paddingBottom = 0;
    }
    const { toggleSideMenu } = this.props
    const { selectedTab } = this.state
    return (
      <Tabs hidesTabTouch tabBarStyle={tabBarStyle} sceneStyle={sceneStyle}>
        <Tab
          titleStyle={[styles.titleStyle]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'Card'}
          title={selectedTab === 'Card' ? 'Card' : null}
          renderIcon={() => <Icon color={colors.grey2} name='change-history' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='change-history' size={26} />}
          onPress={() => this.changeTab('Card')}>
          <Card toggleSideMenu={toggleSideMenu} backgroundColor={ colors.primary2 } hideTabBar={this.hideTabBar.bind(this)}/>
        </Tab>
        <Tab
          titleStyle={[styles.titleStyle]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'query'}
          title={selectedTab === 'query' ? 'Query' : null}
          renderIcon={() => <Icon color={colors.grey2} name='code' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='code' size={26} />}
          onPress={() => this.changeTab('query')}>
          <Query toggleSideMenu={toggleSideMenu} backgroundColor={ socialColors.vimeo } />
        </Tab>
        <Tab
          titleStyle={[styles.titleStyle]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'more'}
          title={selectedTab === 'more' ? 'More' : null}
          renderIcon={() => <Icon color={colors.grey2} name='looks' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='looks' size={26} />}
          onPress={() => this.changeTab('more')}>
          <More toggleSideMenu={toggleSideMenu} backgroundColor={ '#dd4b39' } />
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
