import React, { Component, PropTypes } from 'react'
import { View, StyleSheet, Text, } from 'react-native'

export default class Loader extends Component {
  _renderLoader() {
    if (this.props.loading) {
      return (
        <Text>
          Carregando...
        </Text>
      )
    }
  }

  render() {
    let loader = this._renderLoader()
    return (
      <View style={styles.loader}>
        {loader}
      </View>
    )
  }
}

export const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
}
