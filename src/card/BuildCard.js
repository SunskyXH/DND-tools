import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Platform, TextInput} from 'react-native'
import colors from 'HSColors'
import socialColors from 'HSSocialColors'
import fonts from 'HSFonts'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Text,
  Button,
  List,
  ListItem,
  FormLabel,
  FormInput,
  FormValidationMessage,
  CheckBox,
} from 'react-native-elements'

let styles = {}

class BuildCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleComepletePress = this.handleComepletePress.bind(this)
  }

  handleNameChange(name) {
    this.setState({
      name,
    })
  }

  handleComepletePress() {
    const { navigator } = this.props

    if (navigator) {
      navigator.pop()
    }
  }

  render () {
    return (
      <ScrollView style={styles.mainContainer}>
        <List containerStyle={{marginTop: 20}}>
          <FormLabel>Name</FormLabel>
          <FormInput onChangeText={(name) => this.handleNameChange(name)}/>
          <ListItem
            onPress={() => console.log('something')}
            title={'职业：'}
          />
          <ListItem
            onPress={() => console.log('something')}
            title={'种族：'}
          />
        </List>
        <Button
          raised
          buttonStyle={[{marginBottom: 15, marginTop: 15}]}
          icon={{name: 'add'}}
          backgroundColor={socialColors.vimeo}
          title='Build a Card'
          onPress={this.handleComepletePress}/>
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

export default BuildCard
