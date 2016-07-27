import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import PostText, { styles } from './PostText'
import { Text, } from 'react-native'

const setup = (props) => {
  let renderer = TestUtils.createRenderer()
  renderer.render(<PostText {...props} />)
  let output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

describe('PostText Component', () => {
  it('should render a text with props text on it`s content', () => {
    let props = {
      text: 'a text',
    }
    const { output } = setup(props)
    expect(output.type).toBe(Text)
    expect(output.props.style).toEqual(styles.text)
    expect(output.props.children).toEqual('a text')
  })
})
