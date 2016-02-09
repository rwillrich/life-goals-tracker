import React, { PropTypes } from 'react'

const Counter = ({ counter, decrement, increment }) => (
  <div>
    <h1>{counter}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </div>
)

Counter.defaultProps = {
  decrement: () => undefined,
  increment: () => undefined
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  decrement: PropTypes.func,
  increment: PropTypes.func
}

export default Counter
