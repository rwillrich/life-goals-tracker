import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import * as reducers from './reducers'

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routerReducer
}))

export default (history, initialState) => {
  const middleware = routerMiddleware(history)
  return createStore(reducer, initialState, applyMiddleware(middleware))
}
