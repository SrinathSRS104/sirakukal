import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'

import auth from '../Firebase/Firebase'

export default class Home extends React.Component {
  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = auth
    this.setState({ currentUser })
  }

  render() {
    const { currentUser } = this.state

    return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})