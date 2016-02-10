import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import * as reducers from './reducers'

const rootReducer = combineReducers(Object.assign({}, reducers, {
  routing: routerReducer
}))

export default (history, initialState) => {
  const middleware = routerMiddleware(history)
  const createStoreWithMiddleware = applyMiddleware(middleware)(createStore)

  return createStoreWithMiddleware(rootReducer, initialState)
}
