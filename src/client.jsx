import 'normalize.css'
import './stylesheets/base.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './configure-store'
import routes from './routes'
import DevTools from './containers/dev-tools'

const store = configureStore(browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

render((
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
      <DevTools />
    </div>
  </Provider>
), document.getElementById('root'))
