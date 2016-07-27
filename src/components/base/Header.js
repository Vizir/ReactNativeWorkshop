import React, { Component, PropTypes, } from 'react'
import { View, StyleSheet, Text, } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>
          {this.props.title}
        </Text>
      </View>
    )
  }
}

export const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    height: 60,
    padding: 14,
  },
  title: {
    alignItems: 'center',
    color: '#fff',
    flex: 1,
    fontSize: 22,
    fontWeight: '400',
    textAlign: 'center',
  }
})

Header.propTypes = {
  title: PropTypes.string.isRequired,
}
