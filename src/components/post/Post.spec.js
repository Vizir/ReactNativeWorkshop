import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Post, { styles } from './Post'
import PostImage from './PostImage'
import PostText from './PostText'
import { View, Text, Image, } from 'react-native'

const setup = (props) => {
  let renderer = TestUtils.createRenderer()
  renderer.render(<Post {...props} />)
  let output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

describe('Post Component', () => {
  it('should render a view with post image and post text', () => {
    let props = {
      post: {
        id: 1,
        text: 'some-text',
        image: 'a-image.png',
        username: 'username',
      }
    }
    const { output } = setup(props)
    expect(output.type).toBe(View)
    expect(output.props.style).toEqual(styles.post)

    let [ postImage, postText ] = output.props.children

    expect(postImage.type).toBe(PostImage)
    expect(postImage.props.image).toEqual('a-image.png')
    expect(postText.type).toBe(PostText)
  })
})
