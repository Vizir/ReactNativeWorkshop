import React, { Component, PropTypes, } from 'react'
import { View, ScrollView, StyleSheet, } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/base/Header'
import Post from '../components/post/Post'
import * as PostsActions from '../actions/Posts'

export class App extends Component {
  componentDidMount() {
    this.props.actions.fetchPosts()
  }

  _renderPosts() {
    if (this.props.posts.length > 0) {
      return this.props.posts.map((post, index) => {
        return (<Post key={index} post={post} />)
      })
    }
  }

  render() {
    let posts = this._renderPosts()
    return (
      <View style={styles.app}>
        <Header title='ReactNativeIt' />
        <ScrollView>
          {posts}
        </ScrollView>
      </View>
    )
  }
}

export const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#ccc',
  }
})

App.propTypes = {
  posts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    posts: state.Posts.posts,
    loading: state.Posts.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(PostsActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
