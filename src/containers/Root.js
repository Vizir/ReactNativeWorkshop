import React, { Component } from 'react'
import { Provider } from 'react-redux'
import * as ConfigureStore from '../store/ConfigureStore'
import App from './App'

const store = ConfigureStore.configure()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App posts={[]} />
      </Provider>
    )
  }
}
