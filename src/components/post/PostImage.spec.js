import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import PostImage, { styles } from './PostImage'
import { Image, } from 'react-native'

const setup = (props) => {
  let renderer = TestUtils.createRenderer()
  renderer.render(<PostImage {...props} />)
  let output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

describe('PostImage Component', () => {
  it('should render a image with the external url on image props', () => {
    let props = {
      image: 'a-image.png',
    }
    const { output } = setup(props)
    expect(output.type).toBe(Image)
    expect(output.props.style).toEqual(styles.image)
    expect(output.props.source).toEqual({
      uri: 'a-image.png'
    })
  })
})
