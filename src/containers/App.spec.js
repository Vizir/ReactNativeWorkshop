import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import * as ConfigureStore from '../store/ConfigureStore'
import { App, styles } from './App'
import Header from '../components/base/Header'
import Post from '../components/post/Post'
import Loader from '../components/base/Loader'
import { View, ScrollView, } from 'react-native'

const setup = (props) => {
  let renderer = TestUtils.createRenderer()
  renderer.render(<App {...props} />)
  let output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

describe('App Container', () => {
  describe('when has no posts', () => {
    it('should render a view with header and a loader', () => {
      let props = {
        posts: [],
        loading: true,
        actions: {}
      }
      const { output } = setup(props)
      expect(output.type).toBe(View)
      expect(output.props.style).toBe(styles.app)

      let [ header, loaderContainer ] = output.props.children

      expect(header.type).toBe(Header)
      expect(loaderContainer.type).toBe(Loader)
      expect(loaderContainer.props.loading).toEqual(true)
    })
  })

  describe('when has posts', () => {
    it('should render a view with header and a view with posts', () => {
      let props = {
        posts: [
          { id: 1, text: 'a-text', image: 'a-image', username: 'a-user' },
          { id: 2, text: 'a-text', image: 'a-image', username: 'a-user' }
        ],
        loading: false,
        actions: {}
      }
      const { output } = setup(props)
      expect(output.type).toBe(View)

      let [ header, postsContainer ] = output.props.children

      expect(header.type).toBe(Header)
      expect(postsContainer.type).toBe(ScrollView)

      let [ post1, post2 ] = postsContainer.props.children
      expect(post1.type).toBe(Post)
      expect(post2.type).toBe(Post)

      expect(post1.key).toEqual(0)
      expect(post1.props.post).toEqual(props.posts[0])
      expect(post2.key).toEqual(1)
      expect(post2.props.post).toEqual(props.posts[1])
    })
  })
})
