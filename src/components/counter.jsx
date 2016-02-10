import React, { PropTypes, Component } from 'react'

class Counter extends Component {
  render() {
    const { counter, decrement, increment } = this.props

    return (
      <div>
        <h1><strong>{counter}</strong></h1>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    )
  }
}

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
