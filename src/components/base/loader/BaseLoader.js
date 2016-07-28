import React, { Component, PropTypes } from 'react'
import { View, StyleSheet, Text, } from 'react-native'

export default class BaseLoader extends Component {
  _renderLoader() {
    if (this.props.loading) {
      return (
        <Text>Carregando...</Text>
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

BaseLoader.propTypes = {
  loading: PropTypes.bool.isRequired,
}
