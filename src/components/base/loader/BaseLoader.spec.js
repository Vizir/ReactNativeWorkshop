import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import BaseLoader, { styles } from './BaseLoader'
import { View, Text, } from 'react-native'

const setup = (props) => {
  let renderer = TestUtils.createRenderer()
  renderer.render(<BaseLoader {...props} />)
  let output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

describe('BaseLoader Component', () => {
  it('should render a empty view', () => {
    let props = {
      loading: false,
    }
    const { output } = setup(props)
    expect(output.type).toBe(View)
    expect(output.props.style).toBe(styles.loader)

    let loader = output.props.children

    expect(loader).toEqual(undefined)
  })

  it('should render a loader inside a view', () => {
    let props = {
      loading: true,
    }
    const { output } = setup(props)
    expect(output.type).toBe(View)
    expect(output.props.style).toBe(styles.loader)

    let loader = output.props.children

    expect(loader.type).toBe(Text)
  })
})
