import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { decrement, increment } from '../actions/counter'

const Counter = ({ counter, decrement, increment }) => (
  <div>
    <h1>{counter}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </div>
)

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired
}

const mapStateToProps = ({ counter }) => ({ counter })
const mapDispatchToProps = { decrement, increment }

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
