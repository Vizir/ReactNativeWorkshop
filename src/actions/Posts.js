import * as ActionTypes from '../constants/ActionTypes'
import * as PostsApi from '../api/Posts'

export const fetchPosts = (api = PostsApi) => {
  return (dispatch) => {
    return api.fetchPosts()
      .then(json => dispatch(_receivePosts(json)))
  }
}

const _receivePosts = (data) => {
  return {
    type: ActionTypes.POSTS_RECEIVED,
    posts: data
  }
}
