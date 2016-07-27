import { POSTS_RECEIVED } from '../constants/ActionTypes'

const initialState = {
  posts: [],
  loading: true
}

const receivePosts = (state, action) => {
  return {
    posts: action.posts,
    loading: false
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POSTS_RECEIVED:
      return receivePosts(state, action)
    default:
      return state
  }
}
