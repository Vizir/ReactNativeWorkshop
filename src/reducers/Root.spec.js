import expect from 'expect'
import RootReducer from './Root'
import PostsReducer from './Posts'
import * as ActionTypes from '../constants/ActionTypes'

describe('Root Reducer', () => {
  it('should includes Posts Reducer', () => {
    expect(RootReducer(undefined, ActionTypes.POSTS_RECEIVED)).toBeA('object')
  })
})
