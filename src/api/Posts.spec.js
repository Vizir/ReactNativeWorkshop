import nock from 'nock'
import expect from 'expect'
import * as PostsApi from './Posts'

describe('Posts API', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('fetch posts on external API', () => {
    // given
    const expectedJSON = [
      { id: 1 }, { id: 2 }
    ]
    nock('http://private-70048-reactnativeit.apiary-mock.com')
      .get('/posts')
      .reply(200, expectedJSON)
    // when
    return PostsApi.fetchPosts().then((json) => {
      // then
      expect(json).toEqual(expectedJSON)
    })
  })
})
