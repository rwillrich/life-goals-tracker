import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Counter from './containers/Counter'

export default (
  <Route path="/">
    <IndexRoute component={Counter} />
  </Route>
)
