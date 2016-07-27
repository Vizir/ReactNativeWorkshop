import expect from 'expect'
import Reducer from './Posts'
import * as ActionTypes from '../constants/ActionTypes'

describe('Posts Reducer', () => {
  it('should return the initial state', () => {
    // given
    let expectedState = {
      posts: [],
      loading: true,
    }
    // when
    let initialState = Reducer(undefined, {})
    // then
    expect(initialState).toEqual(expectedState)
  })

  it('should mutate state when receive POSTS_RECEIVED', () => {
    // given
    let actionData = {
      type: ActionTypes.POSTS_RECEIVED,
      posts: [
        { id: 1, text: 'a-text', image: 'a-image', username: 'a-username' },
        { id: 2, text: 'a-text', image: 'a-image', username: 'a-username' }
      ]
    }
    let expectedState = {
      posts: [
        { id: 1, text: 'a-text', image: 'a-image', username: 'a-username' },
        { id: 2, text: 'a-text', image: 'a-image', username: 'a-username' }
      ],
      loading: false,
    }
    // when
    let newState = Reducer(undefined, actionData)
    // then
    expect(newState).toEqual(expectedState)
  })
})
