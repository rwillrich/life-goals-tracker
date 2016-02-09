import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Counter from './containers/Counter'
import configureStore from './configureStore'

const routes = (
  <Route path="/">
    <IndexRoute component={Counter} />
  </Route>
)

const store = configureStore(browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

render((
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
), document.getElementById('root'))
