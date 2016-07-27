import React, { Component, PropTypes, } from 'react'
import { View, StyleSheet, Dimensions, } from 'react-native'
import PostImage from './PostImage'
import PostText from './PostText'

let { width } = Dimensions.get('window')

export default class Post extends Component {
  render() {
    return (
      <View style={styles.post}>
        <PostImage image={this.props.post.image}/>
        <PostText text={this.props.post.text}/>
      </View>
    )
  }
}

export const styles = StyleSheet.create({
  post: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    margin: width * 0.025,
    width: width * 0.95,
  }
})

Post.propTypes = {
  post: PropTypes.object.isRequired,
}
