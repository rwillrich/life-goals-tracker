import React from 'react'
import { render } from 'react-dom'

const Hello = ({ name = 'Walter' }) => <h1>Hello, {name}!</h1>

render(<Hello />, document.getElementByID('root'))
