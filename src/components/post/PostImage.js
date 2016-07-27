import React, { Component, PropTypes, } from 'react'
import { Image, StyleSheet, } from 'react-native'

export default class PostImage extends Component {
  render() {
    let imageSource = {
      uri: this.props.image
    }
    return (
      <Image source={imageSource} style={styles.image} />
    )
  }
}

export const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 300
  }
})

PostImage.propTypes = {
  image: PropTypes.string.isRequired,
}
