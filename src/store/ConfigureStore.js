import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import RootReducer from '../reducers/Root'

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore)

export const configure = () => {
  return createStoreWithMiddleware(RootReducer)
}
