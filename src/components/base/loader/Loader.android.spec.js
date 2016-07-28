import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Loader from './Loader.android'
import { View, ProgressBarAndroid, } from 'react-native'

const setup = (props) => {
  let renderer = TestUtils.createRenderer()
  renderer.render(<Loader {...props} />)
  let output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

describe('Loader Component (Android)', () => {
  it('should render a loader inside a view', () => {
    let props = {
      loading: true,
    }
    const { output } = setup(props)
    expect(output.type).toBe(View)

    let loader = output.props.children

    expect(loader.type).toBe(ProgressBarAndroid)
  })
})
