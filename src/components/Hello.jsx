import React, { PropTypes } from 'react'

const propTypes = {
  name: PropTypes.string
}

const Hello = ({ name = 'Walter' }) => <h1>Hello, {name}!</h1>

Hello.propTypes = propTypes

export default Hello
