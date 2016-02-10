import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Counter from './containers/counter'

export default (
  <Route path="/">
    <IndexRoute component={Counter} />
  </Route>
)
