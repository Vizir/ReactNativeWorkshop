import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as PostsActions from './Posts'
import * as ActionTypes from '../constants/ActionTypes'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Posts Actions', () => {
  it('creates POSTS_RECEIVED after fetching posts', () => {
    // given
    const expectedData = [{ id: 1 }, { id: 2 }]
    const FakeApi = {
      fetchPosts: () => Promise.resolve(expectedData)
    }
    const expectedActions = [
      { type: ActionTypes.POSTS_RECEIVED, posts: [{ id: 1 }, { id: 2 }] }
    ]
    const store = mockStore({ posts: {} })
    // when
    return store.dispatch(PostsActions.fetchPosts(FakeApi))
      .then(() => {
        // then
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
