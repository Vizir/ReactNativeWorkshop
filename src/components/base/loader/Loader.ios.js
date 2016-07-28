import React from 'react'
import { ActivityIndicator, } from 'react-native'
import BaseLoader from './BaseLoader'

export default class Loader extends BaseLoader {
  _renderLoader() {
    if (this.props.loading) {
      return (
        <ActivityIndicator animating={true} size='large' />
      )
    }
  }
}
