import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

import Counter from './containers/Counter'
import configureStore from './configureStore'

const routes = (
  <Route path="/">
    <IndexRedirect to="dashboard" />
    <Route path="dashboard" component={Counter} />
  </Route>
)

const store = configureStore()

render((
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
), document.getElementById('root'))
