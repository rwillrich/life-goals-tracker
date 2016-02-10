import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import * as reducers from './reducers'
import DevTools from './containers/dev-tools'

const rootReducer = combineReducers(Object.assign({}, reducers, {
  routing: routerReducer
}))

export default (history, initialState) => {
  const middleware = routerMiddleware(history)
  const enhancer = compose(applyMiddleware(middleware), DevTools.instrument())
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers')
      const rootReducer = combineReducers(Object.assign({}, reducers, {
        routing: routerReducer
      }))

      store.replaceReducer(rootReducer)
    })
  }

  return store
}
