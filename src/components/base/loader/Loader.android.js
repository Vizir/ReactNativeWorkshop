import React from 'react'
import { ProgressBarAndroid, } from 'react-native'
import BaseLoader from './BaseLoader'

export default class Loader extends BaseLoader {
  _renderLoader() {
    if (this.props.loading) {
      return (
        <ProgressBarAndroid styleAttr='Inverse' />
      )
    }
  }
}
