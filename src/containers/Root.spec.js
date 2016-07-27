import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { Provider } from 'react-redux'
import * as ConfigureStore from '../store/ConfigureStore'
import Root from './Root'
import App from './App'

const setup = () => {
  let props = {}

  let renderer = TestUtils.createRenderer()
  renderer.render(<Root {...props} />)
  let output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

describe('Root Container', () => {
  it('should render app inside a provider connected with store', () => {
    const { output } = setup()
    expect(output.type).toBe(Provider)
    expect(output.props.store.keys).toBe(ConfigureStore.configure().keys)

    let app = output.props.children
    expect(app.type).toBe(App)
  })
})
