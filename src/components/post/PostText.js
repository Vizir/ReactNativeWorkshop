import React, { Component, PropTypes, } from 'react'
import { Text, StyleSheet, } from 'react-native'

export default class PostText extends Component {
  render() {
    return (
      <Text style={styles.text}>
        {this.props.text}
      </Text>
    )
  }
}

export const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  }
})

PostText.propTypes = {
  text: PropTypes.string.isRequired,
}
