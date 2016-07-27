import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Header, { styles } from './Header'
import { View, Text, } from 'react-native'

const setup = (props) => {
  let renderer = TestUtils.createRenderer()
  renderer.render(<Header {...props} />)
  let output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

describe('Header Component', () => {
  it('should render a view with header title', () => {
    let props = {
      title: 'The title'
    }
    const { output } = setup(props)
    expect(output.type).toBe(View)
    expect(output.props.style).toEqual(styles.header)

    let title = output.props.children

    expect(title.type).toBe(Text)
    expect(title.props.style).toEqual(styles.title)

    let titleContent = title.props.children
    expect(titleContent).toEqual('The title')
  })
})
